import type { Metadata } from 'next'
import { Manrope, Montserrat, Raleway, Roboto } from 'next/font/google'
import { YandexMetrikaWrapper } from '@/shared/ui/yandexMetrikaContainer'

import './../../shared/assets/style/globals.css'
import { Header } from '@/modules/Header'
import { Footer } from '@/modules/Footer'
import { CookieConsent } from '@/components/CookieConsent'

import { Providers } from '@/shared/providers/Providers'
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['500', '600'],
})

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400'],
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['600'],
})

export const metadata: Metadata = {
  // metadataBase: new URL(SITE_URL),
  applicationName: 'Web-da',
  creator: 'Web-da',
  authors: [{ name: 'Web-da' }],
  category: 'technology',

  title: {
    default: 'Web-da — создание сайтов в Краснодаре',
    template: '%s | Web-da Краснодар',
  },

  description:
    'Студия Web-da в Краснодаре: разработка сайтов под ключ — лендинги, корпоративные сайты и интернет-магазины. Быстрая загрузка, адаптивная верстка, SEO-оптимизация и поддержка.',

  keywords: [
    'создание сайтов Краснодар',
    'разработка сайта под ключ',
    'лендинг Краснодар',
    'интернет-магазин разработка',
    'корпоративный сайт',
    'верстка и дизайн',
    'SEO оптимизация',
    'поддержка сайта',
    'веб-студия Краснодар',
    'UI/UX дизайн',
  ],

  alternates: {
    canonical: '/',
    languages: { 'ru-RU': '/' },
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: 'Web-da',
    title: 'Web-da — создание сайтов в Краснодаре',
    description:
      'Лендинги, корпоративные сайты и интернет-магазины с быстрой загрузкой, адаптивностью и SEO.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Web-da — создание сайтов в Краснодаре',
    description:
      'Разработка сайтов под ключ: лендинги, корпоративные, e-commerce. Скорость, дизайн, SEO.',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  verification: {
    // добавь токены, когда получишь
    google: '',
    yandex: '',
  },

  icons: {
    icon: '/favicon.png',
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <Providers>
        <body
          className={`${montserrat.variable} ${raleway.variable} ${roboto.variable} ${manrope.variable} flex h-full min-h-screen flex-col antialiased`}
        >
          <Header />

          <main className="flex-1 pt-[var(--h-header)]">{children}</main>

          <Footer />

          <CookieConsent />

          <YandexMetrikaWrapper />
        </body>
      </Providers>
    </html>
  )
}
