import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { Metadata } from 'next'

const DEV = process.env.METADATABASEURLDEV
const PROD = process.env.METADATABASEURLPROD
const url = String(DEV ? DEV : PROD)

export const metadata: Metadata = {
  title: { template: '%s | Asen Dashboard', default: 'Asen Dashboard' },
  description: 'The official Next.js Course Dashboard, build with App Router.',
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
