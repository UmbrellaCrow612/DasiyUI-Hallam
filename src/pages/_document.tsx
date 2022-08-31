import { useTheme } from 'next-themes'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const { theme } = useTheme()
  return (
    <Html lang="en" data-theme={`${theme}`}>
      <Head />
      <body className="base-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
