'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, MapPin, Clock } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/lume-video-hero.mp4" type="video/mp4" />
          <source src="/assets/envato-churro-hero.mov" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/assets/churro-hero.jpg"
            alt="Fresh churros and chocolate"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          {/* Initial Logo Animation */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <img
                src="/assets/angels-churro-logo.webp"
                alt="Angels Churros N Chocolate Logo"
                className="h-64 lg:h-96 w-auto mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Hero Content - Delayed Entry */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 }}
              className="inline-block bg-gradient-to-r from-orange-500/90 to-orange-600/90 backdrop-blur-sm border-2 border-orange-400/50 rounded-full px-8 py-3 mb-8 shadow-2xl"
            >
              <span className="text-white text-base font-bold tracking-wide drop-shadow-lg">
                Houston's FIRST & ONLY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.2 }}
              className="text-7xl lg:text-9xl font-serif font-bold text-white mb-6 leading-[0.8] drop-shadow-2xl"
            >
              <span className="block text-white drop-shadow-2xl">
                Churros
              </span>
              <span className="block text-5xl lg:text-6xl font-light text-white drop-shadow-xl mt-2">
                & Chocolate
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.4 }}
              className="max-w-2xl"
            >
              <p className="text-xl lg:text-2xl text-white mb-4 font-light leading-relaxed drop-shadow-lg">
                Houston's first authentic churrería
              </p>
              <p className="text-lg text-white leading-relaxed mb-4 drop-shadow-md">
                Inspired by the great cafeterías of Mexico, where conversation blooms and 
                writers, artists, activists and intellectuals make their mark.
              </p>
              <p className="text-base text-white/90 leading-relaxed drop-shadow-md">
                Plenty of tables, no television, no 30-minute maximum. Come and stay awhile.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <a
              href="https://order.online/store/angels-churros-n-chocolate-582123"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center">
                Order Fresh Churros
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <Link
              href="/menu"
              className="group flex items-center justify-center py-4 px-8 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <span>View Full Menu</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.8 }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <div className="flex items-center space-x-6 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>7160 Barker Cypress Rd.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Daily 7AM-9PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-brown-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-brown-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero