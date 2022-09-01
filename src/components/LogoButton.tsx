import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'

interface LogoButtonProps {}

export const LogoButton: React.FC<LogoButtonProps> = () => {
  const router = useRouter()
  const [url, setUrl] = useState('')
  useEffect(() => {
    setUrl(router.pathname)
  }, [router.pathname])
  console.log(url)
  return (
    <>
      <button
        aria-label="Home"
        className={url === '/_error' ? 'btn btn-primary' : 'btn'}
        onClick={() => router.push('/')}
      >
        <AiOutlineHome className="text-2xl" />
      </button>
    </>
  )
}
