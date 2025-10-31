'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Plus, Minus, ShoppingCart, Star, ChevronRight } from 'lucide-react'
import { useCart } from '@/components/CartProvider'
import ElegenciaLayout from '@/components/ElegenciaLayout'

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

interface CategoryData {
  title: string
  subtitle: string
  heroImage: string
  items: MenuItem[]
}

const menuData: Record<string, CategoryData> = {
  'breakfast': {
    title: 'Breakfast',
    subtitle: 'Start your day right',
    heroImage: '/assets/breakfast-hero.jpg',
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
    heroImage: '/assets/lunch-hero.jpg',
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
    heroImage: '/assets/quick-bites-hero.jpg',
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
    heroImage: '/assets/cafe-hero.jpg',
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
    heroImage: '/assets/bakery-hero.jpg',
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
    heroImage: '/assets/traditional-churros-hero.jpg',
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
    heroImage: '/assets/churro-dream-hero.jpg',
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
    heroImage: '/assets/drinks-hero.jpg',
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
    heroImage: '/assets/churro-sundae-hero.jpg',
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
    heroImage: '/assets/churro-combo-hero.jpg',
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

const categoryOrder = [
  'breakfast',
  'lunch',
  'quick-bites',
  'cafe',
  'bakery',
  'traditional-churros',
  'churro-dream',
  'drinks',
  'churro-sundaes',
  'churro-combos'
]

export default function Menu() {
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [activeSection, setActiveSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const { addItem } = useCart()

  // Track scroll position for active section
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      if (isScrolling) return
      
      // Calculate which section is currently in view
      const scrollTop = container.scrollTop
      const viewportHeight = container.clientHeight
      // Each section is full height (100vh), so divide scroll position by viewport height
      // Round to nearest section
      const currentSection = Math.round(scrollTop / viewportHeight)
      setActiveSection(Math.min(Math.max(0, currentSection), categoryOrder.length - 1))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    // Initial check to set active section on mount
    handleScroll()
    
    return () => container.removeEventListener('scroll', handleScroll)
  }, [isScrolling])

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

  const scrollToSection = (index: number) => {
    setIsScrolling(true)
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(index)
    setTimeout(() => setIsScrolling(false), 1000)
  }

  return (
    <ElegenciaLayout>
      {/* Scroll Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-3">
          {categoryOrder.map((categoryKey, index) => {
            const category = menuData[categoryKey]
            if (!category) return null
            
            return (
              <button
                key={categoryKey}
                onClick={() => scrollToSection(index)}
                className={`group flex items-center gap-3 transition-all duration-300 ${
                  activeSection === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
                aria-label={`Go to ${category.title}`}
              >
                <div className={`h-1 w-12 transition-all duration-300 ${
                  activeSection === index 
                    ? 'bg-elegencia-gold w-16' 
                    : 'bg-white/30 group-hover:bg-white/50'
                }`}></div>
                <span className={`text-sm font-light tracking-wider uppercase transition-colors duration-300 ${
                  activeSection === index ? 'text-elegencia-gold' : 'text-white'
                }`}>
                  {category.title}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Container with Snap Scrolling */}
      <div 
        ref={containerRef}
        className="snap-y snap-mandatory overflow-y-scroll h-screen scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {categoryOrder.map((categoryKey, sectionIndex) => {
          const category = menuData[categoryKey]
          if (!category) return null

          // Categories that need extra padding due to long subtitles or many items
          const needsExtraPadding = ['lunch', 'traditional-churros', 'drinks', 'churro-sundaes'].includes(categoryKey)

          return (
            <section
              key={categoryKey}
              ref={(el) => { sectionRefs.current[sectionIndex] = el }}
              className="relative h-screen snap-start snap-always flex items-center justify-center overflow-hidden"
              style={{
                backgroundImage: `url(${category.heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Darkened Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>
              
              {/* Content Container */}
              <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${needsExtraPadding ? 'pt-16 sm:pt-20' : 'pt-20 sm:pt-24'}`}>
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
                  {/* Category Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center mb-8"
                  >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-2 tracking-tight">
                      {category.title}
                    </h2>
                    <p className="text-lg md:text-xl text-elegencia-gold font-light tracking-wide">
                      {category.subtitle}
                    </p>
                    <div className="w-24 h-px bg-elegencia-gold mx-auto mt-3"></div>
                  </motion.div>

                  {/* Menu Items Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-5xl"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {category.items.slice(0, 6).map((item, itemIndex) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                          className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-black/50 transition-all duration-300 group"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-serif text-white group-hover:text-elegencia-gold transition-colors">
                                  {item.name}
                                </h3>
                                {item.popular && (
                                  <Star className="w-4 h-4 text-elegencia-gold fill-current" />
                                )}
                              </div>
                            </div>
                            <span className="text-xl font-serif text-elegencia-gold">
                              ${item.price.toFixed(2)}
                            </span>
                          </div>
                          
                          <p className="text-sm text-white/80 mb-4 leading-relaxed">
                            {item.description}
                          </p>

                          {item.options && (
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {item.options.map((option, optIndex) => (
                                  <span
                                    key={optIndex}
                                    className="text-xs text-elegencia-gold/80 border border-elegencia-gold/30 px-2 py-1 rounded"
                                  >
                                    {option}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-full border border-white/30 hover:border-elegencia-gold hover:bg-elegencia-gold/10 flex items-center justify-center transition-all"
                              >
                                <Minus className="w-4 h-4 text-white" />
                              </button>
                              <span className="text-white w-6 text-center">
                                {quantities[item.id] || 0}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-full border border-white/30 hover:border-elegencia-gold hover:bg-elegencia-gold/10 flex items-center justify-center transition-all"
                              >
                                <Plus className="w-4 h-4 text-white" />
                              </button>
                            </div>

                            <button
                              onClick={() => addToCart(item)}
                              disabled={!quantities[item.id] || quantities[item.id] === 0}
                              className="px-4 py-2 bg-elegencia-gold/90 hover:bg-elegencia-gold disabled:bg-white/10 disabled:cursor-not-allowed text-brown-900 text-sm font-medium rounded transition-all disabled:text-white/30"
                            >
                              <ShoppingCart className="w-4 h-4 inline-block mr-1" />
                              Add
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Order Online Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-center"
                    >
                      <a
                        href="https://order.online/store/angels-churros-n-chocolate-582123"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-elegencia-gold hover:bg-elegencia-gold/90 text-brown-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
                      >
                        <span>Order Online</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Scroll Indicator Arrow */}
              {sectionIndex < categoryOrder.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="w-px h-12 bg-white/30"></div>
                </motion.div>
              )}
            </section>
          )
        })}
      </div>
    </ElegenciaLayout>
  )
}
