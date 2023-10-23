import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
      <body className={inter.className}>
        <main className="container mx-auto min-h-screen px-4 flex flex-col align-middle justify-center">
        {children}
        </main>
      </body>
    </html>
  )
}
