'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Truck, Calendar, Clock, Users, Star, CheckCircle, Heart, MapPin, Phone } from 'lucide-react'
import ElegenciaLayout from '@/components/ElegenciaLayout'

interface CartFeature {
  title: string
  description: string
  icon: string
}

const cartFeatures: CartFeature[] = [
  {
    title: 'Fresh Churros On-Site',
    description: 'We bring our churro machine and make fresh churros right at your event',
    icon: '🥨'
  },
  {
    title: 'Multiple Dipping Sauces',
    description: 'Chocolate, caramel, dulce de leche, and more delicious options',
    icon: '🍫'
  },
  {
    title: 'Hot Chocolate Station',
    description: 'Premium hot chocolate made fresh for your guests',
    icon: '☕'
  },
  {
    title: 'Professional Setup',
    description: 'Complete setup and cleanup - you just enjoy the party!',
    icon: '🎪'
  },
  {
    title: 'Custom Decorations',
    description: 'We can match your event theme with custom decorations',
    icon: '🎨'
  },
  {
    title: 'Flexible Timing',
    description: 'We work around your schedule - arrive when you need us',
    icon: '⏰'
  }
]

const eventTypes = [
  {
    title: 'Birthday Parties',
    description: 'Make birthdays extra special with fresh churros',
    icon: '🎂',
    duration: '2-3 hours',
    capacity: 'Up to 50 guests'
  },
  {
    title: 'Corporate Events',
    description: 'Perfect for team building and company celebrations',
    icon: '💼',
    duration: '2-4 hours',
    capacity: 'Up to 100 guests'
  },
  {
    title: 'Weddings',
    description: 'Add a unique touch to your special day',
    icon: '💒',
    duration: '3-5 hours',
    capacity: 'Up to 200 guests'
  },
  {
    title: 'Festivals & Fairs',
    description: 'Great for community events and festivals',
    icon: '🎪',
    duration: '4-8 hours',
    capacity: 'Unlimited'
  },
  {
    title: 'School Events',
    description: 'Educational and fun for students and families',
    icon: '🎓',
    duration: '2-4 hours',
    capacity: 'Up to 150 guests'
  },
  {
    title: 'Holiday Parties',
    description: 'Celebrate special holidays with authentic churros',
    icon: '🎄',
    duration: '2-4 hours',
    capacity: 'Up to 100 guests'
  }
]

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 2-3 weeks in advance, especially for weekend events. For larger events (100+ guests), we suggest 4-6 weeks notice.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the greater Houston area, including Cypress, Katy, Spring, The Woodlands, and surrounding communities. Contact us to confirm service to your specific location.'
  },
  {
    question: 'Do you provide tables and chairs?',
    answer: 'We provide our churro cart and serving equipment. Tables and chairs for guests are typically provided by the venue or can be arranged separately.'
  },
  {
    question: 'What if it rains?',
    answer: 'We can set up under covered areas or bring our own canopy. We\'re prepared for most weather conditions and will work with you to ensure your event goes smoothly.'
  },
  {
    question: 'Can you accommodate dietary restrictions?',
    answer: 'Yes! We can provide gluten-free options and work with various dietary needs. Please let us know about any restrictions when you book.'
  },
  {
    question: 'What\'s included in the setup?',
    answer: 'We handle everything: churro machine, serving equipment, decorations, cleanup, and our friendly staff. You just enjoy your event!'
  }
]

interface BookingForm {
  name: string
  email: string
  phone: string
  eventDate: string
  eventTime: string
  eventDuration: string
  eventType: string
  guestCount: number
  eventLocation: string
  specialRequests: string
}

export default function ChurroCart() {
  const [selectedEventType, setSelectedEventType] = useState<string>('')
  const { register, handleSubmit, formState: { errors } } = useForm<BookingForm>()

  const onSubmit = (data: BookingForm) => {
    console.log('Churro cart booking submitted:', data)
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
                  Churro Cart
                </h1>
                <p className="text-xl lg:text-2xl text-elegencia-gold max-w-3xl mx-auto">
                  Bring the authentic churro experience to your event! Our mobile churro cart 
                  brings fresh churros and premium chocolate directly to you.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Features */}
      <section className="section-padding bg-[#040D10]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                  What We Bring
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our mobile churro cart comes fully equipped with everything needed 
              to create an unforgettable churro experience at your event.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-[#1a1f23] rounded-2xl p-8 card-hover"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-[#1a1f23]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Perfect for Any Event
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From intimate birthday parties to large corporate events, our churro cart 
              adds a unique and delicious touch to any celebration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#040D10] rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{event.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock size={16} />
                      <span>{event.duration}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Users size={16} />
                      <span>{event.capacity}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-[#040D10]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Book Your Event
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Choose Your Event Type</h3>
                    <p className="text-gray-300">Select the type of event you're planning.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Fill Out the Form</h3>
                    <p className="text-gray-300">Provide your event details and preferences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">We'll Contact You</h3>
                    <p className="text-gray-300">We'll reach out within 24 hours to confirm your booking.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Enjoy Your Event</h3>
                    <p className="text-gray-300">We'll handle everything so you can focus on celebrating!</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1a1f23] rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Event Details</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Email *</label>
                    <input
                      {...register('email', { required: 'Email is required' })}
                      type="email"
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Phone *</label>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Event Date *</label>
                    <input
                      {...register('eventDate', { required: 'Event date is required' })}
                      type="date"
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Event Time *</label>
                    <input
                      {...register('eventTime', { required: 'Event time is required' })}
                      type="time"
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    {errors.eventTime && <p className="text-red-500 text-sm mt-1">{errors.eventTime.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Event Duration *</label>
                    <select
                      {...register('eventDuration', { required: 'Event duration is required' })}
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select duration</option>
                      <option value="2 hours">2 hours</option>
                      <option value="3 hours">3 hours</option>
                      <option value="4 hours">4 hours</option>
                      <option value="5+ hours">5+ hours</option>
                    </select>
                    {errors.eventDuration && <p className="text-red-500 text-sm mt-1">{errors.eventDuration.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Event Type *</label>
                    <select
                      {...register('eventType', { required: 'Event type is required' })}
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select event type</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="festival">Festival/Fair</option>
                      <option value="school">School Event</option>
                      <option value="holiday">Holiday Party</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Guest Count *</label>
                    <input
                      {...register('guestCount', { required: 'Guest count is required' })}
                      type="number"
                      min="1"
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="50"
                    />
                    {errors.guestCount && <p className="text-red-500 text-sm mt-1">{errors.guestCount.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Event Location *</label>
                  <input
                    {...register('eventLocation', { required: 'Event location is required' })}
                    className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Full address of your event"
                  />
                  {errors.eventLocation && <p className="text-red-500 text-sm mt-1">{errors.eventLocation.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Special Requests</label>
                  <textarea
                    {...register('specialRequests')}
                    rows={3}
                    className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Any special dietary needs, decorations, or requests..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Submit Booking Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#1a1f23]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our churro cart service? Here are the answers 
              to the most common questions we receive.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#040D10] rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-brown-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Ready to Book?
            </h2>
            <p className="text-xl text-brown-200 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your event and get a personalized quote. 
              We're excited to be part of your special occasion!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-primary-400" />
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-brown-300">(123) 456-7890</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-primary-400" />
                <div>
                  <div className="font-semibold">Service Area</div>
                  <div className="text-brown-300">Greater Houston</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="w-6 h-6 text-primary-400" />
                <div>
                  <div className="font-semibold">Booking</div>
                  <div className="text-brown-300">2-6 weeks advance</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Book Now</span>
                <Truck size={20} />
              </button>
              <a
                href="mailto:events@angelschurros.com"
                className="border-2 border-white text-white hover:bg-white hover:text-brown-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Email Us</span>
                <Heart size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </ElegenciaLayout>
  )
}




