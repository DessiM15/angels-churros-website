'use client'

import { useState } from 'react'
import { Plus, Minus, ShoppingCart, Star, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  isPopular?: boolean
  isVegetarian?: boolean
  isGlutenFree?: boolean
}

interface CartItem extends MenuItem {
  quantity: number
}

const InteractiveMenu = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [cart, setCart] = useState<CartItem[]>([])
  const [favorites, setFavorites] = useState<string[]>([])

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Classic Churros',
      description: 'Fresh, crispy churros dusted with cinnamon sugar',
      price: 4.99,
      image: '/assets/churros.webp',
      category: 'churros',
      isPopular: true
    },
    {
      id: '2',
      name: 'Churros with Condensed Milk',
      description: 'Traditional churros drizzled with sweet condensed milk',
      price: 6.99,
      image: '/assets/churros-condensed-milk.webp',
      category: 'churros',
      isPopular: true
    },
    {
      id: '3',
      name: 'Heart-Shaped Churros',
      description: 'Perfect for special occasions, made with love',
      price: 7.99,
      image: '/assets/heart-churros.webp',
      category: 'churros'
    },
    {
      id: '4',
      name: 'Premium Hot Chocolate',
      description: 'Rich, velvety chocolate made from finest ingredients',
      price: 5.99,
      image: '/assets/hot-chocolate.webp',
      category: 'beverages',
      isPopular: true
    },
    {
      id: '5',
      name: 'Mexican Coffee',
      description: 'Authentic Mexican coffee with a hint of cinnamon',
      price: 4.99,
      image: '/assets/coffee.webp',
      category: 'beverages'
    },
    {
      id: '6',
      name: 'Fried Oreos',
      description: 'Crispy fried Oreos dusted with powdered sugar',
      price: 5.99,
      image: '/assets/fried-oreos.webp',
      category: 'desserts'
    },
    {
      id: '7',
      name: 'Party Pack (12 churros)',
      description: 'Perfect for celebrations and gatherings',
      price: 24.99,
      image: '/assets/party+packs.webp',
      category: 'packages',
      isPopular: true
    }
  ]

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'churros', name: 'Churros' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'packages', name: 'Party Packages' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === itemId)
      if (existingItem && existingItem.quantity > 1) {
        return prev.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
      return prev.filter(item => item.id !== itemId)
    })
  }

  const toggleFavorite = (itemId: string) => {
    setFavorites(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const getCartQuantity = (itemId: string) => {
    const item = cart.find(cartItem => cartItem.id === itemId)
    return item ? item.quantity : 0
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.isPopular && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                  {item.isVegetarian && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Vegetarian
                    </span>
                  )}
                  {item.isGlutenFree && (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Gluten Free
                    </span>
                  )}
                </div>
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                    favorites.includes(item.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${favorites.includes(item.id) ? 'fill-current' : ''}`} />
                </button>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-lg font-bold text-gray-900">${item.price}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getCartQuantity(item.id) > 0 ? (
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold text-gray-900">{getCartQuantity(item.id)}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition-colors flex items-center space-x-2"
                      >
                        <Plus className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm z-50"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Your Order</h3>
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {cart.reduce((total, item) => total + item.quantity, 0)} items
            </div>
          </div>

          <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{item.name}</h4>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded-full transition-colors"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-sm text-gray-600">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded-full transition-colors"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>
                <span className="font-semibold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-xl font-bold text-orange-500">${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Checkout</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default InteractiveMenu
