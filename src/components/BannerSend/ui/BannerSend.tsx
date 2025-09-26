'use client'

import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Checkbox } from '@/shared/ui/checkbox'
import { Container } from '@/shared/ui/container'
import { Input } from '@/shared/ui/input'
import { Textarea } from '@/shared/ui/textarea'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField, FormControl } from '@/shared/ui/form'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog'

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

// схема валидации
const formSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать минимум 2 буквы' }),
  phone: z.string().regex(/^\d{10}$/, {
    message: 'Введите 10 цифр номера телефона',
  }),
  comment: z.string().optional(),
  // agree: z.literal(true, {
  //   errorMap: () => ({ message: 'Необходимо согласие с политикой' }),
  // }),
})

const BannerSend = ({ className }: { className?: string }) => {
  const [sendSuccess, setSendSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      comment: '',
      // agree: false,
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)

    if (!executeRecaptcha) {
      console.error('Не удалось инициализировать капчу')
      return
    }

    try {
      const token = await executeRecaptcha('feedback_form')

      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, token }),
      })

      if (res.ok) {
        console.log('✅ Заявка отправлена!')
        setSendSuccess(true)
      } else {
        console.error('❌ Ошибка при отправке')
      }
    } catch (err) {
      console.error('Ошибка сети:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contacts"
      className={cn('max-tablet:pb-[128px] max-mobile:pb-[96px] pb-[160px]', className)}
    >
      <Container>
        <div className="bg-primary-blue max-mobile:flex-col max-mobile:gap-6 max-mobile:py-8 max-mobile:px-2 flex h-full justify-between rounded-[20px]">
          <div className="max-tablet:m-[32px] max-mobile:px-3 max-mobile:max-w-full max-mobile:m-0 max-tablet:max-w-[292px] m-[60px] flex max-w-[486px] flex-col justify-between gap-[32px]">
            <div className="max-tablet:gap-4 flex flex-col gap-[32px]">
              <h3 className="max-tablet:text-[24px] max-tablet:leading-[110%] text-[48px] leading-[115%] font-semibold text-white">
                Готовы вывести ваш бизнес на новый уровень?
              </h3>

              <p className="font-raleway max-tablet:text-[16px] text-[24px] leading-[125%] font-semibold text-white/70">
                Получите бесплатную консультацию от наших экспертов
              </p>
            </div>

            <p className="font-raleway max-tablet:text-[16px] max-mobile:hidden text-[24px] leading-[125%] font-semibold text-white/70">
              Ответим в течение 24 часов и предложим первые идеи бесплатно
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-tablet:py-6 max-mobile:mt-2 max-tablet:px-4 max-mobile:mx-0 max-mobile:rounded-[12px] max-mobile:max-w-full max-tablet:mr-[20px] max-tablet:max-w-[344px] max-tablet:gap-6 mr-[40px] flex w-full max-w-[506px] flex-col gap-8 bg-white px-[36px] py-[60px]"
            >
              <h4 className="text-primary-black tablet:pb-2 max-tablet:text-[20px] max-tablet:px-2 max-tablet:leading-[125%] text-[28px] leading-[35px] font-semibold">
                Заполните свои данные и мы сами с вами свяжемся
              </h4>

              <div className="max-tablet:gap-1.5 flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormControl>
                      <Input
                        label="Имя"
                        type="text"
                        placeholder="Олежанов Евгений"
                        error={form.formState.errors.name}
                        {...field}
                      />
                    </FormControl>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormControl>
                      <Input
                        label="Телефон"
                        type="tel"
                        placeholder="+7 (987) 654-32-10"
                        error={form.formState.errors.phone}
                        {...field}
                      />
                    </FormControl>
                  )}
                />

                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormControl>
                      <Textarea
                        label="Комментарий"
                        placeholder="Хочу, чтобы было классно, сделайте так, чтобы было “ништяк”!"
                        {...field}
                      />
                    </FormControl>
                  )}
                />
              </div>

              <label className="max-tablet:hidden flex cursor-pointer items-center gap-3">
                <Checkbox />

                <span className="font-raleway text-additional-grey-60 group text-[16px] leading-[22px] font-medium">
                  Я подтверждаю, что ознакомлен(а) <br /> с
                  <a
                    className="border-additional-grey-60 group-hover:text-primary-black border-b transition-all duration-300"
                    download
                    href="/policy.docx"
                  >
                    {' '}
                    Политикой конфиденциальности
                  </a>
                </span>
              </label>

              <p className="tablet:hidden font-manrope text-additional-grey-60 text-center text-[12px] leading-[15px] font-semibold">
                Отправляя данную форму вы соглашаетесь <br /> с политикой конфиденциальности
              </p>

              <Button
                disabled={loading}
                type="submit"
                className="max-tablet:h-[46px] max-tablet:text-[14px] max-tablet:leading-[18px] h-[60px] rounded-[100px] text-[16px] leading-[125%] font-bold disabled:opacity-70"
              >
                Обсудить проект
              </Button>
            </form>
          </Form>

          <p className="font-raleway max-mobile:px-3 max-tablet:text-[16px] mobile:hidden text-[24px] leading-[125%] font-semibold text-white/70">
            Ответим в течение 24 часов и предложим первые идеи бесплатно
          </p>
        </div>
      </Container>

      <Dialog open={sendSuccess} onOpenChange={setSendSuccess}>
        <DialogContent
          className="max-mobile:px-[52px] max-mobile:py-[36px] rounded-[12px] p-[48px] shadow-none"
          showCloseButton={false}
        >
          <DialogHeader className="max-mobile:gap-[36px] flex flex-col gap-[48px]">
            <DialogTitle asChild>
              <p className="text-primary-black max-mobile:text-[20px] text-center text-[28px] leading-[125%] font-semibold">
                Ваша заявка успешно отправлена, скоро свяжемся с вами
              </p>
            </DialogTitle>

            <DialogDescription asChild>
              <Button
                type="button"
                onClick={() => setSendSuccess(false)}
                className="max-mobile:h-[46px] max-mobile:text-[14px] max-mobile:leading-[18px] h-[60px] rounded-[100px] text-[16px] leading-[20px] text-white"
              >
                Отлично
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export { BannerSend }
