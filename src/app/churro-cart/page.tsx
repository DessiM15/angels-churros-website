'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Truck, Calendar, CheckCircle, Heart, MapPin, Phone, Mail } from 'lucide-react'
import ElegenciaLayout from '@/components/ElegenciaLayout'
import RotatingReviews from '@/components/RotatingReviews'

const faqs = [
  {
    question: 'What is included in my quote?',
    answer: 'Your base quote always includes the Churro Cart, 2+ cocineras (cooks), fresh hot churros, and your requested dips. When we contact you, the Garcia family will walk through every detail so your quote reflects your exact needs.'
  },
  {
    question: 'What can I expect on the day of my event?',
    answer: 'We arrive one hour before your requested serving time. Please let us know where to park the trailer hauling the cart and where you would like us to set up so we can start serving right on schedule.'
  },
  {
    question: 'Is there a discount program?',
    answer: 'Yes! Pay your quote in full with cash and enjoy 10% off. We also offer special pricing for churches and schools—just mention it when you book.'
  },
  {
    question: 'What do I need to provide?',
    answer: 'The churro cart is gas powered, but we do need access to at least one electrical outlet for supporting appliances. Unless otherwise requested, guests provide their own plates and utensils.'
  },
  {
    question: 'How do I pay for my event?',
    answer: 'To reserve your date, we require a deposit that is applied toward your final quote. The remaining balance is due according to the payment plan we confirm with you.'
  },
  {
    question: 'What if I cancel?',
    answer: 'Cancellations made 30 days or more before the event incur a $100 cancellation fee. If you cancel within 30 days, the deposit becomes non-refundable.'
  }
]

const eventHighlights = [
  'Corporate Events',
  'Weddings',
  'Birthday Parties',
  'School Celebrations',
  'Quinceañeras',
  'Gender Reveals',
  'Baby Showers & More'
]

const galleryItems = [
  {
    image: '/assets/churro-cart-1.webp',
    caption: 'Baby shower celebration featuring our churro cart.'
  },
  {
    image: '/assets/churro-cart-2.webp',
    caption: 'Churro cart setup bringing the sweetness to your event.'
  },
  {
    image: '/assets/churro-cart-3.webp',
    caption: 'We add excitement to every celebration.'
  },
  {
    image: '/assets/churro-cart-4.webp',
    caption: 'A delicious delight on wheels for weddings and more.'
  },
  {
    image: '/assets/churro-cart-5.webp',
    caption: 'Experienced with venues across the Greater Houston region.'
  },
  {
    image: '/assets/churro-cart-6.webp',
    caption: 'Ready for any style of event, indoors or outdoors.'
  },
  {
    image: '/assets/churro-cart-7.webp',
    caption: 'Drive-thru celebrations love our churro cart.'
  }
]

const hourOptions = ['2 hours', '3 hours', '4 hours', '5 hours', '6+ hours']

const guestOptions = ['Up to 50 guests', '51-100 guests', '101-150 guests', '150+ guests']

const experienceHighlights = [
  {
    title: 'Baby Shower Bliss',
    description: 'The Churro Cart catered a sweet baby shower—just one of the many celebrations we elevate.'
  },
  {
    title: 'Wedding Ready',
    description: 'We have experience with venues across the Greater Houston region, including The Farmhouse.'
  },
  {
    title: 'Drive-Thru Friendly',
    description: 'From traditional receptions to creative drive-thru events, we adapt to any party style.'
  }
]

interface CartInquiryForm {
  firstName: string
  lastName: string
  bestContact: string
  email: string
  address1: string
  address2: string
  city: string
  state: string
  zip: string
  eventType: string
  eventDate: string
  hoursRequested: string
  guestEstimate: string
  additionalInfo: string
  heardFrom: string
}

export default function ChurroCart() {
  const { register, handleSubmit, formState: { errors } } = useForm<CartInquiryForm>()

  const onSubmit = (data: CartInquiryForm) => {
    console.log('Churro cart booking submitted:', data)
    // Handle form submission
  }

  return (
    <ElegenciaLayout>
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/churro-cart-hero.jpg"
            alt="Angels Churros cart set up and ready to serve guests"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brown-900/90 to-brown-800/75"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                  Churro Cart Inquiry Form
                </h1>
                <p className="text-xl lg:text-2xl text-elegencia-gold max-w-3xl mx-auto mb-4">
                  Have a special event coming up? Bring a touch of sweetness and excitement to your celebration with Angels Churros N Chocolate.
                </p>
                <p className="text-lg text-cream-200 max-w-2xl mx-auto">
                  Introducing our Churro Cart—a delicious delight on wheels! Fill out the form below for a free custom quote.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/assets/churro-cart-hero.jpg"
          >
            <source src="/assets/mini-churros-falling.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#040d10]/55 via-[#040d10]/60 to-[#020508]/65" />
        </div>

        <div className="relative z-10">
          <section className="section-padding bg-black/45 backdrop-blur-sm">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                Have Churros, Will Travel
                </h2>
              <p className="text-lg text-gray-300 mb-4">
                We&apos;re thrilled to introduce our newest addition—the Angels Churros Churro Cart! It&apos;s the perfect way to wow your guests with fresh churros, premium chocolate, and a joyful atmosphere.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We do all events—corporate gatherings, weddings, birthday parties, school celebrations, quinces, gender reveals, baby showers, and more.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eventHighlights.map((highlight) => (
                  <div key={highlight} className="flex items-center space-x-3 bg-[#040D10] border border-gray-800 rounded-xl px-4 py-3">
                    <CheckCircle size={18} className="text-elegencia-gold flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-200">{highlight}</span>
                  </div>
                ))}
              </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
              {experienceHighlights.map((experience) => (
                <div key={experience.title} className="bg-[#040D10] border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{experience.description}</p>
                </div>
              ))}
                </motion.div>
              </div>
            </div>
          </section>

          <section className="section-padding bg-black/40 backdrop-blur-sm">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                  Churro Cart Moments
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Take a peek at recent events where our churro cart brought smiles, sweetness, and unforgettable memories.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, index) => (
                  <motion.div
                    key={item.image}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-2xl border border-gray-800 bg-[#1a1f23]"
                  >
                    <div className="h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-300">{item.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Inquiry Form */}
          <section className="section-padding bg-black/40 backdrop-blur-sm">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                    Ready for Your Free Quote?
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2">Share Your Event Details</h3>
                        <p className="text-gray-300">Tell us about your celebration so we can plan the perfect churro experience.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2">Receive a Custom Quote</h3>
                        <p className="text-gray-300">We&apos;ll review your form and send a quote tailored to your event needs.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2">Confirm the Details</h3>
                        <p className="text-gray-300">We&apos;ll connect with you to finalize logistics, timing, and special requests.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-2">Celebrate With Churros</h3>
                        <p className="text-gray-300">We&apos;ll show up with smiles, fresh churros, and everything needed for a memorable event.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  id="inquiry-form"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-[#1a1f23] rounded-2xl p-8 border border-gray-800"
                >
              <h3 className="text-2xl font-bold text-white mb-3">Churro Cart Inquiry Form</h3>
              <p className="text-sm text-gray-400 mb-6">Fill out every required field so our team can send your quote quickly.</p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">First Name *</label>
                    <input
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="First name"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Last Name *</label>
                    <input
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Best Number to Reach You *</label>
                    <input
                      {...register('bestContact', { required: 'Contact number is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="(832) 770 - 0802"
                    />
                    {errors.bestContact && <p className="text-red-500 text-sm mt-1">{errors.bestContact.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Email *</label>
                    <input
                      {...register('email', { required: 'Email is required' })}
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Event Address *</label>
                  <input
                    {...register('address1', { required: 'Address line 1 is required' })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 mb-3"
                    placeholder="Address line 1"
                  />
                  {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1.message}</p>}
                  <input
                    {...register('address2')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Address line 2 (optional)"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">City *</label>
                    <input
                      {...register('city', { required: 'City is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="City"
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">State *</label>
                    <input
                      {...register('state', { required: 'State is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="State"
                    />
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">ZIP Code *</label>
                    <input
                      {...register('zip', { required: 'ZIP code is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="ZIP code"
                    />
                    {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Event Type *</label>
                    <select
                      {...register('eventType', { required: 'Event type is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select an option</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="school">School Event</option>
                      <option value="quinceanera">Quinceañera</option>
                      <option value="gender-reveal">Gender Reveal</option>
                      <option value="baby-shower">Baby Shower</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Event Date *</label>
                    <input
                      {...register('eventDate', { required: 'Event date is required' })}
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                    {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Number of Hours Requested *</label>
                    <select
                      {...register('hoursRequested', { required: 'Please select number of hours' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Hours start at 2</option>
                      {hourOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.hoursRequested && <p className="text-red-500 text-sm mt-1">{errors.hoursRequested.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">Number of Guests *</label>
                    <select
                      {...register('guestEstimate', { required: 'Please estimate the number of guests' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select an option</option>
                      {guestOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.guestEstimate && <p className="text-red-500 text-sm mt-1">{errors.guestEstimate.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">Anything Else We Need to Know? *</label>
                  <textarea
                    {...register('additionalInfo', { required: 'Please share additional details' })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Diet restrictions? Special attire? Permits?"
                  />
                  {errors.additionalInfo && <p className="text-red-500 text-sm mt-1">{errors.additionalInfo.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">How Did You Hear About Us?</label>
                  <select
                    {...register('heardFrom')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#111618] text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Friend or Family</option>
                    <option value="event">Saw You at an Event</option>
                    <option value="returning">Returning Customer</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Request Free Quote
                </button>
              </form>
            </motion.div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="section-padding bg-black/45 backdrop-blur-sm">
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
          <section className="section-padding bg-brown-900/55 backdrop-blur-md text-white">
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-primary-400" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-brown-300">(832) 770 - 0802</div>
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

                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-primary-400" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-brown-300">angleschurrosnchocolate@gmail.com</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Book Now</span>
                    <Truck size={20} />
                  </button>
                  <a
                    href="mailto:angleschurrosnchocolate@gmail.com"
                    className="border-2 border-white text-white hover:bg-white hover:text-brown-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Email Us</span>
                    <Heart size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
          <RotatingReviews />
        </div>
      </div>
    </div>
    </ElegenciaLayout>
  )
}




