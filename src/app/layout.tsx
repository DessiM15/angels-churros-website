import './globals.css'
import { CartProvider } from '@/components/CartProvider'

export const metadata = {
  title: 'Angels Churros N Chocolate - Houston\'s First Authentic Churrería',
  description: 'Experience the authentic taste of Mexico with our freshly made churros, premium hot chocolate, and warm hospitality that brings our community together.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
