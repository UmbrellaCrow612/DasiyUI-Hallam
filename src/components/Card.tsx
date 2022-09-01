import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  src: string
  alt: string
  title: string
  body: string
  href: string
}

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

export const Card: React.FC<CardProps> = ({ src, alt, title, body, href }) => {
  return (
    <div className="shadow-xl card w-96 bg-base-100 glass">
      <figure className="relative w-full h-[200px] px-10 pt-10">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          placeholder="blur"
          blurDataURL={rgbDataURL(360, 100, 6)}
          className="rounded-tl-md rounded-tr-md"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="justify-end card-actions">
          <Link href={`/${href}`}>
            <a className="btn btn-primary">More</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
