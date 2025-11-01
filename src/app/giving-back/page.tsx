'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CalendarDays, ExternalLink, MapPin, PenSquare } from 'lucide-react'
import ElegenciaLayout from '@/components/ElegenciaLayout'
import RotatingReviews from '@/components/RotatingReviews'

type Story = {
  title: string
  displayDate?: string
  author?: string
  location?: string
  summary?: string
  image: string
  imageAlt: string
  tags?: string[]
  body?: string[]
  interview?: { label: string; url: string }
  translation?: string
  translationAttribution?: string
  closingNote?: string
  isComingSoon?: boolean
  gallery?: { src: string; alt: string }[]
}

const stories: Story[] = [
  {
    title: 'Helping Uvalde Texas with Churros',
    displayDate: 'Dec 29',
    author: 'Xochitl Garcia',
    location: 'Uvalde, Texas',
    summary:
      'Erika and Joe Garcia packed the Angels Churros cart and drove from Katy to Uvalde to comfort a community in mourning with prayer, presence, and fresh churros.',
    image: '/assets/uvalde-story.webp',
    imageAlt: 'Erika and Joe Garcia preparing the Angels Churros cart for Uvalde outreach',
    gallery: [
      {
        src: '/assets/uvalde-story.webp',
        alt: 'Erika and Joe Garcia preparing the Angels Churros cart for Uvalde outreach',
      },
      {
        src: '/assets/uvalde-story-2.webp',
        alt: 'Angels Churros cart set up in Uvalde, Texas',
      },
      {
        src: '/assets/uvalde-story-3.webp',
        alt: 'Community receiving churros from Angels Churros team in Uvalde',
      },
    ],
    tags: ['Community Relief', 'Faith in Action'],
    body: [
      'Our owners, Erika and Joe Garcia, went to Uvalde, Texas in June 2022 to touch and aid the Uvalde community in the best possible way they could.',
      "They loaded their churro cart, hooked the trailer, and took off. Erika and Joe traveled from Katy all the way to the Uvalde community to give the store's churros and offer prayer requests.",
      "All who know Erika know her testament and her heart. She does everything in love and in good faith. Thank you to our Houston community for pouring support into our store. Because of this, we are able to pour into another community.",
      "This is our store's testament: something as simple as a churro can be the sweet remedy that someone may need.",
    ],
    interview: {
      label: 'Watch the Telemundo San Antonio interview',
      url: 'https://www.telemundosanantonio.com/noticias/local/viajan-desde-lejos-para-apoyar-a-la-comunidad-de-uvalde-tras-la-balacera-escolar/2196520/',
    },
    translation:
      'We came here to bring happiness from churros, for all of the community of Uvalde, Texas... You still feel the pain of the people, from their eyes, from the air, but in all this, there are still good people out there.',
    translationAttribution: 'Erika Garcia',
    closingNote: 'Our Churro Cart at Town Center',
  },
  {
    title: 'Celebrating “Dia De Los Ninos” in Veracruz',
    displayDate: 'May 26',
    author: 'Xochitl Garcia',
    location: 'Nanchital, Veracruz, Mexico',
    summary:
      'Partnering with family in Nanchital, Angels Churros helped 400+ kids celebrate Dia de Los Niños with donated bread and heartfelt care during the pandemic.',
    image: '/assets/veracruz-story.webp',
    imageAlt: 'Children in Veracruz receiving donated treats during Dia de Los Niños celebration',
    gallery: [
      {
        src: '/assets/veracruz-story.webp',
        alt: 'Children in Veracruz receiving donated treats during Dia de Los Niños celebration',
      },
      {
        src: '/assets/veracruz-story-2.webp',
        alt: 'Cousin Janet handing a child a donated sacked lunch in Veracruz',
      },
    ],
    tags: ['International Outreach', 'Family', 'Community Celebration'],
    body: [
      'As a business, we always aim to give back to our community here in Houston and at home in our native Veracruz, Mexico in a small town called Nanchital.',
      'Yesterday in Mexico was the national holiday we recognize as “Dia de Los Niños” or Day of the Kids. This day is about recognizing the importance of children in society and promoting their well-being—a celebration typically held in schools.',
      'Due to COVID-19, schools were forced to close, and many children in Nanchital could not afford to celebrate this holiday, leaving students without any means of observing it.',
      'Through every purchase made here, 400+ kids were able to celebrate with bread donated from our store. Our cousin Janet hand-delivered sacked lunches to make sure every child felt loved.',
      'Thank you to every guest that has walked through our door. Because of you, a child was able to celebrate their holiday with joy.',
    ],
    closingNote: 'The Biggest Thank You y Mil Gracias — The Garcia Family // La Familia Garcia',
  },
]

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.2 },
}

export default function GivingBack() {
  return (
    <ElegenciaLayout>
      <div className="pt-16 lg:pt-20 bg-[#040D10]">
        <section id="giving-back-hero" className="relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-brown-900 to-black" />
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-32 -left-24 h-64 w-64 rounded-full bg-primary-500 blur-3xl" />
            <div className="absolute top-24 right-0 h-80 w-80 rounded-full bg-elegencia-gold/40 blur-[120px]" />
          </div>
          <div className="relative z-10 container-custom py-24 lg:py-32">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block text-xs uppercase tracking-[0.35em] text-elegencia-gold"
              >
                Community Journal
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="text-4xl font-serif font-bold md:text-5xl lg:text-6xl"
              >
                Stories of Giving Back
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.15 }}
                className="text-lg text-cream-100/90 md:text-xl"
              >
                Each chapter captures how Angels Churros shows up for our neighbors with prayer, presence, and something sweet. Welcome to our blog-style archive of heartfelt impact.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25 }}
                className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
              >
                <a
                  href="mailto:community@angelschurros.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-brown-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-cream-200 hover:text-brown-900"
                >
                  Share Your Story
                </a>
                <a
                  href="/store"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-8 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Support the Mission
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-cream-50">
          <div className="container-custom space-y-16 py-20 lg:py-24">
            <motion.div {...reveal} className="mx-auto max-w-3xl space-y-4 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-brown-500">Latest Stories</p>
              <h2 className="text-4xl font-serif text-brown-900 lg:text-5xl">Sweet moments of impact</h2>
              <p className="text-lg text-brown-700">
                Discover how a churro cart, a praying heart, and a supportive community come together in the moments we hold most dear.
              </p>
            </motion.div>

            <div className="space-y-20">
              {stories.map((story, index) => {
                const galleryImages = story.gallery?.length
                  ? story.gallery
                  : [{ src: story.image, alt: story.imageAlt }]

                return (
                  <motion.article
                    key={story.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true, amount: 0.25 }}
                    className={`relative overflow-hidden rounded-3xl border border-brown-100/60 shadow-xl shadow-brown-900/5 ${story.isComingSoon ? 'bg-cream-100/70' : 'bg-white'}`}
                  >
                    <div className="grid gap-0 lg:grid-cols-[1.1fr,0.9fr]">
                      <div className="order-2 flex flex-col gap-6 p-8 lg:order-1 lg:p-12">
                        <div className="flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.4em] text-primary-600">
                          <span className="font-semibold text-elegencia-gold">Community Spotlight</span>
                          {story.tags?.map((tag) => (
                            <span
                              key={`${story.title}-${tag}`}
                              className="rounded-full bg-brown-100 px-3 py-1 font-semibold text-brown-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-3xl font-serif text-brown-900 md:text-4xl">{story.title}</h3>
                          {story.summary && (
                            <p className="leading-relaxed text-lg text-brown-700">{story.summary}</p>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-brown-500">
                          {story.displayDate && (
                            <span className="inline-flex items-center gap-2">
                              <CalendarDays className="h-4 w-4" />
                              {story.displayDate}
                            </span>
                          )}
                          {story.author && (
                            <span className="inline-flex items-center gap-2">
                              <PenSquare className="h-4 w-4" />
                              {story.author}
                            </span>
                          )}
                          {story.location && (
                            <span className="inline-flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {story.location}
                            </span>
                          )}
                        </div>

                        {story.body && (
                          <div className="space-y-4 text-base leading-relaxed text-brown-700 md:text-lg">
                            {story.body.map((paragraph, paragraphIndex) => (
                              <p key={`${story.title}-paragraph-${paragraphIndex}`}>{paragraph}</p>
                            ))}
                          </div>
                        )}

                        {story.translation && (
                          <blockquote className="border-l-4 border-brown-200 pl-6 italic text-brown-600">
                            {story.translation}
                            {story.translationAttribution && (
                              <cite className="mt-3 block font-semibold not-italic text-brown-500">
                                - {story.translationAttribution}
                              </cite>
                            )}
                          </blockquote>
                        )}

                        {story.interview && (
                          <a
                            href={story.interview.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 font-semibold text-primary-600 transition hover:text-primary-700"
                          >
                            <ExternalLink className="h-4 w-4" />
                            {story.interview.label}
                          </a>
                        )}

                        {story.closingNote && (
                          <p className="text-xs uppercase tracking-[0.35em] text-brown-400">{story.closingNote}</p>
                        )}
                      </div>

                      <div className="order-1 relative lg:order-2">
                        <div className={`relative h-full w-full ${story.isComingSoon ? 'opacity-80' : ''}`}>
                          {galleryImages.length > 1 ? (
                            <div className="flex h-full flex-col gap-3 p-4">
                              <div className="relative flex-1 overflow-hidden rounded-3xl bg-brown-900/10">
                                <Image
                                  src={galleryImages[0].src}
                                  alt={galleryImages[0].alt}
                                  fill
                                  sizes="(min-width: 1024px) 40vw, 100vw"
                                  className="object-cover"
                                  priority={index === 0}
                                  unoptimized
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                {galleryImages.slice(1).map((media, mediaIndex) => (
                                  <div
                                    key={`${story.title}-gallery-${mediaIndex}`}
                                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-brown-900/10"
                                  >
                                    <Image
                                      src={media.src}
                                      alt={media.alt}
                                      fill
                                      sizes="(min-width: 1024px) 20vw, 100vw"
                                      className="object-cover"
                                      unoptimized
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="relative aspect-[4/3] w-full lg:h-full">
                              <Image
                                src={galleryImages[0].src}
                                alt={galleryImages[0].alt}
                                fill
                                sizes="(min-width: 1024px) 40vw, 100vw"
                                className="object-cover"
                                priority={index === 0}
                                unoptimized
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
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




