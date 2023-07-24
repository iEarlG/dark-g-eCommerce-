import './globals.css'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Dark G Store',
  description: 'Dark G  Store - Buy Dark G Merchandise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  )
}
