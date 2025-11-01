'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Facebook, Instagram } from 'lucide-react'

const ElegenciaNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [navTheme, setNavTheme] = useState<'dark' | 'light'>('dark')
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateTheme = () => {
      if (pathname !== '/giving-back') {
        setNavTheme('dark')
        return
      }

      const heroSection = document.getElementById('giving-back-hero')
      if (!heroSection) {
        setNavTheme('dark')
        return
      }

      const rect = heroSection.getBoundingClientRect()
      const navHeight = 80
      const heroVisible = rect.bottom > navHeight
      setNavTheme(heroVisible ? 'dark' : 'light')
    }

    updateTheme()

    window.addEventListener('scroll', updateTheme, { passive: true })
    window.addEventListener('resize', updateTheme)

    return () => {
      window.removeEventListener('scroll', updateTheme)
      window.removeEventListener('resize', updateTheme)
    }
  }, [pathname])

  const isLightTheme = navTheme === 'light'
  const baseTextClass = isLightTheme ? 'text-[#C86A2C]' : 'text-white'
  const hoverTextClass = isLightTheme ? 'hover:text-[#8F3F0F]' : 'hover:text-[#FFD28D]'
  const iconHoverClass = isLightTheme ? 'hover:text-[#8F3F0F]' : 'hover:text-[#FFD28D]'
  const hoverBgClass = isLightTheme ? 'hover:bg-[rgba(200,106,44,0.12)]' : 'hover:bg-white/10'
  const underlineClass = isLightTheme ? 'bg-[#C86A2C]' : 'bg-[#FFD28D]'
  const navBackgroundClass = isLightTheme
    ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-brown-900/10'
    : 'bg-transparent backdrop-blur-sm'

  const navItems = [
    { name: 'Menu', href: '/menu' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Photo Gallery', href: '/gallery' },
    { name: 'Parties', href: '/parties' },
    { name: 'Giving Back', href: '/giving-back' },
    { name: 'Churro Cart', href: '/churro-cart' },
    { name: 'Store', href: '/store' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img 
              src="/assets/angels-churro-logo.webp" 
              alt="Angels Churros N Chocolate" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className={`text-xl font-serif font-bold ${baseTextClass}`}>
                Angels Churros N Chocolate
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${baseTextClass} ${hoverTextClass} font-medium transition-colors duration-200 relative group`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${underlineClass} transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/Angelchurrosnchocolate"
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseTextClass} ${iconHoverClass} ${hoverBgClass} transition-colors duration-200 p-2 rounded-full`}
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/angelschurroschocolate/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseTextClass} ${iconHoverClass} ${hoverBgClass} transition-colors duration-200 p-2 rounded-full`}
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden ${baseTextClass} ${hoverTextClass} transition-colors duration-200 p-2`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden ${isLightTheme ? 'bg-white/95 border-[#C86A2C]/20 text-[#C86A2C]' : 'bg-black/30 border-white/20 text-white'} backdrop-blur-md border-t`}>
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 ${baseTextClass} ${hoverTextClass} ${hoverBgClass} transition-colors duration-200 rounded-lg mx-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Social Media */}
              <div className={`flex items-center justify-center space-x-6 pt-4 border-t ${isLightTheme ? 'border-[rgba(200,106,44,0.2)]' : 'border-white/20'} mx-2`}>
                <a
                  href="https://www.facebook.com/Angelchurrosnchocolate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseTextClass} ${iconHoverClass} ${hoverBgClass} transition-colors duration-200 p-2 rounded-full`}
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/angelschurroschocolate/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseTextClass} ${iconHoverClass} ${hoverBgClass} transition-colors duration-200 p-2 rounded-full`}
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default ElegenciaNavbar