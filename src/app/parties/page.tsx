'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Gift, Users, Calendar, Clock, Star, CheckCircle, Heart } from 'lucide-react'
import ElegenciaLayout from '@/components/ElegenciaLayout'
import RotatingReviews from '@/components/RotatingReviews'

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
    id: 'forreal-pack',
    name: 'Forreal Pack',
    price: 25.00,
    description: 'Perfect for small gatherings and intimate celebrations',
    includes: [
      '25 Fresh Churros',
      '3 Dipping Sauces',
      'Party Decorations'
    ],
    serves: '4-6 people',
    image: '/assets/party-pack-1.jpg'
  },
  {
    id: 'oh-my-goodness',
    name: 'Oh My Goodness',
    price: 50.95,
    description: 'Great for birthday parties and family gatherings',
    includes: [
      '50 Fresh Churros',
      '5 Dipping Sauces',
      'Party Decorations',
      'Setup & Cleanup'
    ],
    serves: '8-12 people',
    popular: true,
    image: '/assets/party-pack-2.jpg'
  },
  {
    id: 'oh-la-la',
    name: 'Oh La La',
    price: 76.95,
    description: 'Perfect for larger celebrations and events',
    includes: [
      '75 Fresh Churros',
      '8 Dipping Sauces',
      'Party Decorations',
      'Setup & Cleanup',
      'Party Games'
    ],
    serves: '12-18 people',
    image: '/assets/party-pack-3.jpg'
  },
  {
    id: 'heaven-is-real',
    name: 'Heaven Is Real',
    price: 98.79,
    description: 'The ultimate celebration package for big events',
    includes: [
      '100 Fresh Churros',
      '10 Dipping Sauces',
      'Party Decorations',
      'Setup & Cleanup',
      'Party Games',
      'Photo Booth Props',
      'Custom Banner'
    ],
    serves: '20-30 people',
    image: '/assets/party-pack-4.jpg'
  }
]

const eventTypes = [
  {
    title: 'Birthday Parties',
    description: 'Make birthdays extra special with our churro party packages',
    icon: '',
    features: ['Custom decorations', 'Party games', 'Photo opportunities']
  },
  {
    title: 'Corporate Events',
    description: 'Treat your team to authentic churros at your next company event',
    icon: '',
    features: ['Professional setup', 'Custom branding', 'Flexible timing']
  },
  {
    title: 'Community Events',
    description: 'Bring the community together with our churro celebrations',
    icon: '',
    features: ['Community focus', 'Charity partnerships', 'Local engagement']
  },
  {
    title: 'Holiday Celebrations',
    description: 'Celebrate special holidays with traditional churros and chocolate',
    icon: '',
    features: ['Holiday themes', 'Seasonal decorations', 'Special treats']
  }
]

const pastEvents = [
  {
    title: 'Maria\'s 8th Birthday',
    description: 'A magical churro party with 15 kids and lots of laughter',
    date: 'March 2024',
    image: ''
  },
  {
    title: 'Tech Startup Team Building',
    description: 'Corporate event for 25 employees with churros and hot chocolate',
    date: 'February 2024',
    image: ''
  },
  {
    title: 'Community Food Drive',
    description: 'Raised $500 for local food bank with churro sales',
    date: 'January 2024',
    image: ''
  },
  {
    title: 'Christmas Celebration',
    description: 'Holiday party with 40 community members',
    date: 'December 2023',
    image: ''
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
    <ElegenciaLayout>
      <div className="relative pt-16 lg:pt-20">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/churros-falling.mp4" type="video/mp4" />
            <img
              src="/assets/parties-background.jpg"
              alt="Mini churros falling"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-black/55"></div>
        </div>
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brown-900/75 via-brown-900/50 to-brown-800/40"></div>
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                      Fresh Churros For Every Celebration
                    </h1>
                    <p className="text-xl lg:text-2xl text-elegencia-gold max-w-2xl mx-auto">
                      Pick a party package and we’ll bring the sweetness.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Party Packages */}
          <section className="section-padding bg-black/70 backdrop-blur-md">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From intimate gatherings to large celebrations, we have the perfect 
              churro party package for your special event.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partyPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-[#1a1f23] rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-800 ${
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
                    {pkg.image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={pkg.image} 
                          alt={pkg.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {pkg.description}
                    </p>
                    <div className="text-3xl font-bold text-elegencia-gold mb-2">
                      ${pkg.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-400">
                      Serves {pkg.serves}
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-white mb-3">Includes:</h4>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-elegencia-gold flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
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
          <section className="section-padding bg-black/60 backdrop-blur-md">
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
                className="text-center bg-[#040D10] rounded-2xl p-6 shadow-lg card-hover border border-gray-800"
              >
                {event.icon && <div className="text-5xl mb-4">{event.icon}</div>}
                <h3 className="text-xl font-bold text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {event.description}
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
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
          <section className="section-padding bg-black/60 backdrop-blur-md">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                How to Book
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Choose Your Package</h3>
                    <p className="text-gray-300">Select the perfect package for your event size and needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Fill Out the Form</h3>
                    <p className="text-gray-300">Provide your event details and special requests.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">We'll Contact You</h3>
                    <p className="text-gray-300">We'll reach out within 24 hours to confirm your booking.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Enjoy Your Party</h3>
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
              className="bg-black/70 rounded-2xl p-8 border border-gray-800 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Book Your Party</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 bg-[#1a1f23] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-500"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
                    <input
                      {...register('email', { required: 'Email is required' })}
                      type="email"
                      className="w-full px-4 py-3 bg-[#1a1f23] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Phone *</label>
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      className="w-full px-4 py-3 bg-[#1a1f23] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-500"
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Event Date *</label>
                    <input
                      {...register('eventDate', { required: 'Event date is required' })}
                      type="date"
                      className="w-full px-4 py-3 bg-[#1a1f23] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Event Time *</label>
                    <input
                      {...register('eventTime', { required: 'Event time is required' })}
                      type="time"
                      className="w-full px-4 py-3 bg-[#1a1f23] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    {errors.eventTime && <p className="text-red-500 text-sm mt-1">{errors.eventTime.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Number of Guests *</label>
                    <input
                      {...register('guests', { required: 'Number of guests is required' })}
                      type="number"
                      min="1"
                      className="w-full px-4 py-3 bg-[#1a1f23] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-500"
                      placeholder="10"
                    />
                    {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Event Location *</label>
                  <input
                    {...register('location', { required: 'Event location is required' })}
                    className="w-full px-4 py-3 bg-[#1a1f23] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-500"
                    placeholder="Your address or venue"
                  />
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Special Requests</label>
                  <textarea
                    {...register('specialRequests')}
                    rows={3}
                    className="w-full px-4 py-3 bg-[#1a1f23] border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-500"
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
          <section className="section-padding bg-black/70 backdrop-blur-md">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Past Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have catered for events including: Cinco de Mayo parties, Weddings, Gender Reveals, Birthday Parties, and Corporate events!
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
                className="bg-[#1a1f23] rounded-2xl p-6 shadow-lg card-hover border border-gray-800"
              >
                {event.image && <div className="text-5xl mb-4 text-center">{event.image}</div>}
                <h3 className="text-lg font-bold text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {event.description}
                </p>
                <div className="text-xs text-gray-400">
                  {event.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          {/* Call to Action */}
          <section className="section-padding bg-gradient-to-r from-brown-900/90 to-brown-800/80 backdrop-blur-sm text-white">
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
            <p className="text-xl text-brown-200 mb-8 max-w-2xl mx-auto">
              Let us make your special event unforgettable with authentic churros 
              and warm hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
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

          {/* Reviews Section */}
          <RotatingReviews />
        </div>
      </div>
    </ElegenciaLayout>
  )
}




