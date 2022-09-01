import { useRouter } from 'next/router'
import { AiOutlineHome } from 'react-icons/ai'

interface LogoButtonProps {}

export const LogoButton: React.FC<LogoButtonProps> = () => {
  const router = useRouter()
  return (
    <>
      <button
        aria-label="Home"
        className="btn"
        onClick={() => router.push('/')}
      >
        <AiOutlineHome className="text-2xl" />
      </button>
    </>
  )
}
