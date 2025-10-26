'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, Users, Camera, Gift, Heart, Truck, MapPin, Star } from 'lucide-react'

const QuickLinks = () => {
  const quickLinks = [
    {
      title: 'Our Menu',
      description: 'Fresh churros, premium chocolate, and café favorites',
      href: '/menu',
      icon: <Menu className="w-8 h-8" />,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
    },
    {
      title: 'Our Story',
      description: 'Learn about our passion for authentic churros',
      href: '/our-story',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
    {
      title: 'Gallery',
      description: 'See our delicious churros and happy customers',
      href: '/gallery',
      icon: <Camera className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Parties',
      description: 'Celebrate with our party packages',
      href: '/parties',
      icon: <Gift className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      title: 'Churro Cart',
      description: 'Bring the churro experience to your event',
      href: '/churro-cart',
      icon: <Truck className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Visit Store',
      description: 'Find us in Cypress, Texas',
      href: '/store',
      icon: <MapPin className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6">
            Explore Angels Churros
          </h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto">
            Discover everything we have to offer – from our authentic churros to our 
            community initiatives and special events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={link.href}>
                <div className={`${link.bgColor} rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl border border-transparent group-hover:border-gray-200`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl ${link.iconColor} bg-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {link.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-brown-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {link.title}
                  </h3>
                  
                  <p className="text-brown-600 mb-6 leading-relaxed">
                    {link.description}
                  </p>
                  
                  <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <Star size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Special CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Ready to Order?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Skip the wait and order your favorite churros online. 
              Fresh, warm, and ready when you arrive.
            </p>
            <a
              href="https://order.online/store/angels-churros-n-chocolate-582123"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-cream-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>Order Online Now</span>
              <Star size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuickLinks




