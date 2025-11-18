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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 20% 50%, #80EF80 0%, transparent 50%), radial-gradient(circle at 80% 80%, #60D060 0%, transparent 50%)` }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
                <span className="bg-gradient-to-r from-[#60D060] via-[#80EF80] to-[#A0F5A0] bg-clip-text text-transparent">
                  National Bait Inc
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                Premium Night Crawlers & Fishing Bait
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Built on a history of quality, innovation, and first-class service for almost 6 decades. 
                Your trusted source for premium night crawlers and fishing bait.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#60D060] to-[#80EF80] text-white font-semibold rounded-2xl hover:from-[#50C050] hover:to-[#60D060] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Shop Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm font-semibold rounded-2xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white/10"
                  style={{ color: '#80EF80', borderColor: '#80EF80' }}
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#80EF80]/30">
                <img
                  src="https://images.pexels.com/photos/8918084/pexels-photo-8918084.jpeg?_gl=1*b1o6nj*_ga*MzUxMzgwOTM5LjE3NTU3NTUxNTM.*_ga_8JE65Q40S6*czE3NTU3NTUxNTIkbzEkZzEkdDE3NTU3NTU2NTUkajU5JGwwJGgw"
                  alt="Fishing with Premium Bait"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
                  <p className="bg-gradient-to-r from-[#80EF80] to-[#A0F5A0] bg-clip-text text-transparent font-semibold">Hand-selected for fishing success</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose National Bait Inc Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#60D060] via-[#80EF80] to-[#A0F5A0] bg-clip-text text-transparent" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              Why Choose National Bait Inc?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-white/10 hover:border-[#80EF80]/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#60D060] to-[#80EF80] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Lumbricus Terrestris Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-8 md:p-12 mb-16 bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-[#80EF80]/30"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#60D060] to-[#80EF80] bg-clip-text text-transparent" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
                  Lumbricus Terrestris
                </h3>
                <h4 className="text-2xl font-semibold text-gray-300 mb-6">
                  Night Crawlers
                </h4>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Unquestionably the favoured fresh water bait by fishermen world-wide. These premium earthworms range from 90mm to 300mm in length with their distinctive light pinkish-brown colour.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Ruler className="w-5 h-5" style={{ color: '#80EF80' }} />
                    <span className="text-gray-300">90-300mm length range</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-pink-200 to-amber-200 rounded-full border border-gray-300"></div>
                    <span className="text-gray-300">Light pinkish-brown colour</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Fish className="w-5 h-5" style={{ color: '#80EF80' }} />
                    <span className="text-gray-300">Introduced by European settlers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5" style={{ color: '#80EF80' }} />
                    <span className="text-gray-300">Exported worldwide since 1950s</span>
                  </div>
                </div>

                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#60D060] to-[#80EF80] text-white font-semibold rounded-xl hover:from-[#50C050] hover:to-[#60D060] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View Product Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#80EF80]/30">
                  <img
                    src="/baitpost.jpg"
                    alt="Premium Night Crawlers and Earthworms"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-8 md:p-12 mb-16 shadow-xl bg-gradient-to-br from-black via-gray-900 to-black border border-[#80EF80]/30"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#60D060] via-[#80EF80] to-[#A0F5A0] bg-clip-text text-transparent" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
                  Canadian Nightcrawlers
                </h3>
                <h4 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                  Premium Fresh Water Bait
                </h4>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Unquestionably the favoured fresh water bait by fishermen worldwide. These premium earthworms range from 90mm to 300mm in length with their distinctive characteristics, sourced directly from Canadian soil for superior quality.
                </p>

                {/* Available Pack Sizes */}
                <div className="mb-8">
                  <h5 className="text-xl font-bold text-white mb-4">Available Pack Sizes</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {['12 count', '18 count', '24 count', '48 count'].map((size) => (
                      <motion.div
                        key={size}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow-md text-center hover:bg-gradient-to-br hover:from-[#80EF80]/10 hover:to-[#60D060]/10 transition-all duration-300 border border-white/10"
                      >
                        <Package className="w-6 h-6 mx-auto mb-2" style={{ color: '#80EF80' }} />
                        <span className="text-white font-semibold">{size}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/10"
                  >
                    <Globe className="w-5 h-5 flex-shrink-0" style={{ color: '#80EF80' }} />
                    <span className="text-gray-300 font-medium">100% Canadian Sourced</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/10"
                  >
                    <Thermometer className="w-5 h-5 flex-shrink-0" style={{ color: '#80EF80' }} />
                    <span className="text-gray-300 font-medium">Temperature Controlled</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/10"
                  >
                    <Award className="w-5 h-5 flex-shrink-0" style={{ color: '#80EF80' }} />
                    <span className="text-gray-300 font-medium">Hand-Selected Quality</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/10"
                  >
                    <Calendar className="w-5 h-5 flex-shrink-0" style={{ color: '#80EF80' }} />
                    <span className="text-gray-300 font-medium">Fresh Weekly Delivery</span>
                  </motion.div>
                </div>

                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#60D060] to-[#80EF80] text-white text-lg font-bold rounded-2xl hover:from-[#50C050] hover:to-[#60D060] transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    Explore Our Premium Bait
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl border-4"
                  style={{ borderColor: '#80EF8050' }}
                >
                  <img
                    src="/Night Crawlers Fridge.jpg"
                    alt="Premium Canadian Night Crawlers"
                    className="w-full object-cover"
                    style={{ height: '512px', width: '236px', margin: '0 auto' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Premium Badge */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-4 py-2 rounded-full font-bold shadow-xl border-2 border-white text-sm"
                  >
                    Premium Quality
                  </motion.div>

                  {/* Canadian Flag Indicator */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full font-bold shadow-xl text-sm flex items-center space-x-2"
                    style={{ border: '2px solid #80EF80' }}
                  >
                    <span className="text-red-600">🍁</span>
                    <span style={{ color: '#80EF80' }}>100% Canadian</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 30% 50%, #80EF80 0%, transparent 60%), radial-gradient(circle at 70% 70%, #60D060 0%, transparent 60%)` }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#60D060] via-[#80EF80] to-[#A0F5A0] bg-clip-text text-transparent" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust National Bait Inc for their fishing and gardening needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#60D060] to-[#80EF80] text-white font-semibold rounded-2xl hover:from-[#50C050] hover:to-[#60D060] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 hover:bg-white/10 transition-all duration-300"
                style={{ borderColor: '#80EF80' }}
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