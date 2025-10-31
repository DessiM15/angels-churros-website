'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus, ShoppingCart, Star, Clock, Utensils } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import ElegenciaLayout from '@/components/ElegenciaLayout'
import RotatingReviews from '@/components/RotatingReviews'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image?: string
  category?: string
  popular?: boolean
  options?: string[]
}

const menuData = {
  'breakfast': {
    title: 'Breakfast',
    subtitle: 'Start your day right',
    items: [
      {
        id: 'huevos-chorizo',
        name: 'Huevos & Chorizo Plate',
        description: 'Scrambled chorizo eggs, served alongside papas, refried beans & tortillas, add +$2.00 for bacon',
        price: 9.50,
        popular: true,
      },
      {
        id: 'tamales-rancheros',
        name: 'Tamales Rancheros',
        description: 'Two authentic Mexican tamales, topped with huevos rancheros on top. Dish is served with refried beans, papas and tortillas, add +$2.00 for bacon',
        price: 12.50,
        popular: true,
      },
    ]
  },
  'lunch': {
    title: 'Lunch',
    subtitle: 'Served all day',
    items: [
      {
        id: 'joe-burger',
        name: 'Joe\'s Burger Combo',
        description: 'The classic, angus beef burger, made fresh never frozen, includes lettuce, tomato, grilled onions, cheese, mayo, mustard, ketchup. Includes fries and a fountain drink',
        price: 12.47,
        popular: true,
        options: ['Bacon +$0.52', 'Egg +$0.52'],
      },
      {
        id: 'turkey-panini',
        name: 'Turkey Panini Combo',
        description: 'Feta-cheese dressing, baby spinach, & cherry tomato\'s, includes fries and a fountain drink',
        price: 10.39,
      },
      {
        id: 'salami-panini',
        name: 'Salami Panini Combo',
        description: 'Fresh mozzarella, basil infused cherry tomatoes, truffle oil, & basil pesto, includes fries and a fountain drink',
        price: 10.39,
      },
      {
        id: 'mexi-tamales',
        name: 'Mexi-Tamales Combo',
        description: '2 traditional, red, chicken tamales, served with red or green house hot-sauce, includes fries and a fountain drink',
        price: 10.39,
      },
    ]
  },
  'quick-bites': {
    title: 'Quick Bites',
    subtitle: 'Perfect for snacking',
    items: [
      {
        id: 'cheeto-fries',
        name: 'Hot-Cheeto Cheese Fries',
        description: 'French fries dressing with hot cheese topped with cheeto powder',
        price: 6.24,
      },
      {
        id: 'elote',
        name: 'Elote',
        description: 'Roasted corn, mayo, cream, cheese, tajin, in-house spicy sauce, topped with cilantro',
        price: 6.24,
        popular: true,
      },
      {
        id: 'truffled-fries',
        name: 'Truffled Fries',
        description: 'French fries, dashed with truffle oil, topped with parmesan cheese, cayenne pepper, & salt',
        price: 5.20,
      },
      {
        id: 'tamales-alacarte',
        name: 'Tamales A La Carte',
        description: '2 traditional, red, chicken, tamales, served with red, or green house hot-sauce',
        price: 5.72,
      },
    ]
  },
  'cafe': {
    title: 'Cafe',
    subtitle: 'Our organic espresso originates from the mountains of Chiapas, Mexico',
    items: [
      {
        id: 'espresso',
        name: 'Espresso',
        description: 'Rich, bold espresso shot',
        price: 4.16,
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Espresso with hot water',
        price: 4.16,
      },
      {
        id: 'macchiato',
        name: 'Macchiato',
        description: 'Espresso with a dollop of steamed milk',
        price: 4.68,
      },
      {
        id: 'cortado',
        name: 'Cortado',
        description: 'Espresso with equal parts steamed milk',
        price: 4.68,
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam',
        price: 4.68,
      },
      {
        id: 'affogato',
        name: 'Affogato',
        description: 'Espresso poured over vanilla ice cream',
        price: 5.20,
      },
      {
        id: 'latte',
        name: 'Latte',
        description: 'Espresso with steamed milk',
        price: 5.20,
      },
      {
        id: 'vietnamese-iced-coffee',
        name: 'Vietnamese Iced Coffee',
        description: 'Strong coffee with condensed milk over ice',
        price: 6.24,
      },
      {
        id: 'chai-latte',
        name: 'Chai Latte',
        description: 'Spiced tea with steamed milk',
        price: 6.24,
      },
    ]
  },
  'bakery': {
    title: 'Bakery',
    subtitle: 'Fresh baked treats',
    items: [
      {
        id: 'fried-oreos',
        name: 'Fried Oreos',
        description: 'Crispy fried Oreo cookies',
        price: 2.34,
        options: ['2 for $4.68', '4 for $6.50', '6 for $10.66', '10 for $15.86'],
      },
    ]
  },
  'traditional-churros': {
    title: 'Traditional Churros',
    subtitle: 'Traditional Spanish churros topped with your choice of powdered sugar, or granular sugar dashed with cinnamon. Choice of dips: caramel, chocolate, condensed milk, honey, nutella, dulce de leche, strawberry',
    items: [
      {
        id: '3-churros-1-dip',
        name: '3 Churros + 1 Dip',
        description: 'Three fresh churros with your choice of dip',
        price: 6.50,
        options: ['Extra dip +$0.52'],
        popular: true,
      },
      {
        id: '5-churros-2-dips',
        name: '5 Churros + 2 Dips',
        description: 'Five fresh churros with two dips',
        price: 8.58,
        options: ['Extra dip +$0.52'],
      },
      {
        id: '8-churros-3-dips',
        name: '8 Churros + 3 Dips',
        description: 'Eight fresh churros with three dips',
        price: 10.66,
        options: ['Extra dip +$0.52'],
      },
      {
        id: 'churro-bites-1-dip',
        name: 'Churro Bites + 1 Dip',
        description: 'Bite-sized churros with one dip',
        price: 6.50,
        options: ['Extra dip +$0.52'],
      },
    ]
  },
  'churro-dream': {
    title: 'Churro Dream',
    subtitle: 'Creamy ice-cream served with a fresh hot churro. Ice-cream flavors include butter-pecan, cappuccino crunch, chocolate, cookies-n-creme, vanilla, coconut, lama-licious, strawberry',
    items: [
      {
        id: '1-scoop-churro',
        name: '1 Scoop + Churro',
        description: 'One scoop of ice cream with a fresh churro',
        price: 5.46,
        options: ['Additional churro +$2.08'],
      },
      {
        id: '2-scoops-churro',
        name: '2 Scoops + Churro',
        description: 'Two scoops of ice cream with a fresh churro',
        price: 7.02,
        options: ['Additional churro +$2.08'],
      },
      {
        id: '3-scoops-churro',
        name: '3 Scoops + Churro',
        description: 'Three scoops of ice cream with a fresh churro',
        price: 8.06,
        options: ['Additional churro +$2.08'],
      },
    ]
  },
  'drinks': {
    title: 'Drinks',
    subtitle: 'Refreshing beverages',
    items: [
      {
        id: 'hot-chocolate',
        name: 'Hot Chocolate',
        description: 'The Mexican, the Swiss, the "Iced Mexican"',
        price: 5.72,
        popular: true,
      },
      {
        id: 'fruit-smoothies',
        name: 'Fruit Smoothies',
        description: 'Choose from strawberry, mango, mango-strawberry, banana-strawberry, mango-banana, pineapple',
        price: 6.23,
        options: ['Tapioca +$0.52'],
      },
      {
        id: 'best-tea',
        name: 'Best Tea of Your Life',
        description: 'The Guava or the Honeydew',
        price: 5.71,
      },
      {
        id: 'milk-tea',
        name: 'Milk-Tea',
        description: 'Thai red, taro, jasmine green, coco, vanilla, mango, pineapple, cookies-n-creme',
        price: 5.15,
        options: ['Tapioca +$0.52'],
      },
      {
        id: 'mangonadas',
        name: 'Angel Mangonadas',
        description: 'Made with chamoy sauce, fresh mango, special mango puree, lime juice, and tajin',
        price: 7.27,
        popular: true,
        options: ['Tamarindo stick +$1.00'],
      },
      {
        id: 'milkshakes',
        name: 'Creamy Milkshakes',
        description: 'Made with Hershey\'s ice-cream, choose from nutella, very-berry, coconut, cookies-n-creme',
        price: 6.23,
        options: ['Tapioca +$0.52'],
      },
    ]
  },
  'churro-sundaes': {
    title: 'Churro Sundaes',
    subtitle: 'Churros topped with ice-cream and other fun toppings!',
    items: [
      {
        id: 'rocky-road',
        name: 'Rocky Road',
        description: '2 long fresh hot cinnamon-sugar churros, topped with chocolate ice-cream, dressed in chocolate, covered in toasted marshmallows, finished with almonds',
        price: 11.43,
        popular: true,
      },
      {
        id: 'the-homer',
        name: 'The Homer',
        description: '2 long fresh hot cinnamon-sugar churros, topped with strawberry ice-cream, dashed with fresh strawberries, topped with colorful sprinkles',
        price: 11.43,
      },
      {
        id: 'be-someone',
        name: 'The "Be Someone"',
        description: '2 long fresh hot cinnamon-sugar churros, covered in brownie crumbles, topped with lama-licious ice-cream, then glazed with creamy white chocolate',
        price: 11.43,
      },
      {
        id: 'churro-boat',
        name: 'The Churro Boat',
        description: '2 long fresh hot cinnamon-sugar churros, covered in brownie crumbles, topped with cappuccino crunch ice-cream, then glazed with creamy dark chocolate, topped with powdered sugar and mini-churros',
        price: 13.51,
        popular: true,
      },
    ]
  },
  'churro-combos': {
    title: 'Churro Combo\'s',
    subtitle: 'Want churros and a drink? These combos aim to satisfy! Any additional churro is +$1.00 additional dip +$0.50',
    items: [
      {
        id: 'churro-smoothie',
        name: '3 Churros + Smoothie',
        description: 'Mix 2 flavors, strawberry, mango, pineapple, banana + 1 dip',
        price: 10.39,
        popular: true,
      },
      {
        id: 'churro-frappe',
        name: '3 Churros + Frappe',
        description: 'Choose from matcha, mocha, chocolate, horchata, caramel + 1 dip',
        price: 10.39,
      },
      {
        id: 'churro-milktea',
        name: '3 Churros + Milk Tea',
        description: 'Choose from taro, strawberry, mango, coconut, cookies-n-creme, matcha, + 1 dip',
        price: 10.39,
      },
      {
        id: 'churro-milkshake',
        name: '3 Churros + Milkshake',
        description: 'Choose from very-berry, nutella, cookies-n-creme, coconut, + 1 dip',
        price: 10.39,
      },
      {
        id: 'churro-mexican-hot-chocolate',
        name: '3 Churros + Mexican Hot Chocolate',
        description: 'Includes 1 dip',
        price: 10.39,
      },
      {
        id: 'churro-swiss-hot-chocolate',
        name: '3 Churros + Swiss Hot Chocolate',
        description: 'Includes 1 dip',
        price: 10.39,
      },
    ]
  },
}

export default function Menu() {
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [activeCategory, setActiveCategory] = useState<string>('breakfast')
  const { addItem } = useCart()

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }))
  }

  const addToCart = (item: MenuItem) => {
    const quantity = quantities[item.id] || 1
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity,
      image: item.image || '',
    })
    setQuantities(prev => ({ ...prev, [item.id]: 0 }))
  }

  const scrollToCategory = (categoryKey: string) => {
    setActiveCategory(categoryKey)
    if (categoryKey !== 'all') {
      const element = document.getElementById(categoryKey)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <ElegenciaLayout>
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="/assets/our-menu-hero.jpg"
          >
            <source src="/assets/oreos-menu-hero.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
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

      {/* Category Navigation */}
      <section className="py-12 bg-gray-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => scrollToCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-elegencia-gold text-brown-900 shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              View All
            </button>
            {Object.entries(menuData).map(([categoryKey, category]) => (
              <button
                key={categoryKey}
                onClick={() => scrollToCategory(categoryKey)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === categoryKey
                    ? 'bg-elegencia-gold text-brown-900 shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <div className={`bg-gray-900 ${activeCategory === 'all' ? 'relative' : ''}`}>
        {/* View All Background with Logo */}
        {activeCategory === 'all' && (
          <div 
            className="absolute inset-0 bg-black bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: 'url(/assets/angels-churro-logo.webp)'
            }}
          ></div>
        )}
        {Object.entries(menuData).map(([categoryKey, category], categoryIndex) => (
          <section 
            key={categoryKey} 
            id={categoryKey}
            className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'} ${
              activeCategory === categoryKey || activeCategory === 'all' ? 'block' : 'hidden'
            } ${
              categoryKey === 'breakfast' || categoryKey === 'lunch' || categoryKey === 'quick-bites' || categoryKey === 'cafe' || categoryKey === 'bakery' || categoryKey === 'drinks' || categoryKey === 'traditional-churros' || categoryKey === 'churro-dream' || categoryKey === 'churro-sundaes' || categoryKey === 'churro-combos' ? 'relative' : ''
            } ${
              activeCategory === 'all' ? 'relative z-10' : ''
            }`}
          >
            {/* Breakfast Hero Background */}
            {categoryKey === 'breakfast' && activeCategory === 'breakfast' && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url(/assets/breakfast-hero.jpg)'
                }}
              ></div>
            )}
            {/* Lunch Hero Background */}
            {categoryKey === 'lunch' && activeCategory === 'lunch' && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url(/assets/lunch-hero.jpg)'
                }}
              ></div>
            )}
            {/* Quick Bites Hero Background */}
            {categoryKey === 'quick-bites' && activeCategory === 'quick-bites' && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url(/assets/quick-bites-hero.jpg)'
                }}
                aria-label="elote elote in houston best elote in houston best elote in cypress elote in cypress"
              ></div>
            )}
            {/* Cafe Hero Background */}
            {categoryKey === 'cafe' && activeCategory === 'cafe' && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url(/assets/cafe-hero.jpg)'
                }}
              ></div>
            )}
            {/* Bakery Hero Background */}
            {categoryKey === 'bakery' && activeCategory === 'bakery' && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url(/assets/bakery-hero.jpg)'
                }}
                aria-label="fried oreos fried oreos in houston fried oreos in cypress fried oreos near me"
              ></div>
            )}
            {/* Drinks Hero Background */}
            {categoryKey === 'drinks' && activeCategory === 'drinks' && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url(/assets/drinks-hero.jpg)'
                }}
                aria-label="mangonadas in houston mangonadas in cypress mangonadas"
              ></div>
            )}
            {/* Traditional Churros Hero Background */}
            {categoryKey === 'traditional-churros' && activeCategory === 'traditional-churros' && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url(/assets/traditional-churros-hero.jpg)'
                }}
                aria-label="churros near me churros in houston best churros churros churros in cypress churros cypress best churros cypress best churros in houston"
              ></div>
            )}
            {/* Churro Dream Hero Background */}
            {categoryKey === 'churro-dream' && activeCategory === 'churro-dream' && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url(/assets/churro-dream-hero.jpg)'
                }}
                aria-label="churros houston churros in cypress sweet treats near me Cypress churros houston churros icecream in houston icecream in cypress"
              ></div>
            )}
            {/* Churro Sundaes Hero Background */}
            {categoryKey === 'churro-sundaes' && activeCategory === 'churro-sundaes' && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url(/assets/churro-sundae-hero.jpg)'
                }}
              ></div>
            )}
            {/* Churro Combos Hero Background */}
            {categoryKey === 'churro-combos' && activeCategory === 'churro-combos' && (
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{
                  backgroundImage: 'url(/assets/churro-combo-hero.jpg)'
                }}
                aria-label="churros near me boba near me milk tea near me milk tea cypress milk tea houston houston churros"
              ></div>
            )}
            <div className={`container-custom ${(categoryKey === 'breakfast' && activeCategory === 'breakfast') || (categoryKey === 'lunch' && activeCategory === 'lunch') || (categoryKey === 'quick-bites' && activeCategory === 'quick-bites') || (categoryKey === 'cafe' && activeCategory === 'cafe') || (categoryKey === 'bakery' && activeCategory === 'bakery') || (categoryKey === 'drinks' && activeCategory === 'drinks') || (categoryKey === 'traditional-churros' && activeCategory === 'traditional-churros') || (categoryKey === 'churro-dream' && activeCategory === 'churro-dream') || (categoryKey === 'churro-sundaes' && activeCategory === 'churro-sundaes') || (categoryKey === 'churro-combos' && activeCategory === 'churro-combos') ? 'relative z-10' : ''}`}>
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-block">
                  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                    {category.title}
                  </h2>
                  <p className="text-xl text-elegencia-gold mb-6">
                    {category.subtitle}
                  </p>
                  <div className="w-24 h-1 bg-elegencia-gold mx-auto rounded-full"></div>
                </div>
              </motion.div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(category.items as MenuItem[]).map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-700"
                  >
                    <div className="p-8">
                      {/* Item Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white">
                              {item.name}
                            </h3>
                            {item.popular && (
                              <div className="flex items-center space-x-1 bg-yellow-100 px-3 py-1 rounded-full">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="text-sm text-yellow-700 font-semibold">Popular</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-3xl font-bold text-elegencia-gold">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed text-base">
                        {item.description}
                      </p>

                      {/* Add-ons */}
                      {item.options && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-200 mb-3">Add-ons:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.options.map((option, optionIndex) => (
                              <span
                                key={optionIndex}
                                className="text-sm bg-elegencia-gold/20 text-elegencia-gold px-4 py-2 rounded-lg font-medium border border-elegencia-gold/30"
                              >
                                {option}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Quantity and Add to Cart */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-600">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors border border-gray-600"
                          >
                            <Minus className="w-5 h-5 text-gray-300" />
                          </button>
                          <span className="text-xl font-bold text-white w-8 text-center">
                            {quantities[item.id] || 0}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors border border-gray-600"
                          >
                            <Plus className="w-5 h-5 text-gray-300" />
                          </button>
                        </div>

                        <button
                          onClick={() => addToCart(item)}
                          disabled={!quantities[item.id] || quantities[item.id] === 0}
                          className="flex items-center space-x-3 bg-elegencia-gold hover:bg-elegencia-gold/90 disabled:bg-gray-600 disabled:cursor-not-allowed text-brown-900 px-8 py-3 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          <ShoppingCart className="w-5 h-5" />
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

      {/* Reviews Section */}
      <RotatingReviews />
    </div>
    </ElegenciaLayout>
  )
}