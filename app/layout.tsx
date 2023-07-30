import './globals.css';
import { Urbanist } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModalProvider from '@/providers/ModalProviders';

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
      <body className={urbanist.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
