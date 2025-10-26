'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Gift, Users, Calendar, Clock, Star, CheckCircle, Heart } from 'lucide-react'

interface PartyPackage {
  id: string
  name: string
  price: number
  description: string
  includes: string[]
  serves: string
  popular?: boolean
  image: string
}

const partyPackages: PartyPackage[] = [
  {
    id: 'small-party',
    name: 'Small Celebration',
    price: 45,
    description: 'Perfect for intimate gatherings and small celebrations',
    includes: [
      '12 Fresh Churros',
      '3 Dipping Sauces',
      'Hot Chocolate for 4',
      'Party Decorations',
      'Setup & Cleanup'
    ],
    serves: '4-6 people',
    image: '🎉'
  },
  {
    id: 'medium-party',
    name: 'Medium Celebration',
    price: 85,
    description: 'Great for birthday parties and family gatherings',
    includes: [
      '24 Fresh Churros',
      '5 Dipping Sauces',
      'Hot Chocolate for 8',
      'Party Decorations',
      'Setup & Cleanup',
      'Party Games'
    ],
    serves: '8-12 people',
    popular: true,
    image: '🎊'
  },
  {
    id: 'large-party',
    name: 'Large Celebration',
    price: 150,
    description: 'Perfect for big celebrations and community events',
    includes: [
      '48 Fresh Churros',
      '8 Dipping Sauces',
      'Hot Chocolate for 15',
      'Party Decorations',
      'Setup & Cleanup',
      'Party Games',
      'Photo Booth Props',
      'Custom Banner'
    ],
    serves: '15-25 people',
    image: '🎈'
  }
]

const eventTypes = [
  {
    title: 'Birthday Parties',
    description: 'Make birthdays extra special with our churro party packages',
    icon: '🎂',
    features: ['Custom decorations', 'Party games', 'Photo opportunities']
  },
  {
    title: 'Corporate Events',
    description: 'Treat your team to authentic churros at your next company event',
    icon: '💼',
    features: ['Professional setup', 'Custom branding', 'Flexible timing']
  },
  {
    title: 'Community Events',
    description: 'Bring the community together with our churro celebrations',
    icon: '🤝',
    features: ['Community focus', 'Charity partnerships', 'Local engagement']
  },
  {
    title: 'Holiday Celebrations',
    description: 'Celebrate special holidays with traditional churros and chocolate',
    icon: '🎄',
    features: ['Holiday themes', 'Seasonal decorations', 'Special treats']
  }
]

const pastEvents = [
  {
    title: 'Maria\'s 8th Birthday',
    description: 'A magical churro party with 15 kids and lots of laughter',
    date: 'March 2024',
    image: '🎂'
  },
  {
    title: 'Tech Startup Team Building',
    description: 'Corporate event for 25 employees with churros and hot chocolate',
    date: 'February 2024',
    image: '💼'
  },
  {
    title: 'Community Food Drive',
    description: 'Raised $500 for local food bank with churro sales',
    date: 'January 2024',
    image: '🤝'
  },
  {
    title: 'Christmas Celebration',
    description: 'Holiday party with 40 community members',
    date: 'December 2023',
    image: '🎄'
  }
]

interface BookingForm {
  name: string
  email: string
  phone: string
  eventDate: string
  eventTime: string
  package: string
  guests: number
  location: string
  specialRequests: string
}

export default function Parties() {
  const [selectedPackage, setSelectedPackage] = useState<string>('')
  const { register, handleSubmit, formState: { errors } } = useForm<BookingForm>()

  const onSubmit = (data: BookingForm) => {
    console.log('Booking form submitted:', data)
    // Handle form submission
  }

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
              Party Packages
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
              Make your celebration unforgettable with our authentic churro party packages
            </p>
          </motion.div>
        </div>
      </section>

      {/* Party Packages */}
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
              Choose Your Package
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
              From intimate gatherings to large celebrations, we have the perfect 
              churro party package for your special event.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partyPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover ${
                  pkg.popular ? 'ring-2 ring-primary-600' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={16} className="fill-current" />
                    <span>Popular</span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{pkg.image}</div>
                    <h3 className="text-2xl font-bold text-brown-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-brown-600 mb-4">
                      {pkg.description}
                    </p>
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      ${pkg.price}
                    </div>
                    <div className="text-sm text-brown-500">
                      Serves {pkg.serves}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-brown-900 mb-3">Includes:</h4>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-primary-600 flex-shrink-0" />
                        <span className="text-brown-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className="w-full btn-primary"
                  >
                    Select Package
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
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
              Perfect for Any Event
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
              Whether it's a birthday, corporate event, or community celebration, 
              our churro parties are perfect for any occasion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg card-hover"
              >
                <div className="text-5xl mb-4">{event.icon}</div>
                <h3 className="text-xl font-bold text-brown-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-brown-600 mb-4 leading-relaxed">
                  {event.description}
                </p>
                <ul className="text-sm text-brown-500 space-y-1">
                  {event.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
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
                How to Book
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-900 mb-2">Choose Your Package</h3>
                    <p className="text-brown-600">Select the perfect package for your event size and needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-900 mb-2">Fill Out the Form</h3>
                    <p className="text-brown-600">Provide your event details and special requests.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-900 mb-2">We'll Contact You</h3>
                    <p className="text-brown-600">We'll reach out within 24 hours to confirm your booking.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-brown-900 mb-2">Enjoy Your Party</h3>
                    <p className="text-brown-600">We'll handle everything so you can focus on celebrating!</p>
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
              className="bg-cream-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-brown-900 mb-6">Book Your Party</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-brown-700 mb-2">Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brown-700 mb-2">Email *</label>
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
                    <label className="block text-sm font-semibold text-brown-700 mb-2">Phone *</label>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brown-700 mb-2">Event Date *</label>
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
                    <label className="block text-sm font-semibold text-brown-700 mb-2">Event Time *</label>
                    <input
                      {...register('eventTime', { required: 'Event time is required' })}
                      type="time"
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    {errors.eventTime && <p className="text-red-500 text-sm mt-1">{errors.eventTime.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brown-700 mb-2">Number of Guests *</label>
                    <input
                      {...register('guests', { required: 'Number of guests is required' })}
                      type="number"
                      min="1"
                      className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="10"
                    />
                    {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brown-700 mb-2">Event Location *</label>
                  <input
                    {...register('location', { required: 'Event location is required' })}
                    className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your address or venue"
                  />
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brown-700 mb-2">Special Requests</label>
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

      {/* Past Events Gallery */}
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
              Past Events
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
              See some of the amazing celebrations we've been part of. 
              Every event is special to us!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg card-hover"
              >
                <div className="text-5xl mb-4 text-center">{event.image}</div>
                <h3 className="text-lg font-bold text-brown-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-brown-600 text-sm mb-3">
                  {event.description}
                </p>
                <div className="text-xs text-brown-500">
                  {event.date}
                </div>
              </motion.div>
            ))}
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
              Ready to Celebrate?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let us make your special event unforgettable with authentic churros 
              and warm hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-cream-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Book Your Party</span>
                <Gift size={20} />
              </button>
              <a
                href="/gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Gallery</span>
                <Heart size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}




