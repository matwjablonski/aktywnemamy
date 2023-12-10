import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ReviewCTA from './components/ReviewCTA'

const sourceSans = Source_Sans_3({ subsets: ['latin'] })

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
      <body
        className={`
          ${sourceSans.className}
          min-h-screen 
          flex 
          flex-col 
          justify-between
        `}
      >
        <div className="
          bg-snowflakes
          bg-origin-content
          z-0
          h-full
          w-full
          fixed
          mt-[110px]
        "></div>
        <Header />
        <main className='z-10'>
          {children}
        </main>
        <ReviewCTA />
        <Footer />
      </body>
    </html>
  )
}
