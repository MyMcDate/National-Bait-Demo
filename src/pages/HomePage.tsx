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
    <div className="min-h-screen" style={{ backgroundColor: '#0B1418' }}>
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #000000 0%, #0A1C22 50%, #000000 100%)' }}></div>
        <div className="absolute inset-0 opacity-15" style={{ background: `radial-gradient(circle at 20% 50%, #80EF80 0%, transparent 50%), radial-gradient(circle at 80% 80%, #8CBD9B 0%, transparent 50%)` }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
                <span className="bg-gradient-to-r from-[#8CBD9B] via-[#80EF80] to-[#92E68E] bg-clip-text text-transparent">
                  National Bait Inc
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#8CBD9B' }}>
                Premium Night Crawlers & Fishing Bait
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Built on a history of quality, innovation, and first-class service for almost 6 decades. 
                Your trusted source for premium night crawlers and fishing bait.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 text-black font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #8CBD9B 0%, #80EF80 100%)' }}
                >
                  Shop Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm font-semibold rounded-2xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white/10"
                  style={{ color: '#80EF80', borderColor: '#8CBD9B' }}
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2" style={{ borderColor: '#8CBD9B40' }}>
                <img
                  src="https://images.pexels.com/photos/8918084/pexels-photo-8918084.jpeg?_gl=1*b1o6nj*_ga*MzUxMzgwOTM5LjE3NTU3NTUxNTM.*_ga_8JE65Q40S6*czE3NTU3NTUxNTIkbzEkZzEkdDE3NTU3NTU2NTUkajU5JGwwJGgw"
                  alt="Fishing with Premium Bait"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
                  <p className="font-semibold" style={{ color: '#92E68E' }}>Hand-selected for fishing success</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose National Bait Inc Section */}
      <section className="py-20" style={{ backgroundColor: '#0B1418' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'KAMERIK 105, sans-serif', color: '#92E68E' }}>
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
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 border border-white/10"
                style={{ '--hover-border': '#92E68E' } as any}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#92E68E50'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#92E68E' }}>
                  <feature.icon className="w-8 h-8 text-black" />
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
            className="rounded-3xl p-8 md:p-12 mb-16 border"
            style={{ 
              background: 'linear-gradient(135deg, #0A1C22 0%, #000000 100%)',
              borderColor: '#8CBD9B40'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'KAMERIK 105, sans-serif', color: '#8CBD9B' }}>
                  Lumbricus Terrestris
                </h3>
                <h4 className="text-2xl font-semibold mb-6" style={{ color: '#92E68E' }}>
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
                    <Fish className="w-5 h-5" style={{ color: '#8CBD9B' }} />
                    <span className="text-gray-300">Introduced by European settlers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5" style={{ color: '#92E68E' }} />
                    <span className="text-gray-300">Exported worldwide since 1950s</span>
                  </div>
                </div>

                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 text-black font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #8CBD9B 0%, #92E68E 100%)' }}
                >
                  View Product Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2" style={{ borderColor: '#8CBD9B40' }}>
                  <img
                    src="/baitpost.jpg"
                    alt="Premium Night Crawlers and Earthworms"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Canadian Nightcrawlers Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl p-8 md:p-12 mb-16 shadow-xl border"
            style={{ 
              background: 'linear-gradient(135deg, #000000 0%, #0A1C22 100%)',
              borderColor: '#92E68E40'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-[#8CBD9B] via-[#80EF80] to-[#92E68E] bg-clip-text text-transparent" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
                  Canadian Nightcrawlers
                </h3>
                <h4 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#8CBD9B' }}>
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
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 shadow-md text-center transition-all duration-300 border border-white/10"
                        style={{ '--hover-bg': '#8CBD9B15' } as any}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(140, 189, 155, 0.1)'
                          e.currentTarget.style.borderColor = '#8CBD9B50'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                        }}
                      >
                        <Package className="w-6 h-6 mx-auto mb-2" style={{ color: '#92E68E' }} />
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
                    <Globe className="w-5 h-5 flex-shrink-0" style={{ color: '#8CBD9B' }} />
                    <span className="text-gray-300 font-medium">100% Canadian Sourced</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/10"
                  >
                    <Thermometer className="w-5 h-5 flex-shrink-0" style={{ color: '#92E68E' }} />
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
                    <Calendar className="w-5 h-5 flex-shrink-0" style={{ color: '#8CBD9B' }} />
                    <span className="text-gray-300 font-medium">Fresh Weekly Delivery</span>
                  </motion.div>
                </div>

                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 text-black text-lg font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #8CBD9B 0%, #80EF80 50%, #92E68E 100%)' }}
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
                  style={{ borderColor: '#92E68E30' }}
                >
                  <img
                    src="/Night Crawlers Fridge.jpg"
                    alt="Premium Canadian Night Crawlers"
                    className="w-full object-cover"
                    style={{ height: '512px', width: '236px', margin: '0 auto' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Premium Badge */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold shadow-xl border-2 border-white text-sm text-black"
                    style={{ background: 'linear-gradient(135deg, #92E68E 0%, #80EF80 100%)' }}
                  >
                    Premium Quality
                  </motion.div>

                  {/* Canadian Flag Indicator */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full font-bold shadow-xl text-sm flex items-center space-x-2 border-2"
                    style={{ borderColor: '#8CBD9B' }}
                  >
                    <span className="text-red-600">🍁</span>
                    <span style={{ color: '#8CBD9B' }}>100% Canadian</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #0A1C22 100%)' }}>
        <div className="absolute inset-0 opacity-15" style={{ background: `radial-gradient(circle at 30% 50%, #80EF80 0%, transparent 60%), radial-gradient(circle at 70% 70%, #8CBD9B 0%, transparent 60%)` }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#8CBD9B] via-[#92E68E] to-[#80EF80] bg-clip-text text-transparent" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust National Bait Inc for their fishing and gardening needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-black font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #8CBD9B 0%, #80EF80 100%)' }}
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 hover:bg-white/10 transition-all duration-300"
                style={{ borderColor: '#8CBD9B' }}
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