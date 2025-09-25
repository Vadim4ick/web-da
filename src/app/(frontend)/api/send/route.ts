import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, phone, comment, token } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 })
    }

    if (!token) {
      return NextResponse.json({ message: 'Токен не указан' }, { status: 400 })
    }

    const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await res.json()

    if (!data.success || data.score < 0.5) {
      return NextResponse.json({ success: false, message: 'Капча не пройдена' }, { status: 400 })
    }

    // Настраиваем транспорт
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true для 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Формируем письмо
    const mailOptions = {
      from: `Web-da" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: 'Новая заявка с сайта 🚀',
      text: `
Имя: ${name}
Телефон: ${phone}
Комментарий: ${comment || '—'}
      `,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><b>Имя:</b> ${name}</p>
        <p><b>Телефон:</b> ${phone}</p>
        <p><b>Комментарий:</b> ${comment || '—'}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    const tgMessage = `📩 Новая заявка:\n\n👤 Имя: ${name}\n\n📱 Телефон: ${phone}\n\n💬 Комментарий: ${comment || '—'}`
    await fetch(`https://api.telegram.org/bot${process.env.TG_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TG_CHAT_ID, // 👈 ID группы
        text: tgMessage,
        parse_mode: 'Markdown',
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Ошибка при отправке письма:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
