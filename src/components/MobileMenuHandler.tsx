import Link from 'next/link'
import { BiMenuAltLeft } from 'react-icons/bi'

interface MobileMenuHandlerProps {}

export const MobileMenuHandler: React.FC<MobileMenuHandlerProps> = () => {
  return (
    <>
      <div className="hidden dropdown md:block">
        <label tabIndex={0} className="m-1 btn">
          <BiMenuAltLeft className="text-2xl" />
        </label>
        <ul
          tabIndex={0}
          className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
        >
          {Options.map((Option) => (
            <li key={Option}>
              <Link href={`/${Option.toLowerCase()}`}>
                <a>{Option.replace('-', ' ')}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <label htmlFor="my-drawer" className="btn drawer-button md:hidden" aria-label='Open menu'>
        <BiMenuAltLeft className="text-2xl" />
      </label>
    </>
  )
}

const Options = [
  'Covid-19',
  'Local-residents',
  'MyHallam',
  'Staff',
  'Study-here',
  'International',
  'Research',
  'Alumni',
  'Visit-us',
  'About-us',
  'MORE',
]
