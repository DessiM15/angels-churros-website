'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Star, Coffee, Award, Globe } from 'lucide-react'
import ElegenciaLayout from '@/components/ElegenciaLayout'

export default function OurStory() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-brown-700" />,
      title: 'Authenticity',
      description: 'We stay true to traditional Mexican churro recipes, passed down through generations.',
      image: '/assets/placeholder.jpg'
    },
    {
      icon: <Users className="w-8 h-8 text-brown-700" />,
      title: 'Community',
      description: 'We believe in building connections and giving back to the community that supports us.',
      image: '/assets/placeholder.jpg'
    },
    {
      icon: <Star className="w-8 h-8 text-brown-700" />,
      title: 'Quality',
      description: 'Every churro is made fresh daily with the finest ingredients and attention to detail.',
      image: '/assets/placeholder.jpg'
    },
    {
      icon: <Coffee className="w-8 h-8 text-brown-700" />,
      title: 'Hospitality',
      description: 'We create a warm, welcoming atmosphere where everyone feels like family.',
      image: '/assets/placeholder.jpg'
    },
  ]

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Founder & Chief Churro Officer',
      image: '👩‍🍳',
      bio: 'The woman behind the magic. Maria learned to make churros from her abuela in Mexico City and has been perfecting the recipe for 15 years. She still gets up at 4 AM to make the first batch every morning.',
    },
    {
      name: 'Carlos Mendez',
      role: 'Hot Chocolate Wizard',
      image: '👨‍🍳',
      bio: 'Carlos is our resident chocolate genius. He spent 3 months perfecting the hot chocolate recipe and still won\'t tell us all the spices he uses. We think there might be a little magic involved.',
    },
    {
      name: 'Ana Gutierrez',
      role: 'Customer Happiness Manager',
      image: '👩‍💼',
      bio: 'Ana makes sure everyone feels like family. She remembers everyone\'s order and always has a smile ready. She\'s been with us since day one and knows all the regulars by name.',
    },
  ]

  const milestones = [
    {
      year: '2019',
      title: 'The Homesick Texan',
      description: 'Maria moves to Houston and immediately starts missing her abuela\'s churros. The search for authentic churros begins (and fails miserably).',
    },
    {
      year: '2020',
      title: 'Kitchen Experiments',
      description: 'Maria starts making churros in her tiny apartment kitchen. Her neighbors start complaining about the smell (but also start asking for samples).',
    },
    {
      year: '2021',
      title: 'Food Truck Dreams',
      description: 'We buy a beat-up food truck and start selling churros at local farmers markets. Our first day we sold out in 2 hours and had to close early.',
    },
    {
      year: '2022',
      title: 'First Real Location',
      description: 'We finally get a real storefront in Cypress. It\'s small, it\'s cramped, but it\'s ours. The line out the door on opening day was insane.',
    },
    {
      year: '2023',
      title: 'The Churro Cart',
      description: 'We buy a second food truck and start doing events. Birthday parties, corporate events, even a wedding. Turns out people really love churros.',
    },
    {
      year: '2024',
      title: 'Still Going Strong',
      description: 'We\'re still here, still making churros the old way, and still getting up at 4 AM. Some things never change, and we\'re okay with that.',
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

      {/* Brand Narrative */}
      <section className="section-padding bg-[#040D10]">
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
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
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
      </section>

      {/* Our Values */}
      <section className="section-padding bg-[#1a1f23]">
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
      </section>

      {/* Our Team */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
              The passionate people behind Angels Churros, dedicated to bringing you 
              the most authentic churro experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-cream-50 rounded-2xl p-8 card-hover"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-bold text-brown-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-brown-700 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-brown-600 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-brown-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-brown-200 max-w-3xl mx-auto">
              From a small dream to Houston's premier churrería – here's how we got here.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brown-700"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-brown-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-brown-200 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              Join Our Story
            </h2>
            <p className="text-xl text-brown-200 mb-8 max-w-2xl mx-auto">
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
      </section>
    </div>
    </ElegenciaLayout>
  )
}
