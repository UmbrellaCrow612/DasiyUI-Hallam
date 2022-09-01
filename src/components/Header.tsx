import { LogoButton } from './LogoButton'
import { MobileMenuHandler } from './MobileMenuHandler'
import { SearchBar } from './SearchBar'
import { SearchMenuHandler } from './SearchMenuHandler'
import { SubHeader } from './SubHeader'
import { ThemeSwitcher } from './ThemeSwitcher'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <nav className="justify-between mx-auto max-w-screen-2xl navbar">
        <div className='flex items-center gap-2'>
          <MobileMenuHandler />
          <SearchMenuHandler />
          <SearchBar />
        </div>
        <div>
          <ThemeSwitcher />
          <LogoButton />
        </div>
      </nav>
      <SubHeader />
    </header>
  )
}
