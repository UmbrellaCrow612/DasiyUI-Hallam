import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { GlobalLayout } from '../layouts/GlobalLayout'
import { useEffect, useState } from 'react'
import { LoadingScreen } from '../components/LoadingScreen'
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  })
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ThemeProvider>
          <GlobalLayout>
            <Component {...pageProps} />
          </GlobalLayout>
        </ThemeProvider>
      )}
    </>
  )
}

export default MyApp
