'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, Heart, Users, Store, Camera } from 'lucide-react'

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  title: string
  description: string
}

const galleryImages: GalleryImage[] = [
  // Products
  {
    id: 'churros-1',
    src: '/assets/hero-churros-table.png',
    alt: 'Fresh churros',
    category: 'products',
    title: 'Fresh Churros',
    description: 'Golden, crispy churros dusted with cinnamon sugar'
  },
  {
    id: 'churros-2',
    src: '/assets/churros.webp',
    alt: 'Filled churros',
    category: 'products',
    title: 'Filled Churros',
    description: 'Churros filled with dulce de leche and chocolate'
  },
  {
    id: 'churros-3',
    src: '/assets/churros-and-table.png',
    alt: 'Churros display',
    category: 'products',
    title: 'Churros Display',
    description: 'Beautiful presentation of our signature churros'
  },
  {
    id: 'churros-4',
    src: '/assets/heart-churros.webp',
    alt: 'Heart shaped churros',
    category: 'products',
    title: 'Heart Churros',
    description: 'Special heart-shaped churros for romantic occasions'
  },
  {
    id: 'chocolate-1',
    src: '/assets/hero-champurrado.jpg',
    alt: 'Hot chocolate',
    category: 'products',
    title: 'Premium Hot Chocolate',
    description: 'Rich, velvety hot chocolate made from premium cocoa'
  },
  {
    id: 'chocolate-2',
    src: '/assets/hot-chocolate.webp',
    alt: 'Hot chocolate varieties',
    category: 'products',
    title: 'Hot Chocolate Varieties',
    description: 'Different chocolate flavors and preparations'
  },
  {
    id: 'chocolate-3',
    src: '/assets/churros-condensed-milk.webp',
    alt: 'Chocolate with condensed milk',
    category: 'products',
    title: 'Chocolate with Condensed Milk',
    description: 'Indulgent chocolate paired with sweet condensed milk'
  },
  {
    id: 'coffee-1',
    src: '/assets/coffee.webp',
    alt: 'Coffee',
    category: 'products',
    title: 'Fresh Coffee',
    description: 'Perfectly brewed coffee to complement your churros'
  },
  {
    id: 'fried-oreos',
    src: '/assets/fried-oreos.webp',
    alt: 'Fried Oreos',
    category: 'products',
    title: 'Fried Oreos',
    description: 'Crispy fried Oreos - a perfect sweet treat'
  },

  // Store
  {
    id: 'store-1',
    src: '/assets/hero-store-front.png',
    alt: 'Angels Churros store front',
    category: 'store',
    title: 'Our Store',
    description: 'Our cozy storefront in Cypress, Texas'
  },
  {
    id: 'store-2',
    src: '/assets/store-front-alt.png',
    alt: 'Store front alternative view',
    category: 'store',
    title: 'Store Front View',
    description: 'Another view of our welcoming storefront'
  },
  {
    id: 'store-3',
    src: '/assets/angels-hero-2.webp',
    alt: 'Store interior',
    category: 'store',
    title: 'Cozy Interior',
    description: 'Comfortable seating for enjoying your churros'
  },
  {
    id: 'store-4',
    src: '/assets/hero-churros-table.png',
    alt: 'Customers enjoying',
    category: 'store',
    title: 'Happy Customers',
    description: 'Families and friends gathering to enjoy churros'
  },

  // Events
  {
    id: 'event-1',
    src: '/assets/churro-cart-1.webp',
    alt: 'Churro cart event',
    category: 'events',
    title: 'Birthday Celebrations',
    description: 'Making special moments even more memorable'
  },
  {
    id: 'event-2',
    src: '/assets/churro-cart-2.webp',
    alt: 'Community event',
    category: 'events',
    title: 'Community Events',
    description: 'Bringing the community together with churros'
  },
  {
    id: 'event-3',
    src: '/assets/churro-cart-3.webp',
    alt: 'Special occasions',
    category: 'events',
    title: 'Special Occasions',
    description: 'Celebrating life\'s special moments'
  },
  {
    id: 'event-4',
    src: '/assets/churro-cart-4.webp',
    alt: 'Party events',
    category: 'events',
    title: 'Party Events',
    description: 'Perfect for any celebration'
  },
  {
    id: 'event-5',
    src: '/assets/churro-cart-5.webp',
    alt: 'Outdoor events',
    category: 'events',
    title: 'Outdoor Events',
    description: 'Bringing churros to your outdoor gatherings'
  },
  {
    id: 'event-6',
    src: '/assets/churro-cart-6.webp',
    alt: 'Corporate events',
    category: 'events',
    title: 'Corporate Events',
    description: 'Professional catering for business events'
  },

  // Community
  {
    id: 'community-1',
    src: '/assets/elote.webp',
    alt: 'Elote',
    category: 'community',
    title: 'Elote',
    description: 'Authentic Mexican street corn - a delicious community favorite'
  },
  {
    id: 'community-2',
    src: '/assets/joes-burger.webp',
    alt: 'Joes Burger',
    category: 'community',
    title: 'Joes Burger',
    description: 'Delicious burgers from our community partner Joes Burger'
  },
  {
    id: 'community-3',
    src: '/assets/party+packs.webp',
    alt: 'Local partnerships',
    category: 'community',
    title: 'Local Partnerships',
    description: 'Working with local businesses and organizations'
  },
]

const categories = [
  { id: 'all', name: 'All', icon: <Camera className="w-5 h-5" /> },
  { id: 'products', name: 'Products', icon: <Heart className="w-5 h-5" /> },
  { id: 'store', name: 'Store', icon: <Store className="w-5 h-5" /> },
  { id: 'events', name: 'Events', icon: <Users className="w-5 h-5" /> },
  { id: 'community', name: 'Community', icon: <Heart className="w-5 h-5" /> },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory)

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
              Take a visual journey through our churros, store, events, and community impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-brown-200">
        <div className="container-custom py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-brown-100 text-brown-700 hover:bg-brown-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    {image.src.startsWith('/') ? (
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-6xl">{image.src}</span>
                    )}
                  </div>
                    <div className="p-4">
                      <h3 className="font-bold text-brown-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {image.title}
                      </h3>
                      <p className="text-sm text-brown-600">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
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
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              See our gallery in person! Visit our store in Cypress, Texas, 
              and taste the authentic churros that make us special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://order.online/store/angels-churros-n-chocolate-582123"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-cream-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
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
    </div>
  )
}
