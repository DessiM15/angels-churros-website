'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Coffee, Pizza, Utensils, IceCream, Heart, Star } from 'lucide-react'

const KababiCategories = () => {
  const [activeCategory, setActiveCategory] = useState('churros')

  const categories = [
    {
      id: 'churros',
      name: 'Churros',
      icon: <Star className="h-8 w-8" />,
      description: 'Fresh, crispy churros dusted with cinnamon sugar',
      image: '/assets/churros.webp'
    },
    {
      id: 'coffee',
      name: 'Coffee & Drinks',
      icon: <Coffee className="h-8 w-8" />,
      description: 'Premium hot chocolate and specialty drinks',
      image: '/assets/hot-chocolate.webp'
    },
    {
      id: 'desserts',
      name: 'Desserts',
      icon: <IceCream className="h-8 w-8" />,
      description: 'Sweet treats and traditional Mexican desserts',
      image: '/assets/fried-oreos.webp'
    },
    {
      id: 'snacks',
      name: 'Snacks',
      icon: <Utensils className="h-8 w-8" />,
      description: 'Light bites and savory snacks',
      image: '/assets/elote.webp'
    },
    {
      id: 'parties',
      name: 'Party Packs',
      icon: <Heart className="h-8 w-8" />,
      description: 'Perfect for celebrations and gatherings',
      image: '/assets/party+packs.webp'
    },
    {
      id: 'specialty',
      name: 'Specialty',
      icon: <Pizza className="h-8 w-8" />,
      description: 'Unique items and seasonal specials',
      image: '/assets/joes-burger.webp'
    }
  ]

  const activeCategoryData = categories.find(cat => cat.id === activeCategory)

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 to-orange-600"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            CATEGORY
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Best Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Best foods for you & family - Authentic Mexican flavors made fresh daily
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md hover:shadow-lg'
                }`}
              >
                <div className={`mb-4 flex justify-center ${
                  activeCategory === category.id ? 'text-white' : 'text-orange-500'
                }`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-sm lg:text-base">{category.name}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* Category Content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {activeCategoryData?.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {activeCategoryData?.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/menu"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors text-center"
                  >
                    View Menu
                  </Link>
                  <Link
                    href="/reservation"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors text-center"
                  >
                    Book Table
                  </Link>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={activeCategoryData?.image}
                  alt={activeCategoryData?.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Daily Orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KababiCategories





