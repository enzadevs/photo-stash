export const metadata = {
    title: 'Photo Stash',
    description: 'Search and download free stock images from Pexels',
    name: 'viewport', 
    content:'width=device-width, initial-scale=1',
}

import 'styles/global.css'
import { StrictMode } from 'react'
import localFont from 'next/font/local'
import Footer from 'components/Navigation/Footer'

const sspro = localFont({
    src: '../public/fonts/sspro_regular.ttf'
})

export default function RootLayout({ children }) {
    return (
        <StrictMode>
            <html lang='en' className={sspro.className}>
                <body>
                    {children}
                    <Footer/>
                </body>
            </html>
        </StrictMode>
  )
}