'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Star, MapPin, Clock, Phone, Mail } from 'lucide-react'

interface FooterLink {
  name: string
  href: string
  external?: boolean
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks: Record<string, FooterLink[]> = {
    'Our Story': [
      { name: 'About Us', href: '/our-story' },
      { name: 'Our Values', href: '/our-story#values' },
      { name: 'Team', href: '/our-story#team' },
    ],
    'Services': [
      { name: 'Menu', href: '/menu' },
      { name: 'Parties', href: '/parties' },
      { name: 'Churro Cart', href: '/churro-cart' },
      { name: 'Giving Back', href: '/giving-back' },
    ],
    'Visit Us': [
      { name: 'Store Location', href: '/store' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Order Online', href: 'https://order.online/store/angels-churros-n-chocolate-582123', external: true },
    ],
  }

  return (
    <footer className="bg-brown-900 text-cream-50">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <img 
                    src="/assets/angels-churro-logo.webp" 
                    alt="Angels Churros N Chocolate Logo" 
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-cream-200 mb-6 leading-relaxed">
                  Houston's first authentic churrería, bringing you the warmth of Mexican café culture 
                  with fresh churros, premium chocolate, and genuine community spirit.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/Angelchurrosnchocolate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-300 hover:text-primary-400 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://www.instagram.com/angelschurroschocolate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-300 hover:text-primary-400 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.yelp.com/biz/angels-churros-n-chocolate-cypress"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-300 hover:text-primary-400 transition-colors"
                  >
                    <Star size={24} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cream-200 hover:text-primary-400 transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-cream-200 hover:text-primary-400 transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream-200">7160 Barker Cypress Rd.</p>
                    <p className="text-cream-300 text-sm">Cypress, Texas</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-primary-400 flex-shrink-0" />
                  <div>
                    <p className="text-cream-200">Mon-Sun: 7AM-9PM</p>
                    <p className="text-cream-300 text-sm">Fresh churros daily</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-primary-400 flex-shrink-0" />
                  <a
                    href="tel:+18327700802"
                    className="text-cream-200 hover:text-primary-400 transition-colors"
                  >
                    (832) 770 - 0802
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-primary-400 flex-shrink-0" />
                  <a
                    href="mailto:hello@angelschurros.com"
                    className="text-cream-200 hover:text-primary-400 transition-colors"
                  >
                    hello@angelschurros.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-brown-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream-300 text-sm">
              © {currentYear} Angels Churros N Chocolate. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-cream-300 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-cream-300 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
