'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Check, Gift, Package, Shirt, ShoppingCart, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import ElegenciaLayout from '@/components/ElegenciaLayout'
import { useCart } from '@/components/CartProvider'
import RotatingReviews from '@/components/RotatingReviews'

type Product = {
  id: string
  title: string
  name: string
  subtitle: string
  description: string
  price: number
  image: string
  badge?: string
}

type Perk = {
  icon: LucideIcon
  title: string
  description: string
}

const products: Product[] = [
  {
    id: 'gift-card-25',
    title: 'Gift Card',
    name: 'Gift Card – $25',
    subtitle: '$25 credit',
    description: 'Treat someone special to fresh churros, signature dipping sauces, and a visit they will remember.',
    price: 25,
    image: '/assets/angels-churros-gift-card.png',
    badge: 'Best Seller',
  },
  {
    id: 'gift-card-50',
    title: 'Gift Card',
    name: 'Gift Card – $50',
    subtitle: '$50 credit',
    description: 'Double the sweetness with a $50 gift card—perfect for birthdays, thank-yous, or team celebrations.',
    price: 50,
    image: '/assets/angels-churros-gift-card.png',
    badge: 'Most Gifted',
  },
  {
    id: 'chiapas-shirt',
    title: 'Chiapas Shirt',
    name: 'Chiapas Shirt',
    subtitle: 'Unisex tee',
    description: 'Wear your churro pride with our soft, limited-edition tee inspired by the vibrant Chiapas region.',
    price: 25,
    image: '/assets/angels-churros-shirt.webp',
    badge: 'Limited Run',
  },
]

const perks: Perk[] = [
  {
    icon: Gift,
    title: 'Instant Delivery',
    description: 'Digital gift cards arrive in your inbox within minutes—no waiting, just sweetness.',
  },
  {
    icon: Sparkles,
    title: 'Celebration-Ready',
    description: 'Perfect for birthdays, office thank-yous, and every celebration in between.',
  },
  {
    icon: Package,
    title: 'Easy Pickup',
    description: 'Collect shirts and merch in-store or at your next churro run—no shipping required.',
  },
]

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function Store() {
  const { addItem } = useCart()
  const [feedback, setFeedback] = useState<Record<string, boolean>>({})
  const timeoutRefs = useRef<Record<string, ReturnType<typeof setTimeout>>>({})

  useEffect(() => {
    return () => {
      Object.values(timeoutRefs.current).forEach(clearTimeout)
    }
  }, [])

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })

    setFeedback((prev) => ({ ...prev, [product.id]: true }))

    if (timeoutRefs.current[product.id]) {
      clearTimeout(timeoutRefs.current[product.id])
    }

    timeoutRefs.current[product.id] = setTimeout(() => {
      setFeedback((prev) => {
        const updated = { ...prev }
        delete updated[product.id]
        return updated
      })
    }, 2000)
  }

  return (
    <ElegenciaLayout>
      <div className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brown-900 via-brown-800 to-brown-700 text-white">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-500 blur-3xl" />
            <div className="absolute bottom-[-6rem] right-[-4rem] h-72 w-72 rounded-full bg-amber-400/40 blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="container-custom py-20 lg:py-28">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-white/80">
                    <Sparkles className="h-4 w-4" />
                    Angels Curated Gifts
                  </span>
                  <h1 className="mt-6 text-4xl font-serif font-bold leading-tight sm:text-5xl lg:text-6xl">
                    Sweet Gifts & Local Merch
                  </h1>
                  <p className="mt-4 text-lg text-white/80 sm:text-xl">
                    Surprise someone with a digital gift card or rep the Angels Churros tradition with our limited-run Chiapas shirt. Every purchase supports a family-owned Houston favorite.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 text-white/80 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-white/15 p-2">
                        <Gift className="h-5 w-5" />
                      </div>
                      <span>Instant delivery on all gift cards</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-white/15 p-2">
                        <Shirt className="h-5 w-5" />
                      </div>
                      <span>Soft, unisex tee in limited quantities</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="relative hidden justify-center lg:flex"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <div className="relative flex w-full max-w-md flex-col items-center gap-8">
                    <motion.div
                      className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="rounded-2xl bg-white/90 p-6 shadow-2xl">
                        <img
                          src="/assets/angels-churros-gift-card.png"
                          alt="Angels Churros gift card"
                          className="mx-auto h-auto w-full max-w-xs object-contain"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className="-mt-6 w-full max-w-xs rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.35 }}
                    >
                      <img
                        src="/assets/angels-churros-shirt.webp"
                        alt="Chiapas Angels Churros shirt"
                        className="mx-auto h-auto w-full object-contain"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="section-padding bg-[#040D10]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl">
                Choose Your Sweet Surprise
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Every item is curated with love from our family to yours. Add your favorites to the cart and we&apos;ll handle the rest.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => {
                const added = Boolean(feedback[product.id])

                return (
                  <motion.article
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex h-full flex-col rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur"
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-60 w-full object-contain p-6"
                      />
                      {product.badge && (
                        <span className="absolute left-4 top-4 rounded-full bg-primary-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="mt-6 flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-serif text-white">{product.title}</h3>
                          <p className="mt-1 text-sm uppercase tracking-[0.3em] text-white/60">{product.subtitle}</p>
                        </div>
                        <span className="text-xl font-semibold text-elegencia-gold">
                          {currencyFormatter.format(product.price)}
                        </span>
                      </div>

                      <p className="mt-4 text-base text-white/70">
                        {product.description}
                      </p>

                      <div className="mt-6 flex items-center gap-3">
                        <div className="rounded-full bg-white/10 p-2 text-white/80">
                          <ShoppingCart className="h-5 w-5" />
                        </div>
                        <span className="text-sm text-white/60">Add now, pick up in-store or send digitally.</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAddToCart(product)}
                        disabled={added}
                        className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                          added
                            ? 'cursor-default bg-emerald-500 text-white'
                            : 'bg-primary-600 text-white hover:bg-primary-700'
                        }`}
                      >
                        {added ? (
                          <>
                            <Check className="h-5 w-5" />
                            Added!
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="h-5 w-5" />
                            Add to Cart
                          </>
                        )}
                      </button>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="section-padding bg-black/30">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-3">
              {perks.map((perk, index) => {
                const Icon = perk.icon
                return (
                  <motion.div
                    key={perk.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur"
                  >
                    <div className="flex items-start gap-4">
                      <span className="rounded-full bg-primary-600/10 p-3 text-primary-400">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{perk.title}</h3>
                        <p className="mt-2 text-sm text-white/70">{perk.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <RotatingReviews />
      </div>
    </ElegenciaLayout>
  )
}


