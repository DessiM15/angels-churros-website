'use client'

import { motion } from 'framer-motion'
import { Heart, Users, DollarSign, Star, Award, Globe, Coffee } from 'lucide-react'
import ElegenciaLayout from '@/components/ElegenciaLayout'

const initiatives = [
  {
    title: 'Churros for Charity',
    description: 'Monthly events where 100% of proceeds go to local food banks and hunger relief organizations.',
    impact: '$2,500+ raised',
      icon: <Heart className="w-8 h-8 text-brown-700" />,
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-50',
  },
  {
    title: 'Community Food Drives',
    description: 'Regular food collection events and donations to support families in need.',
    impact: '500+ families helped',
      icon: <Users className="w-8 h-8 text-brown-700" />,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Youth Programs',
    description: 'Free churro workshops and educational programs for local schools and youth organizations.',
    impact: '200+ kids reached',
      icon: <Star className="w-8 h-8 text-brown-700" />,
    color: 'from-yellow-400 to-yellow-600',
    bgColor: 'bg-yellow-50',
  },
  {
    title: 'Local Business Support',
    description: 'Partnerships with other local businesses to strengthen the community economy.',
    impact: '15+ partnerships',
      icon: <Globe className="w-8 h-8 text-brown-700" />,
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
  },
]

const impactStories = [
  {
    title: 'Maria\'s Family',
    story: 'When Maria lost her job during the pandemic, our community food drive helped feed her family of four for three months. Today, she volunteers with us to help other families.',
    impact: 'Family of 4 supported',
    image: '👨‍👩‍👧‍👦',
  },
  {
    title: 'Local School Program',
    story: 'We partnered with Cypress Elementary to teach kids about Mexican culture through churro-making workshops. The kids loved learning about different traditions!',
    impact: '150+ students reached',
    image: '🎓',
  },
  {
    title: 'Senior Center Partnership',
    story: 'Every month, we bring fresh churros to the local senior center. For many residents, it\'s a taste of home and a chance to share stories.',
    impact: '50+ seniors served',
    image: '👴',
  },
  {
    title: 'Holiday Food Drive',
    story: 'Last Christmas, we organized a massive food drive that collected over 1,000 pounds of food for local families in need.',
    impact: '1,000+ lbs of food',
    image: '🎄',
  },
]

const partners = [
  {
    name: 'Houston Food Bank',
    description: 'Primary partner for hunger relief efforts',
    logo: '🏦',
    type: 'Food Bank',
  },
  {
    name: 'Cypress Elementary School',
    description: 'Educational partnership for youth programs',
    logo: '🏫',
    type: 'Education',
  },
  {
    name: 'Local Senior Center',
    description: 'Community outreach for elderly residents',
    logo: '👴',
    type: 'Community',
  },
  {
    name: 'Cypress Chamber of Commerce',
    description: 'Business community development',
    logo: '🤝',
    type: 'Business',
  },
]

const stats = [
  {
    number: '$15,000+',
    label: 'Donated to Local Causes',
    icon: <DollarSign className="w-8 h-8 text-primary-600" />,
  },
  {
    number: '500+',
    label: 'Families Helped',
      icon: <Users className="w-8 h-8 text-brown-700" />,
  },
  {
    number: '200+',
    label: 'Youth Reached',
      icon: <Star className="w-8 h-8 text-brown-700" />,
  },
  {
    number: '50+',
    label: 'Events Hosted',
    icon: <Award className="w-8 h-8 text-primary-600" />,
  },
]

export default function GivingBack() {
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
                  Giving Back
                </h1>
                <p className="text-xl lg:text-2xl text-elegencia-gold max-w-3xl mx-auto">
                  Community is at the heart of everything we do. We believe in giving back 
                  and supporting the people who make our neighborhood special.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
              Together with our community, we've made a real difference in the lives 
              of families and individuals throughout Houston.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-[#040D10] rounded-2xl p-8 card-hover"
              >
                <div className="flex justify-center mb-4">
                  <div className="text-brown-700">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-brown-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-brown-700 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Initiatives */}
      <section className="section-padding bg-[#1a1f23]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6">
              Our Initiatives
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
              We're committed to making a positive impact through various community 
              programs and partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 rounded-xl ${initiative.bgColor}`}>
                    {initiative.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brown-900 mb-2">
                      {initiative.title}
                    </h3>
                    <div className="text-brown-700 font-semibold">
                      {initiative.impact}
                    </div>
                  </div>
                </div>
                <p className="text-brown-600 leading-relaxed">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brown-900 mb-6">
              Impact Stories
            </h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto">
              Real stories from real people whose lives have been touched by our 
              community efforts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#040D10] rounded-2xl p-8 card-hover"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{story.image}</div>
                  <h3 className="text-2xl font-bold text-brown-900 mb-2">
                    {story.title}
                  </h3>
                  <div className="text-brown-700 font-semibold">
                    {story.impact}
                  </div>
                </div>
                <p className="text-brown-600 leading-relaxed italic">
                  "{story.story}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <section className="section-padding bg-brown-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-brown-200 max-w-3xl mx-auto">
              We're proud to work with amazing organizations that share our 
              commitment to community service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 card-hover"
              >
                <div className="text-5xl mb-4">{partner.logo}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {partner.name}
                </h3>
                <div className="text-elegencia-gold text-sm font-semibold mb-3">
                  {partner.type}
                </div>
                <p className="text-brown-200 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="section-padding bg-gradient-to-r from-brown-900 to-brown-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              How You Can Help
            </h2>
            <p className="text-xl text-brown-200 mb-8 max-w-2xl mx-auto">
              Join us in making a difference! There are many ways you can support 
              our community initiatives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Heart className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Volunteer</h3>
                <p className="text-brown-200">
                  Join our volunteer team and help with events, food drives, and community programs.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <DollarSign className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Donate</h3>
                <p className="text-brown-200">
                  Make a direct donation to support our community programs and hunger relief efforts.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Coffee className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Visit Us</h3>
                <p className="text-brown-200">
                  Every purchase helps support our community initiatives. Come enjoy our churros!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/store"
                className="bg-white text-brown-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Visit Our Store</span>
                <Coffee size={20} />
              </a>
              <a
                href="mailto:community@angelschurros.com"
                className="border-2 border-white text-white hover:bg-white hover:text-brown-900 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Involved</span>
                <Heart size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </ElegenciaLayout>
  )
}




