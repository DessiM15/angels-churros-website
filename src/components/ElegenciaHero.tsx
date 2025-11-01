'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const ElegenciaHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loadedVideos, setLoadedVideos] = useState<Record<number, boolean>>({})
  const [failedVideos, setFailedVideos] = useState<Record<number, boolean>>({})

  const slides = [
    {
      id: 1,
      title: "Angels Churros",
      maintitle: "N Chocolate",
      description: "Houston's first authentic churrería, where culinary artistry meets exceptional dining experiences. Experience the authentic taste of Mexico with our freshly made churros and premium hot chocolate.",
      buttonUrl: "/reservation",
      backgroundImage: "/assets/churro-hero.jpg",
      backgroundVideo: "/assets/churros-with-hot-chocolate.mp4"
    },
    {
      id: 2,
      title: "Fresh Daily",
      maintitle: "Churros",
      description: "Made fresh every morning using traditional Mexican recipes. Crispy on the outside, soft on the inside, dusted with cinnamon sugar and served with rich hot chocolate.",
      buttonUrl: "/menu",
      backgroundImage: "/assets/churros.webp"
    },
    {
      id: 3,
      title: "Community",
      maintitle: "Gathering",
      description: "Join us for celebrations and special gatherings. Plenty of tables, no television, no 30-minute maximum. Come and stay awhile while you enjoy our fresh churros.",
      buttonUrl: "/parties",
      backgroundImage: "/assets/hero-store-front.png"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video/Image with vertical snapping */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={slides[currentSlide].id}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {slides[currentSlide].backgroundVideo ? (
              <>
                <img
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loadedVideos[slides[currentSlide].id] && !failedVideos[slides[currentSlide].id] ? 'opacity-0' : 'opacity-100'}`}
                  src={slides[currentSlide].backgroundImage}
                  alt={slides[currentSlide].title}
                  aria-hidden="true"
                />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-hidden="true"
                  onLoadedData={() =>
                    setLoadedVideos((prev) => ({ ...prev, [slides[currentSlide].id]: true }))
                  }
                  onError={() =>
                    setFailedVideos((prev) => ({ ...prev, [slides[currentSlide].id]: true }))
                  }
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loadedVideos[slides[currentSlide].id] && !failedVideos[slides[currentSlide].id] ? 'opacity-100' : 'opacity-0'}`}
                  poster={slides[currentSlide].backgroundImage}
                >
                  <source src={slides[currentSlide].backgroundVideo} type="video/mp4" />
                </video>
              </>
            ) : (
              <img 
                className="w-full h-full object-cover" 
                src={slides[currentSlide].backgroundImage} 
                alt={slides[currentSlide].title}
              />
            )}
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-20 sm:py-0">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <AnimatePresence>
              <motion.div
                key={slides[currentSlide].id}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="text-white"
              >
                {/* Main Title */}
                <div className="mb-6 sm:mb-8">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-2 sm:mb-4 leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold text-[#FFD28D] leading-tight">
                    {slides[currentSlide].maintitle}
                  </h1>
                </div>

                {/* Description */}
                <div className="mb-8 sm:mb-12">
                  <p className="text-base sm:text-lg lg:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href={slides[currentSlide].buttonUrl}
                  className="inline-block bg-[#FFD28D] hover:bg-[#FFD28D]/90 text-[#040D10] px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View More
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300"
      >
        <ChevronUp className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300"
      >
        <ChevronDown className="h-8 w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-[#FFD28D] h-8' : 'bg-white/50 hover:bg-white/70'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ElegenciaHero
