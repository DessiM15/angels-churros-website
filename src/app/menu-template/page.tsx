import TemplateLayout from '@/components/TemplateLayout'
import InteractiveMenu from '@/components/InteractiveMenu'
import { motion } from 'framer-motion'
import { Star, Clock, Users } from 'lucide-react'

const MenuPage = () => {
  return (
    <TemplateLayout>
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Menu
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Discover our authentic churros, premium beverages, and delicious treats. 
              All made fresh daily with traditional Mexican recipes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Star className="h-8 w-8" />,
                number: "500+",
                label: "Churros Made Daily"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                number: "15+",
                label: "Years of Experience"
              },
              {
                icon: <Users className="h-8 w-8" />,
                number: "1000+",
                label: "Happy Customers"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg"
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Menu */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Fresh & Authentic
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every item on our menu is crafted with care using traditional Mexican recipes. 
              Filter by category to find your favorites.
            </p>
          </motion.div>

          <InteractiveMenu />
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Special Offers
            </h2>
            <p className="text-lg text-gray-600">
              Don't miss out on our current promotions and special deals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Early Bird Special",
                description: "20% off all churros before 9 AM",
                discount: "20% OFF",
                validUntil: "Valid until 9:00 AM daily"
              },
              {
                title: "Family Pack",
                description: "Buy 2 party packs, get 1 free",
                discount: "BUY 2 GET 1",
                validUntil: "Valid all day"
              },
              {
                title: "Student Discount",
                description: "15% off with valid student ID",
                discount: "15% OFF",
                validUntil: "Valid with student ID"
              }
            ].map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {offer.discount}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <p className="text-sm text-gray-500">{offer.validUntil}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Skip the wait and order your favorite churros online. 
              Fresh, warm, and ready when you arrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://order.online/store/angels-churros-n-chocolate-582123"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                Order Online Now
              </a>
              <a
                href="/reservation"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                Book a Table
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </TemplateLayout>
  )
}

export default MenuPage





