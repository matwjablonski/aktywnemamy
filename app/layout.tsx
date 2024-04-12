import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ReviewCTA from './components/ReviewCTA'
import { Providers } from './providers'
import { getServerSession } from 'next-auth'

const sourceSans = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aktywne Mamy',
  description: 'Inicjatywa Oddolna Aktywne Mamy',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();

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
        <Providers session={session}>
          <Header />
          <main className='z-10'>
            {children}
          </main>
          <ReviewCTA />
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
