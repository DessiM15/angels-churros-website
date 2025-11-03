'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'

const KababiLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="kababi-layout">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <img 
                  src="/assets/angels-churro-logo.webp" 
                  alt="Angels Churros" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Home
              </Link>
              <Link href="/our-story" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                About
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors flex items-center">
                  Menu <span className="ml-1">▼</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link href="/menu" className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50">
                    Our Menu
                  </Link>
                  <Link href="/menu-template" className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50">
                    Interactive Menu
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors flex items-center">
                  Shop <span className="ml-1">▼</span>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link href="/churro-cart" className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50">
                    Churro Cart
                  </Link>
                  <Link href="/parties" className="block px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50">
                    Party Packs
                  </Link>
                </div>
              </div>
              <Link href="/gallery" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Contact & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">(832) 770 - 0802</span>
              </div>
              <Link 
                href="/reservation" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                Book a Table
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <nav className="py-4 space-y-2">
                <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-orange-500">
                  Home
                </Link>
                <Link href="/our-story" className="block px-4 py-2 text-gray-700 hover:text-orange-500">
                  About
                </Link>
                <Link href="/menu" className="block px-4 py-2 text-gray-700 hover:text-orange-500">
                  Menu
                </Link>
                <Link href="/churro-cart" className="block px-4 py-2 text-gray-700 hover:text-orange-500">
                  Churro Cart
                </Link>
                <Link href="/gallery" className="block px-4 py-2 text-gray-700 hover:text-orange-500">
                  Gallery
                </Link>
                <Link href="/reservation" className="block px-4 py-2 text-gray-700 hover:text-orange-500">
                  Reservation
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:text-orange-500">
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <img 
                src="/assets/angels-churro-logo.webp" 
                alt="Angels Churros" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 mb-6 max-w-md">
                Houston's first authentic churrería, bringing you the finest churros and chocolate. 
                Experience the authentic taste of Mexico with our freshly made churros and premium hot chocolate.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/our-story" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
                <li><Link href="/menu" className="text-gray-300 hover:text-orange-500 transition-colors">Our Menu</Link></li>
                <li><Link href="/gallery" className="text-gray-300 hover:text-orange-500 transition-colors">Gallery</Link></li>
                <li><Link href="/reservation" className="text-gray-300 hover:text-orange-500 transition-colors">Reservation</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-orange-500" />
                  <span className="text-gray-300">7160 Barker Cypress Rd.</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-orange-500" />
                  <span className="text-gray-300">(832) 770 - 0802</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-orange-500" />
                  <span className="text-gray-300">Daily 7AM-9PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Angels Churros N Chocolate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default KababiLayout





