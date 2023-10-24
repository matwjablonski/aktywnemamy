import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aktywne Mamy',
  description: 'Inicjatywa Oddolna Aktywne Mamy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} min-h-screen flex flex-col justify-between`}>
        <Header />
        <main className="container mx-auto px-4 flex flex-col align-middle items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
