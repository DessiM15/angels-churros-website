'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, Heart, Store } from 'lucide-react'
import ElegenciaLayout from '@/components/ElegenciaLayout'
import RotatingReviews from '@/components/RotatingReviews'

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  title: string
  description: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 'img-churro-hero',
    src: '/assets/churro-hero.jpg',
    alt: 'Classic churros',
    category: 'products',
    title: 'Classic Churros',
    description: 'Golden, crispy churros dusted with cinnamon sugar'
  },
  {
    id: 'img-heart-churros',
    src: '/assets/heart-churros.webp',
    alt: 'Heart shaped churros',
    category: 'products',
    title: 'Heart Churros',
    description: 'Sweet heart-shaped churros for special moments'
  },
  {
    id: 'img-coffee',
    src: '/assets/coffee.webp',
    alt: 'Fresh coffee',
    category: 'products',
    title: 'Fresh Coffee',
    description: 'Perfectly brewed coffee to pair with churros'
  },
  {
    id: 'img-champurrado',
    src: '/assets/hero-champurrado.jpg',
    alt: 'Hot chocolate champurrado',
    category: 'products',
    title: 'Champurrado',
    description: 'Rich Mexican hot chocolate, warm and comforting'
  },
  {
    id: 'img-elote',
    src: '/assets/elote.webp',
    alt: 'Elote',
    category: 'community',
    title: 'Elote',
    description: 'Authentic Mexican street corn favorite'
  },
  {
    id: 'img-store-alt',
    src: '/assets/store-front-alt.png',
    alt: 'Store front alternate view',
    category: 'store',
    title: 'Storefront View',
    description: 'Another angle of our welcoming storefront'
  },
  {
    id: 'img-cart-1',
    src: '/assets/churro-cart-1.webp',
    alt: 'Churro cart event',
    category: 'events',
    title: 'Churro Cart',
    description: 'Serving smiles at your events'
  },
  {
    id: 'img-party-packs',
    src: '/assets/party+packs.webp',
    alt: 'Party packs',
    category: 'events',
    title: 'Party Packs',
    description: 'Perfect bundles for parties and gatherings'
  },
  {
    id: 'img-angels-hero-2',
    src: '/assets/inside-the-store.jpg',
    alt: 'Interior and vibe',
    category: 'store',
    title: 'Inside the Store',
    description: 'Cozy vibes to enjoy your treats'
  },
  {
    id: 'img-photo-gallery',
    src: '/assets/photo-gallery.jpg',
    alt: 'Photo gallery highlight',
    category: 'store',
    title: 'Churro Pop',
    description: 'A favorite moment from around the shop'
  },
  {
    id: 'img-photo-gallery-2',
    src: '/assets/photo-gallery-2.jpg',
    alt: 'Photo gallery highlight 2',
    category: 'store',
    title: 'Fresh Homemade Tamales',
    description: 'Another favorite scene from the shop'
  },
  {
    id: 'img-photo-gallery-3',
    src: '/assets/photo-gallery-3.jpg',
    alt: 'Photo gallery highlight 3',
    category: 'store',
    title: "Angel's brings people together",
    description: 'More moments from our space'
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (
    <ElegenciaLayout>
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/photo-gallery-hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brown-900/80 to-brown-800/70"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Experience It Yourself
                </h1>
                <p className="text-xl lg:text-2xl text-elegencia-gold max-w-3xl mx-auto">
                  Take a visual journey through our churros, store, events, and community impact
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-[#1a1f23]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover relative">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center relative">
                    {image.src.startsWith('/') ? (
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-6xl">{image.src}</span>
                    )}
                    {/* Overlay with text - only visible on hover */}
                    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-white mb-2 text-center">
                        {image.title}
                      </h3>
                      <p className="text-sm text-white/90 text-center">
                        {image.description}
                      </p>
                    </div>
                  </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                {selectedImage.src.startsWith('/') ? (
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-8xl">{selectedImage.src}</span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brown-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-brown-600 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-brown-900 to-brown-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Experience It Yourself
            </h2>
            <p className="text-xl text-brown-200 mb-8 max-w-2xl mx-auto">
              See our gallery in person! Visit our store in Cypress, Texas, 
              and taste the authentic churros that make us special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://order.online/store/angels-churros-n-chocolate-582123"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Order Online</span>
                <Heart size={20} />
              </a>
              <a
                href="/store"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Visit Store</span>
                <Store size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <RotatingReviews />
    </div>
    </ElegenciaLayout>
  )
}
