import { IoSchoolOutline } from 'react-icons/io5'
import { BiMenuAltLeft } from 'react-icons/bi'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { setTheme } = useTheme()
  const Router = useRouter()
  return (
    <header>
      <nav className="justify-between mx-auto max-w-screen-2xl navbar bg-base-100">
        {/* Icon Button */}
        <button aria-label="Menu" className="btn btn-outline">
          <BiMenuAltLeft className="text-2xl" />
        </button>
        {/* Icon Button ends*/}

        <div>
          {/* Menu */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1 btn" aria-label="Color">
              <IoColorPaletteOutline />
            </label>
            <ul
              tabIndex={0}
              className="p-2 overflow-scroll shadow dropdown-content menu bg-base-100 rounded-box w-52 h-60"
            >
              {ThemeOptions.map((Option) => (
                <li key={Option}>
                  <button onClick={() => setTheme(`${Option}`)}>
                    {Option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Menu ends*/}

          {/* Icon Button */}
          <button
            aria-label="Home"
            className="btn"
            onClick={() => Router.push("/")}
          >
            <IoSchoolOutline className="text-2xl" />
          </button>
          {/* Icon Button ends */}
        </div>
      </nav>
    </header>
  )
}

const ThemeOptions: Array<string> = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]
