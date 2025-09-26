'use client'

import { navbar } from '@/shared/const/const'
import { useMediaQuery } from '@/shared/hooks/useMedia'
import { cn } from '@/shared/lib/utils'
import { ScrollLink } from '@/shared/ui/scrollLink'
import Link from 'next/link'

const Navbar = ({
  className,
  onCloseBurger,
}: {
  className?: string
  onCloseBurger?: () => void
}) => {
  const isTablet = useMediaQuery(991)
  const items = isTablet ? navbar.filter((item) => !item.isNotBurger) : navbar

  return (
    <nav>
      <ul className={cn('max-tablet:gap-6 flex items-center gap-[48px]', className)}>
        {items.map((item) => {
          if (item.path) {
            return (
              <li key={item.name}>
                <Link
                  onClick={onCloseBurger}
                  href={item.path}
                  className="font-raleway text-primary-black max-tablet:font-montserrat max-tablet:text-[28px] max-tablet:leading-[125%] cursor-pointer font-semibold"
                >
                  {item.name}
                </Link>
              </li>
            )
          }

          return (
            <li key={item.name}>
              <ScrollLink
                onClick={onCloseBurger}
                to={item.anchorId!}
                className="font-raleway text-primary-black max-tablet:font-montserrat max-tablet:text-[28px] max-tablet:leading-[125%] cursor-pointer font-semibold"
              >
                {item.name}
              </ScrollLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { Navbar }
