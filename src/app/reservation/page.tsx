'use client'

import ElegenciaLayout from '@/components/ElegenciaLayout'
import ReservationForm from '@/components/ReservationForm'
import RotatingReviews from '@/components/RotatingReviews'
import { motion } from 'framer-motion'

const ReservationPage = () => {
  return (
    <ElegenciaLayout>
      {/* Page Header */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden pt-16 lg:pt-20">
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
                  Book Your Table
                </h1>
                <p className="text-xl lg:text-2xl text-elegencia-gold max-w-2xl mx-auto">
                  Reserve your spot at Houston's first authentic churrería. 
                  Experience the warmth of traditional Mexican café culture.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ReservationForm />
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-[#1a1f23]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6">
                What to Expect
              </h2>
              <p className="text-xl text-brown-700">
                At Angels Churros, we create an authentic Mexican café experience 
                where conversation flows and community thrives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Authentic Atmosphere",
                  description: "Traditional Mexican café ambiance with plenty of seating and no time limits",
                  icon: "🏛️"
                },
                {
                  title: "Fresh Daily",
                  description: "Churros made fresh every morning using time-honored recipes",
                  icon: "🥨"
                },
                {
                  title: "Community Focus",
                  description: "A gathering place where friends, families, and neighbors come together",
                  icon: "👥"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center bg-white rounded-2xl p-6 shadow-lg card-hover"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-brown-900 mb-3">{item.title}</h3>
                  <p className="text-brown-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <RotatingReviews />
    </ElegenciaLayout>
  )
}

export default ReservationPage





