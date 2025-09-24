
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {Fish, Leaf, Award, Truck, ArrowRight, Globe, Thermometer, Calendar, Ruler, Package, Snowflake, CheckCircle} from 'lucide-react'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Billions of night crawlers sold - more than any other bait company on the continent'
    },
    {
      icon: Globe,
      title: 'Global Export',
      description: 'Exporting millions of night crawlers annually to Europe and United States since 1950s'
    },
    {
      icon: Thermometer,
      title: 'Climate Control',
      description: 'Unique cooling facilities keep dew worms strong and healthy year-round'
    },
    {
      icon: Calendar,
      title: 'Reliable Supply',
      description: 'Constant year-round supply while others run out during Canadian winters'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-700 opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
                  National Bait Inc
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                Premium Night Crawlers & Fishing Bait
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Built on a history of quality, innovation, and first-class service for almost 6 decades. 
                Your trusted source for premium night crawlers and fishing bait.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-2xl hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Shop Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-2xl border-2 border-teal-600 hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8918084/pexels-photo-8918084.jpeg?_gl=1*b1o6nj*_ga*MzUxMzgwOTM5LjE3NTU3NTUxNTM.*_ga_8JE65Q40S6*czE3NTU3NTUxNTIkbzEkZzEkdDE3NTU3NTU2NTUkajU5JGwwJGgw"
                  alt="Fishing with Premium Bait"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
                  <p className="text-teal-100">Hand-selected for fishing success</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose National Bait Inc Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
              Why Choose National Bait Inc?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on a history of quality, innovation, and first-class service for almost 6 decades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100 group hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Lumbricus Terrestris Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-teal-200 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
                  Lumbricus Terrestris
                </h3>
                <h4 className="text-2xl font-semibold text-emerald-700 mb-6">
                  Night Crawlers
                </h4>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Unquestionably the favoured fresh water bait by fishermen world-wide. These premium earthworms range from 90mm to 300mm in length with their distinctive light pinkish-brown colour.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Ruler className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">90-300mm length range</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-pink-200 to-amber-200 rounded-full border border-gray-300"></div>
                    <span className="text-gray-700">Light pinkish-brown colour</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Fish className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Introduced by European settlers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-teal-600" />
                    <span className="text-gray-700">Exported worldwide since 1950s</span>
                  </div>
                </div>

                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View Product Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/baitpost.jpg"
                    alt="Premium Night Crawlers and Earthworms"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Canadian Nightcrawlers Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 md:p-12 border border-emerald-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
                  Canadian Nightcrawlers
                </h3>
                <h4 className="text-2xl font-semibold text-green-700 mb-6">
                  Premium Fresh Water Bait
                </h4>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Unquestionably the favoured fresh water bait by fishermen world-wide. These premium earthworms range from 90mm to 300mm in length with their distinctive characteristics, sourced directly from Canadian soil for superior quality.
                </p>
                
                <div className="mb-8">
                  <h5 className="text-lg font-semibold text-emerald-700 mb-4">Available Pack Sizes:</h5>
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[12, 18, 24, 48].map((size) => (
                      <div key={size} className="bg-white rounded-xl p-4 text-center border border-emerald-200 shadow-sm">
                        <div className="text-2xl font-bold text-emerald-600">{size}</div>
                        <div className="text-sm text-gray-600">count</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Snowflake className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">100% Canadian sourced</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Thermometer className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Temperature controlled storage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Hand-selected quality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Package className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">Fresh weekly delivery</span>
                  </div>
                </div>

                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View Product Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/Bait_eagle_stand.jpg"
                    alt="Canadian Nightcrawlers - Premium Fresh Water Bait"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust National Bait Inc for their fishing and gardening needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border-2 border-white hover:bg-white hover:text-teal-600 transition-all duration-300"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
