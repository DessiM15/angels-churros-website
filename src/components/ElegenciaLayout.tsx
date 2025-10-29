'use client'

import ElegenciaNavbar from '@/components/ElegenciaNavbar'
import Footer from '@/components/Footer'

interface ElegenciaLayoutProps {
  children: React.ReactNode
}

const ElegenciaLayout = ({ children }: ElegenciaLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ElegenciaNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default ElegenciaLayout
