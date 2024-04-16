import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

const DEV = process.env.METADATABASEURLDEV
const PROD = process.env.METADATABASEURLPROD
const url = String(DEV ? DEV : PROD)

export const metadata = {
  metadataBase: new URL(url),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE'
    }
  },
  openGraph: {
    images: '/opengraph-image.png'
  }
}
