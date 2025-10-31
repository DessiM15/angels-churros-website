'use client'

import './globals.css'
import { CartProvider } from '@/components/CartProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Angels Churros N Chocolate - Houston&apos;s First Authentic Churrería</title>
        <meta name="description" content="Experience the authentic taste of Mexico with our freshly made churros, premium hot chocolate, and warm hospitality that brings our community together." />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
