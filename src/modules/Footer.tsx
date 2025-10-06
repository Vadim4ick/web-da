import { social } from '@/shared/const/const'
import { Logo } from '@/shared/icons/Logo'
import { cn } from '@/shared/lib/utils'
import { Container } from '@/shared/ui/container'
import Link from 'next/link'

const LinksDocs = ({ className }: { className?: string }) => {
  return (
    <div className={cn('max-mobile:gap-[10px] flex flex-col gap-4', className)}>
      {/* <a
        className="text-additional-grey-60 hover:text-primary-blue max-mobile:text-[18px] w-fit text-[20px] leading-[125%] font-medium transition-all"
        href="#!"
      >
        Публичная оферта
      </a> */}

      <a
        download
        className="text-additional-grey-60 hover:text-primary-blue max-mobile:text-[18px] w-fit text-[20px] leading-[125%] font-medium transition-all"
        href="/policy.docx"
      >
        Политика конфиденциальности
      </a>
    </div>
  )
}

const Footer = () => {
  return (
    <footer
      id="footer"
      className="max-tablet:bg-additional-grey-cold max-tablet:px-2 tablet:rounded-t-[48px] max-mobile:pb-2 bg-white"
    >
      <Container className="max-desktop:flex-col max-desktop:gap-[72px] max-tablet:bg-white max-mobile:pt-[48px] max-mobile:pb-[36px] flex h-full items-center justify-between gap-4 rounded-[20px] px-[32px] pt-[60px] pb-[72px]">
        <div className="flex h-full flex-col justify-between gap-12">
          <Link href="/">
            <Logo className="max-mobile:w-[154px] max-mobile:h-[35px]" width={204} height={46} />
          </Link>

          <LinksDocs className="max-desktop:hidden" />
        </div>

        <div className="max-tablet:flex-col max-tablet:items-center max-tablet:justify-center flex gap-[96px] max-[1300px]:gap-[48px]">
          <div className="max-tablet:items-center max-mobile:gap-[10px] flex flex-col gap-4">
            <p className="text-primary-black max-tablet:text-primary-blue max-mobile:text-[18px] text-[20px] leading-[125%] font-semibold">
              Услуги
            </p>

            <ul className="max-tablet:items-center max-mobile:gap-[10px] flex flex-col gap-4">
              <li>
                <span className="text-additional-grey-60 max-mobile:text-[18px] text-[20px] leading-[125%] font-medium">
                  Лендинг / сайт-визитка
                </span>
              </li>
              <li>
                <span className="text-additional-grey-60 max-mobile:text-[18px] text-[20px] leading-[125%] font-medium">
                  Корпоративный сайт
                </span>
              </li>
              <li>
                <span className="text-additional-grey-60 max-mobile:text-[18px] text-[20px] leading-[125%] font-medium">
                  Интернет-магазин
                </span>
              </li>
            </ul>
          </div>

          <div className="max-tablet:items-center max-mobile:gap-[10px] flex flex-col gap-4">
            <p className="text-primary-black max-tablet:text-primary-blue max-mobile:text-[18px] text-[20px] leading-[125%] font-semibold">
              Контакты
            </p>

            <ul className="max-tablet:items-center max-mobile:gap-[10px] flex flex-col gap-4">
              {social.map((item) => (
                <li key={item.id}>
                  <a
                    target="_blank"
                    href={
                      item.id === 'mail'
                        ? `mailto:${item.link}`
                        : item.id === 'phone'
                          ? `tel:${item.link}`
                          : item.link
                    }
                    className="text-additional-grey-60 hover:text-primary-blue max-mobile:text-[18px] text-[20px] leading-[125%] font-medium transition-all"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-tablet:items-center max-mobile:gap-[10px] flex max-w-[191px] flex-col gap-4">
            <p className="text-primary-black max-tablet:text-primary-blue max-mobile:text-[18px] text-[20px] leading-[125%] font-semibold">
              Встретиться
            </p>

            <ul className="max-tablet:items-center max-mobile:gap-[10px] flex flex-col gap-4">
              <li className="max-tablet:text-center">
                <span className="text-additional-grey-60 max-mobile:text-[18px] text-[20px] leading-[125%] font-medium">
                  г. Краснодар, ул. Рашпилевская, 74
                </span>
              </li>
              <li>
                <span className="text-additional-grey-60 max-mobile:text-[18px] text-[20px] leading-[125%] font-medium">
                  Пн-Пт: 10:00-18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <LinksDocs className="desktop:hidden items-center" />
      </Container>
    </footer>
  )
}

export { Footer }
