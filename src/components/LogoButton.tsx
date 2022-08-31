import { useRouter } from "next/router";
import { IoSchoolOutline } from 'react-icons/io5'

interface LogoButtonProps {

}

export const LogoButton: React.FC<LogoButtonProps> = () => {
      const Router = useRouter()
        return (
          <>
            <button
              aria-label="Home"
              className="btn"
              onClick={() => Router.push('/')}
            >
              <IoSchoolOutline className="text-2xl" />
            </button>
          </>
        )
}