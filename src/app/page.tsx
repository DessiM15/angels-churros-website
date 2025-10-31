import ElegenciaLayout from '@/components/ElegenciaLayout'
import ElegenciaHero from '@/components/ElegenciaHero'
import ElegenciaMenuSimple from '@/components/ElegenciaMenuSimple'
import RotatingReviews from '@/components/RotatingReviews'

export default function ElegenciaHomePage() {
  return (
    <ElegenciaLayout>
      <ElegenciaHero />
      <ElegenciaMenuSimple />
      <RotatingReviews />
    </ElegenciaLayout>
  )
}




