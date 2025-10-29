'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const ElegenciaHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: "Angels Churros",
      maintitle: "N Chocolate",
      description: "Houston's first authentic churrería, where culinary artistry meets exceptional dining experiences. Experience the authentic taste of Mexico with our freshly made churros and premium hot chocolate.",
      buttonUrl: "/reservation",
      backgroundImage: "/assets/churro-hero.jpg"
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
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover" 
          src={slides[currentSlide].backgroundImage} 
          alt={slides[currentSlide].title}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="text-white">
              {/* Main Title */}
              <div className="mb-8">
                <h1 className="text-6xl lg:text-8xl font-serif font-bold mb-4 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <h1 className="text-6xl lg:text-8xl font-serif font-bold text-[#FFD28D] leading-tight">
                  {slides[currentSlide].maintitle}
                </h1>
              </div>

              {/* Description */}
              <div className="mb-12">
                <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href={slides[currentSlide].buttonUrl}
                className="inline-block bg-[#FFD28D] hover:bg-[#FFD28D]/90 text-[#040D10] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-[#FFD28D] w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ElegenciaHero
