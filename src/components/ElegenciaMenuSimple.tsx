'use client'

const ElegenciaMenuSimple = () => {
  const menuItems = [
    {
      id: 'classic-churros',
      title: 'Classic Churros',
      price: '$4.99',
      description: 'Fresh, crispy churros dusted with cinnamon sugar',
      image: '/assets/churros.webp'
    },
    {
      id: 'hot-chocolate',
      title: 'Premium Hot Chocolate',
      price: '$5.99',
      description: 'Rich, velvety chocolate made from finest ingredients',
      image: '/assets/hot-chocolate.webp'
    },
    {
      id: 'party-packs',
      title: 'Party Packs',
      price: '$24.99',
      description: 'Perfect for celebrations and gatherings',
      image: '/assets/party+packs.webp'
    }
  ]

  return (
    <section className="py-12 sm:py-20 bg-black/40">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block bg-[#FFD28D] text-[#040D10] px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Our Menu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FFD28D] mb-4 sm:mb-6">
            Featured Items
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#C8C8C8] max-w-3xl mx-auto">
            Experience the authentic taste of Mexico with our freshly made churros, premium hot chocolate, and warm hospitality.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-transparent border border-white/10 rounded-2xl overflow-hidden hover:border-[#FFD28D] hover:shadow-[0_15px_40px_rgba(255,210,141,0.2)] transition-all duration-300 group"
            >
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
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-[#FFD28D] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#C8C8C8] mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-[#FFD28D] hover:bg-[#FFD28D]/90 text-[#040D10] px-6 py-2 rounded-lg font-semibold transition-colors mt-auto">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <a
            href="/menu"
            className="inline-block bg-[#FFD28D] hover:bg-[#FFD28D]/90 text-[#040D10] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}

export default ElegenciaMenuSimple



