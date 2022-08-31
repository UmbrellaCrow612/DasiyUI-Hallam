import { useRouter } from "next/router";
import { AiOutlineHome } from 'react-icons/ai'

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
              <AiOutlineHome className="text-2xl" />
            </button>
          </>
        )
}