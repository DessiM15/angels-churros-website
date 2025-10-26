'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Star, Coffee, Award, Globe } from 'lucide-react'

export default function OurStory() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: 'Authenticity',
      description: 'We stay true to traditional Mexican churro recipes, passed down through generations.',
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: 'Community',
      description: 'We believe in building connections and giving back to the community that supports us.',
    },
    {
      icon: <Star className="w-8 h-8 text-primary-600" />,
      title: 'Quality',
      description: 'Every churro is made fresh daily with the finest ingredients and attention to detail.',
    },
    {
      icon: <Coffee className="w-8 h-8 text-primary-600" />,
      title: 'Hospitality',
      description: 'We create a warm, welcoming atmosphere where everyone feels like family.',
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
              Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
              From a small dream in Mexico City to Houston's first authentic churrería
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Narrative */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6">
                A Family Tradition
              </h2>
              <div className="space-y-6 text-lg text-brown-700 leading-relaxed">
                <p>
                  It all started with a homesick Texan and her abuela's recipe. Maria moved here 
                  from Mexico City in 2019 and couldn't find a single place that made churros 
                  the way she remembered them – crispy on the outside, soft inside, dusted with 
                  just the right amount of cinnamon sugar.
                </p>
                <p>
                  After months of experimenting in her tiny Cypress kitchen (and driving her 
                  neighbors crazy with the smell), she finally got it right. What started as 
                  weekend treats for friends became a full-blown obsession. By 2021, she was 
                  selling churros out of a food truck, and by 2022, we had our first real location.
                </p>
                <p>
                  We're not fancy. We're not trying to reinvent the wheel. We just make churros 
                  the way they're supposed to be made – with love, patience, and a whole lot 
                  of cinnamon sugar. Come hungry, leave happy.
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
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-12 text-center text-white">
                <div className="text-6xl mb-4">🥨</div>
                <h3 className="text-2xl font-bold mb-4">Made Fresh Daily</h3>
                <p className="text-primary-100">
                  Every morning, we start from scratch, just like abuela used to do.
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-brown-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-200 rounded-full opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
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
                className="text-center bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-brown-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-brown-600 leading-relaxed">
                  {value.description}
                </p>
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
                <p className="text-primary-600 font-semibold mb-4">
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
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-600"></div>
            
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
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
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
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Be part of our growing community and experience the authentic taste 
              of Mexican churros right here in Houston.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://order.online/store/angels-churros-n-chocolate-582123"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-cream-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Order Online</span>
                <Coffee size={20} />
              </a>
              <a
                href="/store"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Visit Us</span>
                <Globe size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
