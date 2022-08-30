import { useTheme } from 'next-themes'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const { theme } = useTheme()
  return (
    <Html lang="en" data-theme={`${theme}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
