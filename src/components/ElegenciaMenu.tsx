'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'
import { useCart } from './CartProvider'

const ElegenciaMenu = () => {
  const { addItem, removeItem, items } = useCart()
  const [activeCategory, setActiveCategory] = useState('all')
  
  const getItemQuantity = (id: string) => {
    const item = items.find(item => item.id === id)
    return item ? item.quantity : 0
  }

  const menuCategories = [
    { id: 'all', name: 'All Items' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'quick-bites', name: 'Quick Bites' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'churro-combos', name: 'Churro Combos' },
    { id: 'cafe', name: 'Cafe' },
    { id: 'bakery', name: 'Bakery' },
    { id: 'traditional-churros', name: 'Traditional Churros' },
    { id: 'churro-dream', name: 'Churro Dream' },
    { id: 'churro-sundaes', name: 'Churro Sundaes' }
  ]

  const menuItems = [
    // Breakfast Items
    {
      id: 'huevos-chorizo',
      title: 'Huevos & Chorizo Plate',
      price: '$9.50',
      description: 'Scrambled chorizo eggs, served alongside papas, refried beans & tortillas',
      category: 'breakfast',
      image: '/assets/hero-champurrado.jpg',
      addOns: [
        { name: 'Bacon', price: '+$2.00' }
      ]
    },
    {
      id: 'tamales-rancheros',
      title: 'Tamales Rancheros',
      price: '$12.50',
      description: 'Two authentic Mexican tamales, topped with huevos rancheros on top. Dish is served with refried beans, papas and tortillas',
      category: 'breakfast',
      image: '/assets/hero-champurrado.jpg',
      addOns: [
        { name: 'Bacon', price: '+$2.00' }
      ]
    },

    // Lunch Items
    {
      id: 'joes-burger',
      title: 'Joe\'s Burger Combo',
      price: '$12.47',
      description: 'The classic, angus beef burger, made fresh never frozen, includes lettuce, tomato, grilled onions, cheese, mayo, mustard, ketchup. Includes fries and a fountain drink',
      category: 'lunch',
      image: '/assets/joes-burger.webp',
      addOns: [
        { name: 'Bacon', price: '+$0.52' },
        { name: 'Egg', price: '+$0.52' }
      ]
    },
    {
      id: 'turkey-panini',
      title: 'Turkey Panini Combo',
      price: '$10.39',
      description: 'Feta-cheese dressing, baby spinach, & cherry tomato\'s, includes fries and a fountain drink',
      category: 'lunch',
      image: '/assets/joes-burger.webp'
    },
    {
      id: 'salami-panini',
      title: 'Salami Panini Combo',
      price: '$10.39',
      description: 'Fresh mozzarella, basil infused cherry tomatoes, truffle oil, & basil pesto, includes fries and a fountain drink',
      category: 'lunch',
      image: '/assets/joes-burger.webp'
    },
    {
      id: 'mexi-tamales',
      title: 'Mexi-Tamales Combo',
      price: '$10.39',
      description: '2 traditional, red, chicken tamales, served with red or green house hot-sauce, includes fries and a fountain drink',
      category: 'lunch',
      image: '/assets/hero-champurrado.jpg'
    },

    // Quick Bites
    {
      id: 'hot-cheeto-fries',
      title: 'Hot-Cheeto Cheese Fries',
      price: '$6.24',
      description: 'French fries dressing with hot cheese topped with cheeto powder',
      category: 'quick-bites',
      image: '/assets/joes-burger.webp'
    },
    {
      id: 'elote',
      title: 'Elote',
      price: '$6.24',
      description: 'Roasted corn, mayo, cream, cheese, tajin, in-house spicy sauce, topped with cilantro',
      category: 'quick-bites',
      image: '/assets/elote.webp'
    },
    {
      id: 'truffled-fries',
      title: 'Truffled Fries',
      price: '$5.20',
      description: 'French fries, dashed with truffle oil, topped with parmesan cheese, cayenne pepper, & salt',
      category: 'quick-bites',
      image: '/assets/joes-burger.webp'
    },
    {
      id: 'tamales-carte',
      title: 'Tamales A La Carte',
      price: '$5.72',
      description: '2 traditional, red, chicken, tamales, served with red, or green house hot-sauce',
      category: 'quick-bites',
      image: '/assets/hero-champurrado.jpg'
    },

    // Drinks
    {
      id: 'hot-chocolate',
      title: 'Hot Chocolate',
      price: '$5.72',
      description: 'The Mexican, the Swiss, the "Iced Mexican"',
      category: 'drinks',
      image: '/assets/hot-chocolate.webp'
    },
    {
      id: 'fruit-smoothies',
      title: 'Fruit Smoothies',
      price: '$6.23',
      description: 'Choose from strawberry, mango, mango-strawberry, banana-strawberry, mango-banana, pineapple',
      category: 'drinks',
      image: '/assets/coffee.webp',
      addOns: [
        { name: 'Tapioca', price: '+$0.52' }
      ]
    },
    {
      id: 'best-tea',
      title: 'Best Tea of Your Life',
      price: '$5.71',
      description: 'The Guava or the Honeydew',
      category: 'drinks',
      image: '/assets/coffee.webp'
    },
    {
      id: 'milk-tea',
      title: 'Milk-Tea',
      price: '$5.15',
      description: 'Thai red, taro, jasmine green, coco, vanilla, mango, pineapple, cookies-n-creme',
      category: 'drinks',
      image: '/assets/coffee.webp',
      addOns: [
        { name: 'Tapioca', price: '+$0.52' }
      ]
    },
    {
      id: 'angel-mangonadas',
      title: 'Angel Mangonadas',
      price: '$7.27',
      description: 'Made with chamoy sauce, fresh mango, special mango puree, lime juice, and tajin',
      category: 'drinks',
      image: '/assets/coffee.webp',
      addOns: [
        { name: 'Tamarindo Stick', price: '+$1.00' }
      ]
    },
    {
      id: 'creamy-milkshakes',
      title: 'Creamy Milkshakes',
      price: '$6.23',
      description: 'Made with Hershey\'s ice-cream, choose from nutella, very-berry, coconut, cookies-n-creme',
      category: 'drinks',
      image: '/assets/coffee.webp',
      addOns: [
        { name: 'Tapioca', price: '+$0.52' }
      ]
    },

    // Churro Combos
    {
      id: 'churros-smoothie',
      title: '3 Churros + Smoothie',
      price: '$10.39',
      description: 'Mix 2 flavors, strawberry, mango, pineapple, banana + 1 dip',
      category: 'churro-combos',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Additional Churro', price: '+$1.00' },
        { name: 'Additional Dip', price: '+$0.50' }
      ]
    },
    {
      id: 'churros-frappe',
      title: '3 Churros + Frappe',
      price: '$10.39',
      description: 'Choose from matcha, mocha, chocolate, horchata, caramel + 1 dip',
      category: 'churro-combos',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Additional Churro', price: '+$1.00' },
        { name: 'Additional Dip', price: '+$0.50' }
      ]
    },
    {
      id: 'churros-milk-tea',
      title: '3 Churros + Milk Tea',
      price: '$10.39',
      description: 'Choose from taro, strawberry, mango, coconut, cookies-n-creme, matcha, + 1 dip',
      category: 'churro-combos',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Additional Churro', price: '+$1.00' },
        { name: 'Additional Dip', price: '+$0.50' }
      ]
    },
    {
      id: 'churros-milkshake',
      title: '3 Churros + Milkshake',
      price: '$10.39',
      description: 'Choose from very-berry, nutella, cookies-n-creme, coconut, + 1 dip',
      category: 'churro-combos',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Additional Churro', price: '+$1.00' },
        { name: 'Additional Dip', price: '+$0.50' }
      ]
    },
    {
      id: 'churros-hot-chocolate',
      title: '3 Churros + Mexican Hot Chocolate',
      price: '$10.39',
      description: 'Includes 1 dip',
      category: 'churro-combos',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Additional Churro', price: '+$1.00' },
        { name: 'Additional Dip', price: '+$0.50' }
      ]
    },
    {
      id: 'churros-swiss-hot-chocolate',
      title: '3 Churros + Swiss Hot Chocolate',
      price: '$10.39',
      description: 'Includes 1 dip',
      category: 'churro-combos',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Additional Churro', price: '+$1.00' },
        { name: 'Additional Dip', price: '+$0.50' }
      ]
    },

    // Cafe Items
    {
      id: 'espresso',
      title: 'Espresso',
      price: '$4.16',
      description: 'Our organic espresso originates from the mountains of Chiapas, Mexico',
      category: 'cafe',
      image: '/assets/coffee.webp'
    },
    {
      id: 'americano',
      title: 'Americano',
      price: '$4.16',
      description: 'Our organic espresso originates from the mountains of Chiapas, Mexico',
      category: 'cafe',
      image: '/assets/coffee.webp'
    },
    {
      id: 'macchiato',
      title: 'Macchiato',
      price: '$4.68',
      description: 'Our organic espresso originates from the mountains of Chiapas, Mexico',
      category: 'cafe',
      image: '/assets/coffee.webp'
    },
    {
      id: 'cortado',
      title: 'Cortado',
      price: '$4.68',
      description: 'Our organic espresso originates from the mountains of Chiapas, Mexico',
      category: 'cafe',
      image: '/assets/coffee.webp'
    },
    {
      id: 'cappuccino',
      title: 'Cappuccino',
      price: '$4.68',
      description: 'Our organic espresso originates from the mountains of Chiapas, Mexico',
      category: 'cafe',
      image: '/assets/coffee.webp'
    },
    {
      id: 'affogato',
      title: 'Affogato',
      price: '$5.20',
      description: 'Our organic espresso originates from the mountains of Chiapas, Mexico',
      category: 'cafe',
      image: '/assets/coffee.webp'
    },
    {
      id: 'latte',
      title: 'Latte',
      price: '$5.20',
      description: 'Our organic espresso originates from the mountains of Chiapas, Mexico',
      category: 'cafe',
      image: '/assets/coffee.webp'
    },
    {
      id: 'vietnamese-iced-coffee',
      title: 'Vietnamese Iced Coffee',
      price: '$6.24',
      description: 'Our organic espresso originates from the mountains of Chiapas, Mexico',
      category: 'cafe',
      image: '/assets/coffee.webp'
    },
    {
      id: 'chai-latte',
      title: 'Chai Latte',
      price: '$6.24',
      description: 'Our organic espresso originates from the mountains of Chiapas, Mexico',
      category: 'cafe',
      image: '/assets/coffee.webp'
    },

    // Bakery Items
    {
      id: 'fried-oreos-1',
      title: 'Fried Oreos (1)',
      price: '$2.34',
      description: 'Crispy fried Oreos with powdered sugar',
      category: 'bakery',
      image: '/assets/fried-oreos.webp'
    },
    {
      id: 'fried-oreos-4',
      title: 'Fried Oreos (4)',
      price: '$6.50',
      description: 'Crispy fried Oreos with powdered sugar',
      category: 'bakery',
      image: '/assets/fried-oreos.webp'
    },
    {
      id: 'fried-oreos-6',
      title: 'Fried Oreos (6)',
      price: '$10.66',
      description: 'Crispy fried Oreos with powdered sugar',
      category: 'bakery',
      image: '/assets/fried-oreos.webp'
    },
    {
      id: 'fried-oreos-10',
      title: 'Fried Oreos (10)',
      price: '$15.86',
      description: 'Crispy fried Oreos with powdered sugar',
      category: 'bakery',
      image: '/assets/fried-oreos.webp'
    },

    // Traditional Churros
    {
      id: 'traditional-churros-3',
      title: '3 Churros + 1 Dip',
      price: '$6.50',
      description: 'Traditional Spanish churros topped with your choice of powdered sugar, or granular sugar dashed with cinnamon',
      category: 'traditional-churros',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Extra Dip', price: '+$0.52' }
      ]
    },
    {
      id: 'traditional-churros-5',
      title: '5 Churros + 2 Dips',
      price: '$8.58',
      description: 'Traditional Spanish churros topped with your choice of powdered sugar, or granular sugar dashed with cinnamon',
      category: 'traditional-churros',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Extra Dip', price: '+$0.52' }
      ]
    },
    {
      id: 'traditional-churros-8',
      title: '8 Churros + 3 Dips',
      price: '$10.66',
      description: 'Traditional Spanish churros topped with your choice of powdered sugar, or granular sugar dashed with cinnamon',
      category: 'traditional-churros',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Extra Dip', price: '+$0.52' }
      ]
    },
    {
      id: 'churro-bites',
      title: 'Churro Bites + 1 Dip',
      price: '$6.50',
      description: 'Traditional Spanish churros topped with your choice of powdered sugar, or granular sugar dashed with cinnamon',
      category: 'traditional-churros',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Extra Dip', price: '+$0.52' }
      ]
    },

    // Churro Dream
    {
      id: 'churro-dream-1',
      title: '1 Scoop + Churro',
      price: '$5.46',
      description: 'Creamy ice-cream served with a fresh hot churro. Ice-cream flavors include butter-pecan, cappuccino crunch, chocolate, cookies-n-creme, vanilla, coconut, lama-licious, strawberry',
      category: 'churro-dream',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Additional Churro', price: '+$2.08' }
      ]
    },
    {
      id: 'churro-dream-2',
      title: '2 Scoops + Churro',
      price: '$7.02',
      description: 'Creamy ice-cream served with a fresh hot churro. Ice-cream flavors include butter-pecan, cappuccino crunch, chocolate, cookies-n-creme, vanilla, coconut, lama-licious, strawberry',
      category: 'churro-dream',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Additional Churro', price: '+$2.08' }
      ]
    },
    {
      id: 'churro-dream-3',
      title: '3 Scoops + Churro',
      price: '$8.06',
      description: 'Creamy ice-cream served with a fresh hot churro. Ice-cream flavors include butter-pecan, cappuccino crunch, chocolate, cookies-n-creme, vanilla, coconut, lama-licious, strawberry',
      category: 'churro-dream',
      image: '/assets/churros.webp',
      addOns: [
        { name: 'Additional Churro', price: '+$2.08' }
      ]
    },

    // Churro Sundaes
    {
      id: 'rocky-road-sundae',
      title: 'Rocky Road',
      price: '$11.43',
      description: '2 long fresh hot cinnamon-sugar churros, topped with chocolate ice-cream, dressed in chocolate, covered in toasted marshmallows, finished with almonds',
      category: 'churro-sundaes',
      image: '/assets/churros.webp'
    },
    {
      id: 'homer-sundae',
      title: 'The Homer',
      price: '$11.43',
      description: '2 long fresh hot cinnamon-sugar churros, topped with strawberry ice-cream, dashed with fresh strawberries, topped with colorful sprinkles',
      category: 'churro-sundaes',
      image: '/assets/churros.webp'
    },
    {
      id: 'be-someone-sundae',
      title: 'The "Be Someone"',
      price: '$11.43',
      description: '2 long fresh hot cinnamon-sugar churros, covered in brownie crumbles, topped with lama-licious ice-cream, then glazed with creamy white chocolate',
      category: 'churro-sundaes',
      image: '/assets/churros.webp'
    },
    {
      id: 'churro-boat-sundae',
      title: 'The Churro Boat',
      price: '$13.51',
      description: '2 long fresh hot cinnamon-sugar churros, covered in brownie crumbles, topped with cappuccino crunch ice-cream, then glazed with creamy dark chocolate, topped with powdered sugar and mini-churros',
      category: 'churro-sundaes',
      image: '/assets/churros.webp'
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.title,
      price: parseFloat(item.price.replace('$', '')),
      image: item.image,
      quantity: 1
    })
  }

  const handleRemoveFromCart = (itemId: string) => {
    removeItem(itemId)
  }

  return (
    <div className="py-20 bg-[#040D10]">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#FFD28D] text-[#040D10] shadow-lg'
                  : 'bg-[#091E24] text-[#C8C8C8] hover:bg-[#1A1A1A] hover:text-[#FFD28D]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredItems.map((item) => {
            const quantity = getItemQuantity(item.id)
            return (
              <div key={item.id} className="bg-[#091E24] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#FFD28D] text-[#040D10] px-3 py-1 rounded-full text-sm font-semibold">
                    {item.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-[#040D10] text-[#FFD28D] px-3 py-1 rounded-full text-xs font-semibold capitalize">
                    {item.category.replace('-', ' ')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#FFD28D] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#C8C8C8] mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Add-ons */}
                  {item.addOns && item.addOns.length > 0 && (
                    <div className="mb-4">
                      <p className="text-[#FFD28D] text-sm font-semibold mb-2">Add-ons:</p>
                      <div className="space-y-1">
                        {item.addOns.map((addon, index) => (
                          <div key={index} className="flex justify-between text-xs text-[#C8C8C8]">
                            <span>{addon.name}</span>
                            <span className="text-[#FFD28D]">{addon.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add to Cart */}
                  <div className="flex items-center justify-between">
                    {quantity === 0 ? (
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="flex items-center justify-center bg-[#FFD28D] hover:bg-[#FFD28D]/90 text-[#040D10] px-6 py-2 rounded-lg font-semibold transition-colors w-full"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add to Cart
                      </button>
                    ) : (
                      <div className="flex items-center space-x-3 w-full">
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="bg-[#4F4836] hover:bg-[#4F4836]/80 text-white p-2 rounded-lg transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-[#FFD28D] font-semibold flex-1 text-center">{quantity}</span>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="bg-[#4F4836] hover:bg-[#4F4836]/80 text-white p-2 rounded-lg transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link
            href="/menu"
            className="inline-block bg-[#FFD28D] hover:bg-[#FFD28D]/90 text-[#040D10] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ElegenciaMenu