import Link from 'next/link'
import { BiMenuAltLeft } from 'react-icons/bi'

interface MobileMenuHandlerProps {}

export const MobileMenuHandler: React.FC<MobileMenuHandlerProps> = () => {
  return (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="m-1 btn">
          <BiMenuAltLeft className="text-2xl" />
        </label>
        <ul
          tabIndex={0}
          className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
        >
          <li>
            <Link href="">
              <a>Item 1</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
