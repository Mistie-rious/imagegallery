import type { Metadata } from 'next'

import './globals.css'
import Navbar from './components/Navbar'


export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Next.Js Image Gallery',
  description: "Mistie's Image Gallery",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <main className='max-w-6xl mx-auto'>
          {children}
        </main>
        </body>
    </html>
  )
}
