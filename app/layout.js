import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test Senior Formentin',
  description: 'Tech Test by Formentin Luca',
}

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
