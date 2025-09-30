'use client'

import { useState } from 'react'
import { Navbar } from './Navbar'
import { Button } from '@/shared/ui/button'
import { BurgerMenuIcon } from '@/shared/icons/BurgerMenuIcon'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu'
import { social } from '@/shared/const/const'
import { ScrollLink } from '@/shared/ui/scrollLink'
import { useMediaQuery } from '@/shared/hooks/useMedia'

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false)

  const isMobile = useMediaQuery(768)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild className="border-none outline-none">
        <button
          className={'tablet:hidden bg-additional-grey-cold burger rounded-[12px] p-[11px]'}
          aria-label="Открыть меню"
        >
          <BurgerMenuIcon width={18} height={18} open={open} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        forceMount
        side="bottom"
        align="end"
        sideOffset={isMobile ? 0 : 20}
        alignOffset={isMobile ? 0 : -5}
        className={[
          // ваши размеры/вёрстка
          'max-mobile:h-[calc(100dvh_-_var(--h-header)_-_13px)] w-full max-w-full rounded-[20px!important] border-none px-[35px] py-[48px]',
          'origin-top transform-gpu will-change-[transform]',

          '!opacity-100 data-[state=closed]:!opacity-100 data-[state=open]:!opacity-100',
          'data-[state=closed]:scale-100 data-[state=open]:scale-100',
          'data-[state=open]:translate-y-0',

          '!z-40',

          // анимация открытия/закрытия
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
          'data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top',

          // чуть плавнее движение
          'duration-400 ease-out',
        ].join(' ')}
      >
        <div className="max-mobile:gap-[64px] max-mobile:h-full max-mobile:justify-between flex flex-col gap-[45px]">
          <div className="flex w-full flex-col items-center justify-center gap-[32px]">
            <p className="text-additional-grey-60 text-[18px] leading-[125%] font-medium">
              Навигация
            </p>

            <Navbar
              onCloseBurger={() => setOpen(false)}
              className="max-tablet:gap-4 flex flex-col"
            />
          </div>

          <div className="flex flex-col gap-12">
            <ul className="max-tablet:items-center max-mobile:gap-[10px] flex flex-col gap-[10px]">
              <ScrollLink
                onClick={() => setOpen(false)}
                to={'footer'}
                className="flex h-full w-full items-center justify-center"
              >
                <p className="text-primary-blue text-[18px] leading-[125%] font-medium transition-all">
                  Контакты
                </p>
              </ScrollLink>

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
                    className="text-additional-grey-60 hover:text-primary-blue text-[18px] leading-[125%] font-medium transition-all"
                  >
                    {item.id === 'phone' ? item.link : item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-center">
              <ScrollLink
                to={'contacts'}
                className="flex h-full w-full items-center justify-center"
              >
                <Button className="w-full max-w-[190px] rounded-[100px] py-[14px]">
                  Отправить заявку
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
