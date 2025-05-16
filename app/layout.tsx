import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'

const sourceSans = Source_Sans_3({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aktywne Mamy',
  description: 'Koło Gospodyń Wiejskich w Dopiewcu',
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
        `}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
