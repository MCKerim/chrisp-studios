import '../styles/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Molecules/Header/Header'
import Footer from './components/Molecules/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChrisP-Studios',
  description: 'Small indie gamedev studio located in germany.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="darkBeauty" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
