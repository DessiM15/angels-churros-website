'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

interface Review {
  id: number
  text: string
  author: string
  rating: number
  source?: string
}

const RotatingReviews = () => {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews: Review[] = [
    {
      id: 1,
      text: "Food and atmosphere were amazing. I got the churro boat with coconut strawberry and vanilla ice cream. I was so excited when I saw the churro boat. I just started eating and forgot to take a picture. I do have a 1/2 eaten picture of it. It tasted so good, but it was a lot, next time I'm going to share it with my dad next time.",
      author: "Mary J",
      rating: 5,
      source: "Google"
    },
    {
      id: 2,
      text: "Update. 2nd visit. The churros and dips were incredible. The staff were so friendly and added such a great variety to their menu. Please come and support these lovely ladies and what they are creating at this little neighborhood shoppe. It is a very family friendly atmosphere and a great place to take the kids.",
      author: "Vickie P.",
      rating: 5,
      source: "Google"
    },
    {
      id: 3,
      text: "Every visit here is a delicious memory. Highly recommend sharing the CHURRO BOAT with the hard shell chocolate drizzled over three scoops of ice cream and the the plethora of cinnamon sugar churros adding a warm crunchy goodness to this sweet cold treat!",
      author: "Jim J",
      rating: 5,
      source: "Google"
    },
    {
      id: 4,
      text: "Super friendly staff. Customer service is great. Love all the cute decor and art inside. There's plenty of seating. Lots of great options for churros and other sweet treats and drinks. The churros are so delicious and fresh. The drinks are great too. Definitely recommend checking this place out.",
      author: "Angelia V",
      rating: 5,
      source: "Google"
    },
    {
      id: 5,
      text: "I'm so glad I don't live closer, I'd order churros everyday! Best churros ever! I ordered 12 for my family and they were gone in minutes!",
      author: "Kashana M",
      rating: 5,
      source: "Google"
    },
    {
      id: 6,
      text: "Yes, yes and YES!! Fresh churros made to order which makes them delicious. The champurrado taste just like my abuelita made growing up. I miss her so much and this just reminds me of our mornings as a 5 yr old kid. They make amazing Joe's Burger too!!",
      author: "TC V.",
      rating: 5,
      source: "Google"
    },
    {
      id: 7,
      text: "AMAZING!!!! Churros and ice cream...what can be better than that?! And the service was top notch. And the decorations were so cool. I would highly recommend.",
      author: "Chelsea C",
      rating: 5,
      source: "Google"
    },
    {
      id: 8,
      text: "We love this place and the food is so good. My daughter love churros and service is excellent. I really recommend this place.",
      author: "Silky S.",
      rating: 5,
      source: "Google"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 4000) // Change review every 4 seconds

    return () => clearInterval(interval)
  }, [reviews.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-16 bg-black/40 border-t border-white/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our amazing customers!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-2xl">
                {/* Angels Churros Logo */}
                <div className="flex justify-center mb-6">
                  <img 
                    src="/assets/angels-churro-logo.webp" 
                    alt="Angels Churros N Chocolate Logo" 
                    className="h-16 w-auto"
                  />
                </div>

                {/* Review Text */}
                <blockquote className="text-xl lg:text-2xl text-white mb-8 leading-relaxed font-medium">
                  "{reviews[currentReview].text}"
                </blockquote>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {renderStars(reviews[currentReview].rating)}
                  </div>
                </div>

                {/* Author and Source */}
                <div className="text-white/80">
                  <p className="text-lg font-semibold">{reviews[currentReview].author}</p>
                  {reviews[currentReview].source && (
                    <p className="text-sm opacity-80">{reviews[currentReview].source}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Review Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? 'bg-elegencia-gold scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RotatingReviews
