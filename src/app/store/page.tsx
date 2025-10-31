'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MapPin, Clock, Phone, Mail, Star, Navigation, Heart, Coffee, Users } from 'lucide-react'
import ElegenciaLayout from '@/components/ElegenciaLayout'
import RotatingReviews from '@/components/RotatingReviews'

const storeInfo = {
  address: '12345 FM 1960 W, Cypress, TX 77433',
  phone: '(281) 555-CHURRO',
  email: 'hello@angelschurros.com',
  hours: {
    monday: '7:00 AM - 8:00 PM',
    tuesday: '7:00 AM - 8:00 PM',
    wednesday: '7:00 AM - 8:00 PM',
    thursday: '7:00 AM - 8:00 PM',
    friday: '7:00 AM - 9:00 PM',
    saturday: '8:00 AM - 9:00 PM',
    sunday: '8:00 AM - 7:00 PM'
  }
}

const yelpReviews = [
  {
    name: 'Maria Rodriguez',
    rating: 5,
    date: '2 weeks ago',
    text: 'OMG these churros are incredible! I\'m from Mexico and these taste exactly like the ones my abuela used to make. The chocolate is so thick and rich. Maria (the owner) is so sweet and remembers everyone. This place is a gem!',
    verified: true
  },
  {
    name: 'James Chen',
    rating: 5,
    date: '1 month ago',
    text: 'My kids are obsessed with this place. We come here every Friday after school and they always get the stuffed churros. The staff is so friendly and remembers our order. It\'s become our family tradition!',
    verified: true
  },
  {
    name: 'Sarah Johnson',
    rating: 5,
    date: '1 month ago',
    text: 'We had our first date here and now we come every month for our anniversary. The churros are perfect every single time. The owner Maria is so sweet and always remembers us. This place holds a special place in our hearts!',
    verified: true
  },
  {
    name: 'Mike Thompson',
    rating: 4,
    date: '2 months ago',
    text: 'Really good churros! The place is small but cozy. Staff is friendly and the churros are fresh. Only complaint is it gets pretty busy on weekends, but that\'s a good sign. Will definitely be back!',
    verified: true
  }
]

const storeGallery = [
  {
    id: 'store-1',
    title: 'Store Interior',
    description: 'Warm, welcoming atmosphere with comfortable seating',
    image: '🏪'
  },
  {
    id: 'store-2',
    title: 'Churro Station',
    description: 'Watch our churros being made fresh daily',
    image: '🥨'
  },
  {
    id: 'store-3',
    title: 'Seating Area',
    description: 'Cozy seating for enjoying your churros',
    image: '🪑'
  },
  {
    id: 'store-4',
    title: 'Chocolate Station',
    description: 'Premium hot chocolate made fresh',
    image: '☕'
  }
]

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function Store() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>()

  const onSubmit = (data: ContactForm) => {
    console.log('Contact form submitted:', data)
    // Handle form submission
  }

  return (
    <ElegenciaLayout>
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brown-900 to-brown-800"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Visit Our Store
                </h1>
                <p className="text-xl lg:text-2xl text-elegencia-gold max-w-3xl mx-auto">
                  Come experience the authentic churro atmosphere in our cozy Cypress location. 
                  Fresh churros, premium chocolate, and warm hospitality await.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Store Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-8">
                Store Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-brown-900 mb-1">Address</h3>
                    <p className="text-brown-600">{storeInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-brown-900 mb-1">Phone</h3>
                    <a href={`tel:${storeInfo.phone}`} className="text-brown-600 hover:text-primary-600 transition-colors">
                      {storeInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-brown-900 mb-1">Email</h3>
                    <a href={`mailto:${storeInfo.email}`} className="text-brown-600 hover:text-primary-600 transition-colors">
                      {storeInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-brown-900 mb-4 flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <span>Store Hours</span>
                </h3>
                <div className="bg-[#040D10] rounded-2xl p-6">
                  <div className="space-y-2">
                    {Object.entries(storeInfo.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="font-semibold text-white capitalize">
                          {day}:
                        </span>
                        <span className="text-gray-300">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-brown-900 mb-2">Our Location</h3>
                  <p className="text-brown-600 mb-4">Cypress, Texas</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <Navigation size={20} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Store Gallery */}
      <section className="section-padding bg-[#1a1f23]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6">
              Store Gallery
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
              Take a virtual tour of our cozy store and see where the magic happens.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storeGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl">
                    {item.image}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-brown-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brown-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yelp Reviews */}
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
              What Our Customers Say
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
              Don't just take our word for it – see what our amazing customers 
              have to say about their experience at Angels Churros.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {yelpReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#040D10] rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-brown-900">{review.name}</div>
                      <div className="text-sm text-brown-500">{review.date}</div>
                    </div>
                  </div>
                  {review.verified && (
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Verified
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-brown-600 leading-relaxed italic">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.yelp.com/biz/angels-churros-n-chocolate-cypress"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Star size={20} />
              <span>Read More Reviews on Yelp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-brown-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-brown-200 mb-8">
                Have questions about our churros, want to book an event, or just want to say hello? 
                We'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <a href={`tel:${storeInfo.phone}`} className="text-brown-300 hover:text-primary-400 transition-colors">
                      {storeInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <a href={`mailto:${storeInfo.email}`} className="text-brown-300 hover:text-primary-400 transition-colors">
                      {storeInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Visit Us</div>
                    <div className="text-brown-300">{storeInfo.address}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-brown-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email *</label>
                    <input
                      {...register('email', { required: 'Email is required' })}
                      type="email"
                      className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-brown-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Phone</label>
                  <input
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-brown-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Subject *</label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-brown-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="text-red-300 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Message *</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="w-full px-4 py-3 border border-white/20 rounded-lg bg-white/10 text-white placeholder-brown-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us what's on your mind..."
                  />
                  {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
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
              Visit Us Today
            </h2>
            <p className="text-xl text-brown-200 mb-8 max-w-2xl mx-auto">
              Experience the authentic taste of Mexican churros in our warm, 
              welcoming store. We can't wait to serve you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://order.online/store/angels-churros-n-chocolate-582123"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Order Online</span>
                <Coffee size={20} />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Directions</span>
                <Navigation size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Reviews Section */}
      <RotatingReviews />
    </div>
    </ElegenciaLayout>
  )
}
