// 'use client'

// import { Link } from 'react-scroll'

// const ScrollLink = ({
//   to,
//   children,
//   className,
// }: {
//   to: string
//   children: React.ReactNode
//   className?: string
// }) => {
//   return (
//     <Link
//       to={to} // id блока
//       smooth={true} // плавность
//       duration={800} // скорость в мс 👈 регулируй
//       offset={-100} // сдвиг под фикс-хедер
//       spy={true}
//       className={className}
//     >
//       {children}
//     </Link>
//   )
// }

// export { ScrollLink }

'use client'

import { Link as Scroll } from 'react-scroll'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export const ScrollLink = ({
  to,
  children,
  className,
}: {
  to: string
  children: React.ReactNode
  className?: string
}) => {
  const pathname = usePathname()

  // Если мы на главной → плавный scroll
  if (pathname === '/') {
    return (
      <Scroll to={to} smooth={true} duration={800} offset={-100} spy={true} className={className}>
        {children}
      </Scroll>
    )
  }

  // Если мы НЕ на главной → переход на "/#to"
  return (
    <NextLink href={`/#${to}`} className={className}>
      {children}
    </NextLink>
  )
}
