import { useTheme } from 'next-themes'
import { Html, Head, Main, NextScript } from 'next/document'
import { SearchModal } from '../components/SearchModal'

export default function Document() {
  const { theme } = useTheme()
  return (
    <Html lang="en" data-theme={`${theme}`}>
      <Head />
      {/* Has to be placed before body */}
      <SearchModal />
      <body className="base-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
