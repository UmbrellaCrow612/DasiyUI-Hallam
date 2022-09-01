import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
interface DrawerProps {
  children: React.ReactNode
}

export const Drawer: React.FC<DrawerProps> = ({ children }) => {
    const router = useRouter()
    const [url, setUrl] = useState('')
    useEffect(() => {
      setUrl(router.pathname)
    }, [router.pathname])
  return (
    <>
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          placeholder="Drawer"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          {children}
          {/**/}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {sideBarOptions.map((Option) => (
              <li
                key={Option.toLowerCase()}
                className={
                  (url === `/${Option.toLowerCase()}` && 'bordered') || ''
                }
              >
                <Link href={`/${Option.toLowerCase()}`}>
                  <a>{Option.replace('-', ' ')}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const sideBarOptions = [
  'Student',
  'Applicant',
  'International',
  'Study here',
  'International',
  'Business',
  'Research',
  'Alumni',
  'Visit-us',
  'About-us',
]
