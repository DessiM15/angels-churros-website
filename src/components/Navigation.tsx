'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingCart, Facebook, Instagram, Star } from 'lucide-react'
import { useCart } from '@/components/CartProvider'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { items } = useCart()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Parties', href: '/parties' },
    { name: 'Giving Back', href: '/giving-back' },
    { name: 'Churro Cart', href: '/churro-cart' },
    { name: 'Store', href: '/store' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrolled = scrollY > 50
      setIsScrolled(scrolled)
    }
    
    // Check initial scroll position
    handleScroll()
    
    // Add scroll listener with throttling
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-100 backdrop-blur-sm shadow-lg border-b-2 border-orange-500' 
          : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img 
                src="/assets/angels-churro-logo.webp" 
                alt="Angels Churros N Chocolate Logo" 
                className="h-12 lg:h-16 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-orange-500'
                    : isScrolled 
                      ? 'text-gray-900 hover:text-orange-400 hover:drop-shadow-lg'
                      : 'text-white hover:text-orange-400 hover:drop-shadow-lg'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Social Links & Cart */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/Angelchurrosnchocolate"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-orange-400 hover:drop-shadow-lg'
                    : 'text-white hover:text-orange-400 hover:drop-shadow-lg'
                }`}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/angelschurroschocolate/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-orange-400 hover:drop-shadow-lg'
                    : 'text-white hover:text-orange-400 hover:drop-shadow-lg'
                }`}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.yelp.com/biz/angels-churros-n-chocolate-cypress"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-orange-400 hover:drop-shadow-lg'
                    : 'text-white hover:text-orange-400 hover:drop-shadow-lg'
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
            </div>

            {/* Cart */}
            <Link
              href="/menu"
              className={`relative p-2 transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-900 hover:text-orange-400 hover:drop-shadow-lg'
                  : 'text-white hover:text-orange-400 hover:drop-shadow-lg'
              }`}
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>

            {/* Order Online CTA */}
            <a
              href="https://order.online/store/angels-churros-n-chocolate-582123"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-900 hover:text-orange-400 hover:drop-shadow-lg'
                : 'text-white hover:text-orange-400 hover:drop-shadow-lg'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brown-200"
          >
            <div className="container-custom py-4">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? 'text-primary-600'
                        : 'text-brown-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-brown-200">
                  <a
                    href="https://www.facebook.com/Angelchurrosnchocolate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-orange-400 hover:drop-shadow-lg'
                    : 'text-white hover:text-orange-400 hover:drop-shadow-lg'
                }`}
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/angelschurroschocolate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-orange-400 hover:drop-shadow-lg'
                    : 'text-white hover:text-orange-400 hover:drop-shadow-lg'
                }`}
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.yelp.com/biz/angels-churros-n-chocolate-cypress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-orange-400 hover:drop-shadow-lg'
                    : 'text-white hover:text-orange-400 hover:drop-shadow-lg'
                }`}
                  >
                    <Star size={20} />
                  </a>
                </div>

                {/* Mobile Order Online CTA */}
                <a
                  href="https://order.online/store/angels-churros-n-chocolate-582123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block mt-4"
                >
                  Order Online
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
