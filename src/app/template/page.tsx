'use client'

import TemplateLayout from '@/components/TemplateLayout'
import TemplateHero from '@/components/TemplateHero'
import { Star, Clock, Users, Award } from 'lucide-react'
import Link from 'next/link'

const TemplateHomePage = () => {
  return (
    <TemplateLayout>
      {/* Hero Section */}
      <TemplateHero />

      {/* Best Category Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Our Specialties
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Best Quality Churros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the authentic taste of Mexico with our freshly made churros, 
              premium hot chocolate, and warm hospitality that brings our community together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8" />,
                title: "Fresh Daily",
                description: "Made fresh every morning using traditional Mexican recipes"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Open Daily",
                description: "7AM to 9PM, seven days a week for your convenience"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community Focused",
                description: "Bringing people together through authentic flavors"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Houston's First",
                description: "The first and only authentic churrería in Houston"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                About Angels Churros
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Houston's First Authentic Churrería
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Inspired by the great cafeterías of Mexico, where conversation blooms and writers, 
                artists, activists and intellectuals make their mark. We bring that same spirit to 
                Houston with our authentic churros and premium chocolate.
              </p>
              <p className="text-gray-600 mb-8">
                Plenty of tables, no television, no 30-minute maximum. Come and stay awhile while 
                you enjoy our fresh churros and rich hot chocolate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/our-story"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/menu"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  View Menu
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <img 
                  src="/assets/churros-and-table.png" 
                  alt="Fresh churros on table" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Churros Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Our Menu
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured Items
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/assets/churros.webp",
                title: "Classic Churros",
                description: "Fresh, crispy churros dusted with cinnamon sugar",
                price: "$4.99"
              },
              {
                image: "/assets/hot-chocolate.webp",
                title: "Premium Hot Chocolate",
                description: "Rich, velvety chocolate made from finest ingredients",
                price: "$5.99"
              },
              {
                image: "/assets/party+packs.webp",
                title: "Party Packs",
                description: "Perfect for celebrations and gatherings",
                price: "$24.99"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience Authentic Churros?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join us for the most authentic churro experience in Houston. 
              Fresh, warm, and made with love every day.
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
              <Link
                href="/reservation"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </section>
    </TemplateLayout>
  )
}

export default TemplateHomePage