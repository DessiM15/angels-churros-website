'use client'

import { usePathname } from 'next/navigation'
import ElegenciaNavbar from '@/components/ElegenciaNavbar'
import Footer from '@/components/Footer'

interface ElegenciaLayoutProps {
  children: React.ReactNode
}

const ElegenciaLayout = ({ children }: ElegenciaLayoutProps) => {
  const pathname = usePathname()
  const isMenuPage = pathname === '/menu'

  return (
    <div className="min-h-screen flex flex-col">
      {!isMenuPage && <ElegenciaNavbar />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default ElegenciaLayout
