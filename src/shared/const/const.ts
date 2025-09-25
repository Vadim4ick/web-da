export type NavbarItem = {
  name: string
  anchorId?: string
  path?: string
}

export const navbar: NavbarItem[] = [
  {
    name: 'О нас',
    anchorId: 'about',
  },
  {
    name: 'Преимущества',
    anchorId: 'advantages',
  },
  {
    name: 'Услуги',
    anchorId: 'services',
  },
  {
    name: 'Наши кейсы',
    path: '/cases',
  },
  {
    name: 'Контакты',
    anchorId: 'footer',
  },
]

type Social = 'tg' | 'mail' | 'phone'

export const social: { id: Social; name: string; link: string }[] = [
  {
    id: 'tg',
    name: 'Telegram',
    link: 'https://t.me/webwarecreators',
  },
  {
    id: 'mail',
    name: 'web-da@mail.ru',
    link: 'web-da@mail.ru',
  },
  {
    id: 'phone',
    name: 'Телефон',
    link: '8 (989) 292-07-17',
  },
]
