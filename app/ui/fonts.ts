import {
  Inter,
  Lusitana,
  Roboto_Mono,
  Roboto,
  Jacques_Francois_Shadow,
  Noto_Color_Emoji
} from 'next/font/google'
export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({ weight: ['400', '700'], subsets: ['latin'] })
export const roboto_mono = Roboto_Mono({ subsets: ['latin'], display: 'swap' })
export const roboto = Roboto({
  weight: ['100', '500', '900'],
  style: ['italic'],
  subsets: ['latin'],
  display: 'swap'
})
export const jacques = Jacques_Francois_Shadow({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})
export const noto = Noto_Color_Emoji({
  weight: ['400'],
  style: ['normal'],
  subsets: ['emoji'],
  display: 'swap'
})
