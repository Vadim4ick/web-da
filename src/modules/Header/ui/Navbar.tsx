'use client'

import { navbar } from '@/shared/const/const'
import { cn } from '@/shared/lib/utils'
import { ScrollLink } from '@/shared/ui/scrollLink'

const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav>
      <ul className={cn('max-tablet:gap-6 flex items-center gap-[48px]', className)}>
        {navbar.map((item) => {
          return (
            <li key={item.name}>
              <ScrollLink
                to={item.anchorId}
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
