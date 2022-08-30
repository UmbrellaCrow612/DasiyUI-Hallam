import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
const Page: NextPage = () => {
  const { setTheme } = useTheme()
  return (
    <>
      <Head>
        <title>index</title>
      </Head>

      <div className="flex flex-col items-center justify-center gap-4">
        {ThemeOptions.map((Option) => (
          <button
            className="btn"
            onClick={() => setTheme(`${Option}`)}
            key={Option}
          >
            {Option}
          </button>
        ))}
      </div>
    </>
  )
}
export default Page

const ThemeOptions = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]
