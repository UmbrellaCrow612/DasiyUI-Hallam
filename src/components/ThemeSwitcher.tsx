import { IoColorPaletteOutline } from 'react-icons/io5'
import { FiMoreVertical } from 'react-icons/fi'
import { useTheme } from 'next-themes'
interface ThemeSwitcherProps {}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const { setTheme } = useTheme()
  return (
    <>
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="gap-1 m-1 btn"
          aria-label="Color pallette"
        >
          <IoColorPaletteOutline />
          <span className="items-center hidden gap-1 md:flex">
            Theme <FiMoreVertical />
          </span>
        </label>
        <ul
          tabIndex={0}
          className="p-2 overflow-scroll shadow dropdown-content menu bg-base-100 rounded-box w-52 h-60"
        >
          {ThemeOptions.map((Option) => (
            <li key={Option}>
              <button
                className="tracking-wide uppercase"
                onClick={() => setTheme(`${Option}`)}
              >
                {Option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
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
