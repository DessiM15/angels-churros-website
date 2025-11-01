'use client'

import ElegenciaLayout from '@/components/ElegenciaLayout'
import ElegenciaHero from '@/components/ElegenciaHero'
import ElegenciaMenuSimple from '@/components/ElegenciaMenuSimple'
import RotatingReviews from '@/components/RotatingReviews'

export default function ElegenciaHomePage() {
  return (
    <ElegenciaLayout>
      <ElegenciaHero />
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/churros-falling.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10">
          <ElegenciaMenuSimple />
          <RotatingReviews />
        </div>
      </section>
    </ElegenciaLayout>
  )
}




