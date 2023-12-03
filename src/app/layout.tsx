import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Viva Coffee',
  description: 'Web Viva Coffee',
  authors: [{name: "Nguyễn Hoàng Khuyến"}]
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="body"> 
        {/* Header */}
        <Header/>

        {children}

        {/* Footer */}
        <Footer/>
      </body>
    </html>
  )
}
