import { Logo } from '@/shared/icons/Logo'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import Link from 'next/link'
import { Navbar } from './Navbar'
import { BurgerMenu } from './BurgerMenu'
import { ScrollLink } from '@/shared/ui/scrollLink'

const Header = () => {
  return (
    <header className="border-b-additional-grey-cold fixed top-0 left-0 z-50 w-full border-b bg-white">
      <Container className="max-mobile:px-4 px-4">
        <div className="flex h-[var(--h-header)] items-center justify-between gap-4">
          <Link href="/">
            <Logo className="max-mobile:h-[18px] max-mobile:max-w-[80px]" />
          </Link>

          <Navbar className="max-tablet:hidden" />

          <ScrollLink to={'contacts'} className="max-tablet:hidden">
            <Button>Отправить заявку</Button>
          </ScrollLink>

          <BurgerMenu />
        </div>
      </Container>
    </header>
  )
}

export { Header }
