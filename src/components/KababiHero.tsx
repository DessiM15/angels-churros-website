'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import Link from 'next/link'

const KababiHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const slides = [
    {
      id: 1,
      title: "Best Quality Churros",
      subtitle: "Authentic Mexican",
      description: "Fresh churros made daily with traditional Mexican recipes",
      image: "/assets/churro-hero.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Premium Hot Chocolate",
      subtitle: "Rich & Velvety",
      description: "Creamy chocolate made from the finest ingredients",
      image: "/assets/hot-chocolate.webp",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "Community Events",
      subtitle: "Bringing People Together",
      description: "Join us for celebrations and special gatherings",
      image: "/assets/party+packs.webp",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slides */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="text-white">
                <div className="text-orange-400 text-lg font-medium mb-4">
                  {slides[currentSlide].subtitle}
                </div>

                <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>

                <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/menu"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Explore Our Menu
                  </Link>
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    <Play className="h-6 w-6 mr-2" />
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/70'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Play Video Button */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 group"
          >
            <Play className="h-8 w-8 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-3 -right-3 bg-orange-500 text-white rounded-full p-2 z-10 hover:bg-orange-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <iframe
              src={`${slides[currentSlide].videoUrl}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default KababiHero
