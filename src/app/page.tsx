'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Heart, Users, Coffee, Gift } from 'lucide-react'
import Hero from '@/components/Hero'
import QuickLinks from '@/components/QuickLinks'
import FeaturedContent from '@/components/FeaturedContent'

export default function Home() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <Hero />

      {/* Quick Links */}
      <QuickLinks />

      {/* Featured Content */}
      <FeaturedContent />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6">
              Why Choose Angels Churros?
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
              We're more than just a churrería – we're a community gathering place where 
              authentic flavors meet warm hospitality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-primary-600" />,
                title: 'Authentic Recipe',
                description: 'Traditional Mexican churros made fresh daily with time-honored techniques.'
              },
              {
                icon: <Heart className="w-8 h-8 text-primary-600" />,
                title: 'Made with Love',
                description: 'Every churro is crafted with passion and care, just like abuela used to make.'
              },
              {
                icon: <Users className="w-8 h-8 text-primary-600" />,
                title: 'Community Focused',
                description: 'We believe in giving back and building connections within our community.'
              },
              {
                icon: <Coffee className="w-8 h-8 text-primary-600" />,
                title: 'Premium Chocolate',
                description: 'Rich, velvety hot chocolate made from the finest ingredients.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-brown-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-brown-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Ready to Experience Authentic Churros?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join us for the most authentic churro experience in Houston. 
              Fresh, warm, and made with love every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://order.online/store/angels-churros-n-chocolate-582123"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-cream-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Order Online Now</span>
                <ArrowRight size={20} />
              </a>
              <Link
                href="/store"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Visit Our Store</span>
                <Gift size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}




