import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { GlobalLayout } from '../layouts/GlobalLayout'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ThemeProvider>
  )
}

export default MyApp
