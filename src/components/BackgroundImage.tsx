import Image from 'next/image'

interface BackgroundImageProps {
  src: string
  alt: string
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

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
}) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        objectFit="cover"
        quality={100}
        placeholder="blur"
        blurDataURL={rgbDataURL(237, 181, 6)}
      />
    </div>
  )
}
