'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, Users, Heart, Coffee } from 'lucide-react'

const FeaturedContent = () => {
  const featuredItems = [
    {
      title: 'Fresh Churros Daily',
      description: 'Made fresh every morning using traditional Mexican recipes passed down through generations.',
      image: '🥨',
      stats: '500+',
      statLabel: 'Churros Daily',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Premium Hot Chocolate',
      description: 'Rich, velvety chocolate made from the finest ingredients, served piping hot.',
      image: '☕',
      stats: '15+',
      statLabel: 'Chocolate Varieties',
      color: 'from-brown-400 to-brown-600',
    },
    {
      title: 'Community Events',
      description: 'Join us for special events, celebrations, and community gatherings.',
      image: '🎉',
      stats: '50+',
      statLabel: 'Events Monthly',
      color: 'from-pink-400 to-purple-500',
    },
  ]

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      location: 'Cypress, TX',
      rating: 5,
      text: 'Finally! I\'ve been looking for churros like this since I moved here from Mexico. These taste exactly like my abuela used to make. The chocolate is so thick you could eat it with a spoon.',
    },
    {
      name: 'James Chen',
      location: 'Houston, TX',
      rating: 5,
      text: 'My kids are obsessed with this place. We come here every Friday after school and they always get the stuffed churros. The staff remembers us and my daughter\'s order. It\'s like our second home.',
    },
    {
      name: 'Sarah Johnson',
      location: 'Katy, TX',
      rating: 5,
      text: 'We had our first date here and now we come every month for our anniversary. The churros are perfect every single time. Plus, the owner Maria is so sweet and always remembers us.',
    },
  ]

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Featured Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6">
            What Makes Us Special
          </h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto">
            We're passionate about bringing you the most authentic churro experience 
            with fresh ingredients and traditional techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg card-hover h-full">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.image}
                </div>
                
                <h3 className="text-2xl font-bold text-brown-900 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-brown-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-primary-600">
                      {item.stats}
                    </div>
                    <div className="text-sm text-brown-500">
                      {item.statLabel}
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto">
            Don't just take our word for it – hear from our amazing customers 
            who make Angels Churros their go-to spot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-brown-600 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div>
                <div className="font-semibold text-brown-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-brown-500">
                  {testimonial.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-brown-800 to-brown-900 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
              Join Our Community
            </h3>
            <p className="text-xl text-brown-200 mb-8 max-w-2xl mx-auto">
              Experience the warmth of authentic Mexican café culture. 
              Fresh churros, premium chocolate, and genuine hospitality await.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://order.online/store/angels-churros-n-chocolate-582123"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Order Online</span>
                <ArrowRight size={20} />
              </a>
              <Link
                href="/our-story"
                className="border-2 border-white text-white hover:bg-white hover:text-brown-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Our Story</span>
                <Heart size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedContent
