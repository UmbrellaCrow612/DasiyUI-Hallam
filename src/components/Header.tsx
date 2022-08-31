import { LogoButton } from './LogoButton'
import { MobileMenuHandler } from './MobileMenuHandler'
import { SearchMenuHandler } from './SearchMenuHandler'
import { ThemeSwitcher } from './ThemeSwitcher'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <nav className="justify-between mx-auto max-w-screen-2xl navbar">
        <div>
          <SearchMenuHandler />
          <MobileMenuHandler />
        </div>
        <div>
          <ThemeSwitcher />
          <LogoButton />
        </div>
      </nav>
    </header>
  )
}
