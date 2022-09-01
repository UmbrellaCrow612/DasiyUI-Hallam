import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'

interface MobileMenuHandlerProps {}

export const MobileMenuHandler: React.FC<MobileMenuHandlerProps> = () => {
  const router = useRouter()
  const [url, setUrl] = useState('')
  useEffect(() => {
    setUrl(router.pathname)
  }, [router.pathname])
  return (
    <>
      {/* For desktop  - dropdown  */}
      <div className="hidden dropdown md:block">
        <label tabIndex={0} className="m-1 btn">
          <BiMenuAltLeft className="text-2xl" />
        </label>
        <ul
          tabIndex={0}
          className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
        >
          {Options.map((Option) => (
            <li
              key={Option}
              className={url === `/${Option.toLowerCase()}` && "bordered" || ""}
            >
              <Link href={`${Option.toLowerCase()}`}>
                <a className='uppercase'>
                  {Option.replace('-', ' ')}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* For mobile - Drawer  */}
      <label
        htmlFor="my-drawer"
        className="btn drawer-button md:hidden"
        aria-label="Open menu"
      >
        <BiMenuAltLeft className="text-2xl" />
      </label>
    </>
  )
}

const Options = [
  'Student',
  'Staff',
  'Applicant',
]
