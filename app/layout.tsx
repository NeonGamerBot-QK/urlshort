import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const inter = Poppins({ subsets: ['latin'], weight: '300' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    
    <html lang="en">
{/* NOTE TODO DO NOT PUT ANY ELEMENTS IN HTML, INSERT IN BODY */}
      <body className={inter.className}>
    <Navbar />
        
        {children}
    <Footer />
      </body>

    </html>
    </>

  )
}
