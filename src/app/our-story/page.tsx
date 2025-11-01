'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Star, Coffee, Award, Globe } from 'lucide-react'
import ElegenciaLayout from '@/components/ElegenciaLayout'
import RotatingReviews from '@/components/RotatingReviews'

export default function OurStory() {
  const [storyVideoLoaded, setStoryVideoLoaded] = useState(false)
  const [storyVideoError, setStoryVideoError] = useState(false)
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-brown-700" />,
      title: 'Authenticity',
      description: 'We stay true to traditional Mexican churro recipes, passed down through generations.',
      image: '/assets/authentic-our-story.jpg'
    },
    {
      icon: <Users className="w-8 h-8 text-brown-700" />,
      title: 'Community',
      description: 'We believe in building connections and giving back to the community that supports us.',
      image: '/assets/community-our-story.jpg'
    },
    {
      icon: <Star className="w-8 h-8 text-brown-700" />,
      title: 'Quality',
      description: 'Every churro is made fresh daily with the finest ingredients and attention to detail.',
      image: '/assets/quality-our-story.jpg'
    },
    {
      icon: <Coffee className="w-8 h-8 text-brown-700" />,
      title: 'Hospitality',
      description: 'We create a warm, welcoming atmosphere where everyone feels like family.',
      image: '/assets/hospitality-our-story.jpg'
    },
  ]

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Founder & Chief Churro Officer',
      image: '/assets/angels-churros-team.webp',
      bio: 'The woman behind the magic. Maria learned to make churros from her abuela in Mexico City and has been perfecting the recipe for 15 years. She still gets up at 4 AM to make the first batch every morning.',
    },
    {
      name: 'Carlos Mendez',
      role: 'Hot Chocolate Wizard',
      image: '/assets/angels-churros-team.webp',
      bio: 'Carlos is our resident chocolate genius. He spent 3 months perfecting the hot chocolate recipe and still won\'t tell us all the spices he uses. We think there might be a little magic involved.',
    },
    {
      name: 'Ana Gutierrez',
      role: 'Customer Happiness Manager',
      image: '/assets/angels-churros-team.webp',
      bio: 'Ana makes sure everyone feels like family. She remembers everyone\'s order and always has a smile ready. She\'s been with us since day one and knows all the regulars by name.',
    },
  ]


  return (
    <ElegenciaLayout>
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/angels-churros-our-story-hero.png" 
            alt="Our Story" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Our Story
                </h1>
                <p className="text-xl lg:text-2xl text-elegencia-gold max-w-3xl mx-auto">
                  From a small dream in Mexico City to Houston's first authentic churrería
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src="/assets/churro-hero.jpg"
            alt="Churros falling background"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${storyVideoLoaded && !storyVideoError ? 'opacity-0' : 'opacity-100'}`}
            aria-hidden="true"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onLoadedData={() => setStoryVideoLoaded(true)}
            onError={() => setStoryVideoError(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${storyVideoLoaded && !storyVideoError ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src="/assets/churros-falling.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10">
          {/* Brand Narrative */}
          <motion.section
            className="section-padding bg-black/40 border-t border-white/10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                    A Family Tradition
                  </h2>
                  <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                    <p>
                      Our story starts here in Houston, Texas! In 2016, we opened our doors as the first "churreria" here in our city, and have rapidly grown since! Here at Angels, we serve the traditional "Spanish Styled" churros. Originating from Spain, churros are fried until they become crunchy, and may be sprinkled with sugar. The surface of a churro is ridged due to having been piped from a "churrera", a syringe-like tool with a star-shaped nozzle.
                    </p>
                    <p>
                      Erika and Oscar Garcia have always dreamed of calling something distinguishably their own, which is why Angels is so unique in itself! Here at Angels, we are more than a Cafe, we are a store that helps our communities made through every purchase, here in Texas, and also our native Veracruz!
                    </p>
                    <p>
                      As a family owned business, you will always be greeted by our family, taken care of by our family, and leave like you're family! Bienvenido a Angels! Welcome to Angels!
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/assets/Angels-churros-family.webp" 
                      alt="Angels Churros Family" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Our Values */}
          <motion.section
            className="section-padding bg-black/60 backdrop-blur-sm border-t border-white/10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-elegencia-gold mb-6">
                  Our Values
                </h2>
                <p className="text-xl text-elegencia-gold max-w-3xl mx-auto">
                  These core values guide everything we do, from how we make our churros 
                  to how we serve our community.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative h-64 group cursor-pointer"
                  >
                    {/* Flip Card Container */}
                    <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                      {/* Front Side */}
                      <div className="absolute inset-0 backface-hidden text-center bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center">
                        <div className="flex justify-center mb-6">
                          {value.icon}
                        </div>
                        <h3 className="text-xl font-bold text-brown-900 mb-4">
                          {value.title}
                        </h3>
                        <p className="text-brown-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                      
                      {/* Back Side - Image will go here */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180 bg-cover bg-center rounded-2xl shadow-lg overflow-hidden">
                        <img 
                          src={value.image} 
                          alt={value.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Our Team */}
          <motion.section
            className="section-padding bg-black/40 border-t border-white/10 relative"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container-custom relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#FFD28D] mb-6">
                  Meet Our Team
                </h2>
                <p className="text-xl text-[#F2E5D5] max-w-3xl mx-auto">
                  The passionate people behind Angels Churros, dedicated to bringing you 
                  the most authentic churro experience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  <img 
                    src="/assets/angels-churros-team.webp" 
                    alt="Angels Churros Team"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Customer Reviews */}
          <RotatingReviews />

          {/* Call to Action */}
          <motion.section
            className="section-padding bg-black/40 border-t border-white/10 text-white"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="container-custom text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                  Join Our Story
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Be part of our growing community and experience the authentic taste 
                  of Mexican churros right here in Houston.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://order.online/store/angels-churros-n-chocolate-582123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-brown-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Order Online</span>
                    <Coffee size={20} />
                  </a>
                  <a
                    href="/store"
                    className="border-2 border-white text-white hover:bg-white hover:text-brown-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Visit Us</span>
                    <Globe size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
    </ElegenciaLayout>
  )
}
