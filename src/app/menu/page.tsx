'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus, ShoppingCart, Star, Clock, Utensils } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import ElegenciaLayout from '@/components/ElegenciaLayout'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  popular?: boolean
  options?: string[]
}

const menuData = {
  'mornin': {
    title: 'Mornin\'',
    subtitle: 'Start your day right',
    icon: '🌅',
    items: [
      {
        id: 'huevos-chorizo',
        name: 'Huevos & Chorizo Plate',
        description: 'Scrambled chorizo eggs, served alongside papas, refried beans & tortillas, add +$2.00 for bacon',
        price: 9.50,
        image: '🍳',
        popular: true,
      },
      {
        id: 'tamales-rancheros',
        name: 'Tamales Rancheros',
        description: 'Two authentic Mexican tamales, topped with huevos rancheros on top. Dish is served with refried beans, papas and tortillas, add +$2.00 for bacon',
        price: 12.50,
        image: '🌽',
        popular: true,
      },
    ]
  },
  'lunch': {
    title: 'Lunch',
    subtitle: 'Served all day',
    icon: '🍽️',
    items: [
      {
        id: 'joe-burger',
        name: 'Joe\'s Burger Combo',
        description: 'The classic, angus beef burger, made fresh never frozen, includes lettuce, tomato, grilled onions, cheese, mayo, mustard, ketchup. Includes fries and a fountain drink',
        price: 12.47,
        image: '🍔',
        popular: true,
        options: ['Bacon +$0.52', 'Egg +$0.52'],
      },
      {
        id: 'turkey-panini',
        name: 'Turkey Panini Combo',
        description: 'Feta-cheese dressing, baby spinach, & cherry tomato\'s, includes fries and a fountain drink',
        price: 10.39,
        image: '🥪',
      },
      {
        id: 'salami-panini',
        name: 'Salami Panini Combo',
        description: 'Fresh mozzarella, basil infused cherry tomatoes, truffle oil, & basil pesto, includes fries and a fountain drink',
        price: 10.39,
        image: '🥪',
      },
      {
        id: 'mexi-tamales',
        name: 'Mexi-Tamales Combo',
        description: '2 traditional, red, chicken tamales, served with red or green house hot-sauce, includes fries and a fountain drink',
        price: 10.39,
        image: '🌽',
      },
    ]
  },
  'quick-bites': {
    title: 'Quick Bites',
    subtitle: 'Perfect for snacking',
    icon: '🍟',
    items: [
      {
        id: 'cheeto-fries',
        name: 'Hot-Cheeto Cheese Fries',
        description: 'French fries dressing with hot cheese topped with cheeto powder',
        price: 6.24,
        image: '🍟',
      },
      {
        id: 'elote',
        name: 'Elote',
        description: 'Roasted corn, mayo, cream, cheese, tajin, in-house spicy sauce, topped with cilantro',
        price: 6.24,
        image: '🌽',
        popular: true,
      },
      {
        id: 'truffled-fries',
        name: 'Truffled Fries',
        description: 'French fries, dashed with truffle oil, topped with parmesan cheese, cayenne pepper, & salt',
        price: 5.20,
        image: '🍟',
      },
      {
        id: 'tamales-alacarte',
        name: 'Tamales A La Carte',
        description: '2 traditional, red, chicken, tamales, served with red, or green house hot-sauce',
        price: 5.72,
        image: '🌽',
      },
    ]
  },
  'drinks': {
    title: 'Drinks',
    subtitle: 'Refreshing beverages',
    icon: '🥤',
    items: [
      {
        id: 'hot-chocolate',
        name: 'Hot Chocolate',
        description: 'The Mexican, the Swiss, the "Iced Mexican"',
        price: 5.72,
        image: '☕',
        popular: true,
      },
      {
        id: 'fruit-smoothies',
        name: 'Fruit Smoothies',
        description: 'Choose from strawberry, mango, mango-strawberry, banana-strawberry, mango-banana, pineapple',
        price: 6.23,
        image: '🥤',
        options: ['Tapioca +$0.52'],
      },
      {
        id: 'best-tea',
        name: 'Best Tea of Your Life',
        description: 'The Guava or the Honeydew',
        price: 5.71,
        image: '🍵',
      },
      {
        id: 'milk-tea',
        name: 'Milk-Tea',
        description: 'Thai red, taro, jasmine green, coco, vanilla, mango, pineapple, cookies-n-creme',
        price: 5.15,
        image: '🧋',
        options: ['Tapioca +$0.52'],
      },
      {
        id: 'mangonadas',
        name: 'Angel Mangonadas',
        description: 'Made with chamoy sauce, fresh mango, special mango puree, lime juice, and tajin',
        price: 7.27,
        image: '🥭',
        popular: true,
        options: ['Tamarindo stick +$1.00'],
      },
      {
        id: 'milkshakes',
        name: 'Creamy Milkshakes',
        description: 'Made with Hershey\'s ice-cream, choose from nutella, very-berry, coconut, cookies-n-creme',
        price: 6.23,
        image: '🥤',
        options: ['Tapioca +$0.52'],
      },
    ]
  },
  'churro-combos': {
    title: 'Churro Combos',
    subtitle: 'Want churros and a drink? These combos aim to satisfy! Any additional churro is +$1.00 additional dip +$0.50',
    icon: '🥨',
    items: [
      {
        id: 'churro-smoothie',
        name: '3 Churros + Smoothie',
        description: 'Mix 2 flavors, strawberry, mango, pineapple, banana + 1 dip',
        price: 10.39,
        image: '🥨',
        popular: true,
      },
      {
        id: 'churro-frappe',
        name: '3 Churros + Frappe',
        description: 'Choose from matcha, mocha, chocolate, horchata, caramel + 1 dip',
        price: 10.39,
        image: '🥨',
      },
      {
        id: 'churro-milktea',
        name: '3 Churros + Milk Tea',
        description: 'Choose from taro, strawberry, mango, coconut, cookies-n-creme, matcha, + 1 dip',
        price: 10.39,
        image: '🥨',
      },
      {
        id: 'churro-milkshake',
        name: '3 Churros + Milkshake',
        description: 'Choose from very-berry, nutella, cookies-n-creme, coconut, + 1 dip',
        price: 10.39,
        image: '🥨',
      },
      {
        id: 'churro-mexican-hot-chocolate',
        name: '3 Churros + Mexican Hot Chocolate',
        description: 'Includes 1 dip',
        price: 10.39,
        image: '🥨',
      },
      {
        id: 'churro-swiss-hot-chocolate',
        name: '3 Churros + Swiss Hot Chocolate',
        description: 'Includes 1 dip',
        price: 10.39,
        image: '🥨',
      },
    ]
  },
}

export default function Menu() {
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const { addItem } = useCart()

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }))
  }

  const addToCart = (item: any) => {
    const quantity = quantities[item.id] || 1
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity,
      image: item.image,
    })
    setQuantities(prev => ({ ...prev, [item.id]: 0 }))
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
                  Our Menu
                </h1>
                <p className="text-xl lg:text-2xl text-elegencia-gold max-w-3xl mx-auto">
                  Authentic Mexican cuisine, fresh churros, and café favorites made daily
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <div className="bg-[#1a1f23]">
        {Object.entries(menuData).map(([categoryKey, category], categoryIndex) => (
          <section key={categoryKey} className="py-16">
            <div className="container-custom">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <span className="text-5xl">{category.icon}</span>
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900">
                      {category.title}
                    </h2>
                    <p className="text-lg text-brown-600 mt-2">
                      {category.subtitle}
                    </p>
                  </div>
                </div>
                <div className="w-24 h-1 bg-elegencia-gold mx-auto rounded-full"></div>
              </motion.div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      {/* Item Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                            {item.image}
                          </span>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-brown-800 mb-1">
                              {item.name}
                            </h3>
                            {item.popular && (
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="text-sm text-yellow-600 font-semibold">Popular</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-elegencia-gold">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-brown-600 mb-4 leading-relaxed text-sm">
                        {item.description}
                      </p>

                      {/* Add-ons */}
                      {item.options && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-brown-700 mb-2">Add-ons:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.options.map((option, optionIndex) => (
                              <span
                                key={optionIndex}
                                className="text-xs bg-elegencia-gold/20 text-elegencia-gold px-3 py-1 rounded-full font-medium"
                              >
                                {option}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Quantity and Add to Cart */}
                      <div className="flex items-center justify-between pt-4 border-t border-brown-100">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-brown-100 hover:bg-brown-200 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4 text-brown-600" />
                          </button>
                          <span className="text-lg font-semibold text-brown-800 w-8 text-center">
                            {quantities[item.id] || 0}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-brown-100 hover:bg-brown-200 flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4 text-brown-600" />
                          </button>
                        </div>

                        <button
                          onClick={() => addToCart(item)}
                          disabled={!quantities[item.id] || quantities[item.id] === 0}
                          className="flex items-center space-x-2 bg-elegencia-gold hover:bg-elegencia-gold/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-brown-900 px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Order Online CTA */}
      <section className="bg-gradient-to-r from-brown-900 to-brown-800 text-white">
        <div className="container-custom section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-elegencia-gold mb-8 max-w-2xl mx-auto">
              Skip the line and order online for pickup or delivery. Fresh churros and authentic Mexican cuisine delivered to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://order.online/store/angels-churros-n-chocolate-582123"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-elegencia-gold text-brown-900 hover:bg-elegencia-gold/90 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Order Online Now
              </a>
              <a
                href="tel:+1234567890"
                className="border-2 border-elegencia-gold text-white hover:bg-elegencia-gold hover:text-brown-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Call to Order
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </ElegenciaLayout>
  )
}