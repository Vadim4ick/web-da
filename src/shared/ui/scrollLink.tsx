'use client'

import { Link } from 'react-scroll'

const ScrollLink = ({
  to,
  children,
  className,
}: {
  to: string
  children: React.ReactNode
  className?: string
}) => {
  return (
    <Link
      to={to} // id блока
      smooth={true} // плавность
      duration={800} // скорость в мс 👈 регулируй
      offset={-100} // сдвиг под фикс-хедер
      spy={true}
      className={className}
    >
      {children}
    </Link>
  )
}

export { ScrollLink }
