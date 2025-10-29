'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Facebook, Instagram } from 'lucide-react'

const ElegenciaNavbarOrange = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-sm">
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
              <h1 className="text-xl font-serif font-bold text-[#FFD28D]">
                Angels Churros
              </h1>
              <p className="text-sm text-[#FFD28D]/80">
                N Chocolate
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#FFD28D] hover:text-white font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/Angelchurrosnchocolate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD28D] hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-[#FFD28D]/10"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/angelschurroschocolate/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD28D] hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-[#FFD28D]/10"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#FFD28D] hover:text-white transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/30 backdrop-blur-md border-t border-[#FFD28D]/20">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-[#FFD28D] hover:text-white hover:bg-[#FFD28D]/10 transition-colors duration-200 rounded-lg mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Social Media */}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t border-[#FFD28D]/20 mx-2">
                <a
                  href="https://www.facebook.com/Angelchurrosnchocolate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFD28D] hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-[#FFD28D]/10"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/angelschurroschocolate/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFD28D] hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-[#FFD28D]/10"
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

export default ElegenciaNavbarOrange
