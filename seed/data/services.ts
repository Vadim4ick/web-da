import { Service } from '@/payload-types'
import payload from 'payload'

export const seedServices = async () => {
  console.log('🌱 Сидим услуги...')

  const services: Pick<Service, 'title' | 'description' | 'priceFrom' | 'extras'>[] = [
    {
      title: 'Лендинг / сайт-визитка',
      description:
        'Простые и эффективные сайты-одностраничники, идеально подходящие для представления вашей компании или услуги',
      priceFrom: 17000,
      extras: [
        { name: 'система управления сайтом', price: '+ 8 000 ₽' },
        { name: 'наполнение контентом', price: 'от 10 000 ₽' },
        { name: 'пакет юридических услуг', price: 'от 8 000 ₽' },
      ],
    },
    {
      title: 'Корпоративный сайт',
      description:
        'Сайты, представляющие вашу компанию в деталях, с описанием услуг, продукции, команды и контактной информации',
      priceFrom: 25000,
      extras: [
        { name: 'система управления сайтом', price: '+ 8 000 ₽' },
        { name: 'наполнение контентом', price: 'от 10 000 ₽' },
        { name: 'пакет юридических услуг', price: 'от 8 000 ₽' },
      ],
    },
    {
      title: 'Интернет-магазин',
      description:
        'Функциональные онлайн-магазины с каталогом товаров, корзиной, системой оплаты и управления заказами',
      priceFrom: 45000,
      extras: [
        { name: 'система управления сайтом', price: '+ 8 000 ₽' },
        { name: 'наполнение контентом', price: 'от 10 000 ₽' },
        { name: 'пакет юридических услуг', price: 'от 8 000 ₽' },
      ],
    },
  ]

  for (const service of services) {
    await payload.create({
      collection: 'services',
      data: service,
    })
  }
}
