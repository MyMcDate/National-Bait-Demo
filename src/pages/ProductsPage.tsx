import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Ruler, Palette, Globe, Award, Thermometer, Package, CheckCircle, Star, Leaf, Sprout, Recycle, Users } from 'lucide-react'

const ProductsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const nightCrawlerSpecs = [
    {
      icon: Ruler,
      title: "Size Range",
      value: "90mm - 300mm",
      description: "Length varies from 90 millimeters to 300 millimeters",
      color: "#92E68E"
    },
    {
      icon: Palette,
      title: "Coloration",
      value: "Light Pinkish-Brown",
      description: "Distinctive natural coloring that attracts fish",
      color: "#80EF80"
    },
    {
      icon: Globe,
      title: "Origin",
      value: "European Heritage",
      description: "Introduced to North America by European settlers",
      color: "#8CBD9B"
    },
    {
      icon: Award,
      title: "Quality Grade",
      value: "Premium A+",
      description: "Highest quality grade for freshwater fishing",
      color: "#92E68E"
    }
  ]

  const castingsSpecs = [
    {
      icon: Leaf,
      title: "Organic Content",
      value: "100% Natural",
      description: "Pure organic worm castings with no synthetic additives",
      color: "#8CBD9B"
    },
    {
      icon: Sprout,
      title: "Nutrient Rich",
      value: "NPK Enhanced",
      description: "High in nitrogen, phosphorus, and potassium",
      color: "#80EF80"
    },
    {
      icon: Recycle,
      title: "Eco-Friendly",
      value: "Sustainable",
      description: "Environmentally responsible production process",
      color: "#92E68E"
    },
    {
      icon: Package,
      title: "Packaging",
      value: "Various Sizes",
      description: "Available in retail and bulk commercial quantities",
      color: "#8CBD9B"
    }
  ]

  const nightCrawlerBenefits = [
    {
      title: "Proven Effectiveness",
      description: "Unquestionably the favoured fresh water bait by fishermen world-wide",
      icon: Star
    },
    {
      title: "Optimal Size Range",
      description: "90-300mm length provides versatility for various fish species",
      icon: Ruler
    },
    {
      title: "Natural Attraction",
      description: "Light pinkish-brown colour and natural scent attract fish effectively",
      icon: Palette
    },
    {
      title: "Global Recognition",
      description: "Exported worldwide since the 1965s as angling became popular",
      icon: Globe
    },
    {
      title: "Climate Controlled",
      description: "Kept strong and healthy through our unique cooling facilities",
      icon: Thermometer
    },
    {
      title: "Year-Round Availability",
      description: "Constant supply even during harsh Canadian winters",
      icon: Package
    }
  ]

  const castingsBenefits = [
    {
      title: "Multipurpose Fertilizer",
      description: "Perfect for gardens, lawns, houseplants, and commercial agriculture",
      icon: Leaf
    },
    {
      title: "Slow-Release Nutrients",
      description: "Provides steady plant food and root growth enhancement",
      icon: Sprout
    },
    {
      title: "Soil Structure Improvement",
      description: "Enhances soil aeration, water retention, and microbial activity",
      icon: Recycle
    },
    {
      title: "Safe & Natural",
      description: "Won't burn plants, safe for children and pets",
      icon: CheckCircle
    },
    {
      title: "Commercial Grade",
      description: "Trusted by big box stores, horticultural companies, and churches",
      icon: Users
    },
    {
      title: "Premium Quality",
      description: "Blum brand excellence with consistent results",
      icon: Award
    }
  ]

  const castingsFeatures = [
    "100% pure worm castings - no fillers",
    "Odorless and easy to apply",
    "Rich in beneficial microorganisms",
    "Improves plant growth and yield",
    "Available in multiple package sizes",
    "Trusted by professional growers"
  ]

  return (
    <div className="pt-20" style={{ backgroundColor: '#0B1418' }}>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #0A1C22 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 30% 50%, #80EF80 0%, transparent 60%), radial-gradient(circle at 70% 70%, #8CBD9B 0%, transparent 60%)` }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <motion.div
            className="flex items-center justify-start mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-md rounded-2xl p-4 border" style={{ borderColor: '#8CBD9B40' }}>
              <img 
                src="https://static.lumi.new/d0/d03bedfe1addedcb8b07b86326af17ae.webp" 
                alt="Eagle Bait Co. Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">National Bait</h1>
                <p className="text-sm" style={{ color: '#92E68E' }}>Premium Night Crawlers & Organic Products</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
                <span className="text-white">Premium </span>
                <span className="bg-gradient-to-r from-[#8CBD9B] via-[#80EF80] to-[#92E68E] bg-clip-text text-transparent">Products</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                From world-class fishing bait to premium organic fertilizers - 
                National Bait Inc. delivers quality products for anglers and gardeners alike.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border"
              style={{ borderColor: '#8CBD9B40' }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Night Crawlers</h2>
              <p className="text-gray-300 mb-6">Premium Lumbricus Terrestris - the world's favoured freshwater fishing bait</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-sm font-medium text-black" style={{ backgroundColor: '#92E68E' }}>90-300mm</span>
                <span className="px-4 py-2 rounded-full text-sm font-medium text-black" style={{ backgroundColor: '#80EF80' }}>Premium Grade</span>
                <span className="px-4 py-2 rounded-full text-sm font-medium text-black" style={{ backgroundColor: '#8CBD9B' }}>Year-Round</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border"
              style={{ borderColor: '#92E68E40' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Worm Castings</h2>
              <p className="text-gray-300 mb-6">Blum Premium Earth Worm Castings - nature's perfect organic fertilizer</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full text-sm font-medium text-black" style={{ backgroundColor: '#8CBD9B' }}>100% Organic</span>
                <span className="px-4 py-2 rounded-full text-sm font-medium text-black" style={{ backgroundColor: '#80EF80' }}>Nutrient Rich</span>
                <span className="px-4 py-2 rounded-full text-sm font-medium text-black" style={{ backgroundColor: '#92E68E' }}>Commercial Grade</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Night Crawlers Section */}
      <section className="py-24" style={{ backgroundColor: '#0B1418' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              <span style={{ color: '#8CBD9B', fontStyle: 'italic' }}>Lumbricus Terrestris </span>
              <span className="bg-gradient-to-r from-[#80EF80] to-[#92E68E] bg-clip-text text-transparent">Night Crawlers</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Premium earthworms, also known as American night crawlers or Canadian dew worms
            </p>
          </motion.div>

          {/* Professional Bait Packaging Display */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border" style={{ borderColor: '#8CBD9B40' }}>
              <h3 className="text-3xl font-bold text-center text-white mb-8">Professional Bait Packaging</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/baitproducts.jpg"
                    alt="Professional Night Crawler Bait Packaging"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg border-2" style={{ borderColor: '#92E68E40' }}
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">Retail-Ready Packaging</h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Our night crawlers come in professional, consumer-friendly packaging designed for retail environments. 
                    Each container maintains optimal moisture and temperature conditions to keep your bait fresh and active.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" style={{ color: '#80EF80' }} />
                      <span className="text-gray-300">Moisture-controlled containers</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" style={{ color: '#92E68E' }} />
                      <span className="text-gray-300">Clear visibility for quality inspection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" style={{ color: '#8CBD9B' }} />
                      <span className="text-gray-300">Extended shelf life guarantee</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" style={{ color: '#80EF80' }} />
                      <span className="text-gray-300">Professional branding and labeling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {nightCrawlerSpecs.map((spec, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `${spec.color}50`}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: spec.color }}>
                  <spec.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{spec.title}</h3>
                <div className="text-2xl font-bold mb-3" style={{ color: spec.color }}>{spec.value}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{spec.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nightCrawlerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-[#8CBD9B]/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#92E68E' }}>
                  <benefit.icon className="w-6 h-6 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Worm Castings Section */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #0A1C22 0%, #101B24 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              <span style={{ color: '#8CBD9B' }}>Blum Premium </span>
              <span className="bg-gradient-to-r from-[#80EF80] to-[#92E68E] bg-clip-text text-transparent">Earth Worm Castings</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nature's perfect organic fertilizer - pure worm castings for superior plant growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-xl border-2 cursor-pointer hover:scale-105 transition-transform duration-300" 
                  style={{ borderColor: '#8CBD9B40' }}
                  onClick={() => setSelectedImage('/blumcasting1.jpg')}
                >
                  <img
                    src="/blumcasting1.jpg"
                    alt="Blum Premium Earth Worm Castings Product"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div 
                  className="relative rounded-2xl overflow-hidden shadow-xl border-2 cursor-pointer hover:scale-105 transition-transform duration-300" 
                  style={{ borderColor: '#92E68E40' }}
                  onClick={() => setSelectedImage('/blumbag.png')}
                >
                  <img
                    src="/blumbag.png"
                    alt="Blum Castings Application"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div 
                  className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl border-2 cursor-pointer hover:scale-105 transition-transform duration-300" 
                  style={{ borderColor: '#80EF8040' }}
                  onClick={() => setSelectedImage('/blumcasting2.jpg')}
                >
                  <img
                    src="/blumcasting2.jpg"
                    alt="Healthy plants with worm castings"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                The Ultimate Organic Fertilizer
              </h3>
              
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Blum Premium Earth Worm Castings are 100% pure, organic worm castings that provide 
                slow-release nutrients and beneficial microorganisms. Perfect for gardens, lawns, 
                houseplants, and commercial agriculture applications.
              </p>

              <div className="space-y-4 mb-8">
                {castingsFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#8CBD9B' }} />
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl p-6 border" style={{ backgroundColor: '#8CBD9B15', borderColor: '#8CBD9B50' }}>
                <h4 className="text-xl font-bold mb-3" style={{ color: '#92E68E' }}>Trusted by Professionals</h4>
                <p style={{ color: '#8CBD9B' }}>
                  Our premium worm castings are supplied to big box stores, horticultural companies, 
                  churches, and professional growers who demand consistent, high-quality results.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {castingsSpecs.map((spec, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `${spec.color}50`}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: spec.color }}>
                  <spec.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{spec.title}</h3>
                <div className="text-2xl font-bold mb-3" style={{ color: spec.color }}>{spec.value}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{spec.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {castingsBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-[#80EF80]/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#80EF80' }}>
                  <benefit.icon className="w-6 h-6 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #000000 0%, #0A1C22 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              <span className="text-white">Ready to Experience </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] via-[#80EF80] to-[#92E68E] bg-clip-text text-transparent">Premium Quality?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Whether you need premium night crawlers for fishing or organic worm castings for your garden, 
              National Bait Inc. delivers exceptional quality products trusted by professionals worldwide.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border"
                style={{ borderColor: '#8CBD9B40' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Night Crawlers</h3>
                <p className="text-gray-300 mb-6">
                  Premium fishing bait with year-round availability. Bulk orders and worldwide shipping available.
                </p>
                <div className="font-semibold text-lg" style={{ color: '#92E68E' }}>
                  Contact us for wholesale pricing
                </div>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border"
                style={{ borderColor: '#92E68E40' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Worm Castings</h3>
                <p className="text-gray-300 mb-6">
                  Premium organic fertilizer for commercial and retail applications. Multiple package sizes available.
                </p>
                <div className="font-semibold text-lg" style={{ color: '#80EF80' }}>
                  Perfect for big box stores & growers
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage}
                alt="Blum Product Detail"
                className="w-full h-auto rounded-3xl border-4 shadow-2xl"
                style={{ borderColor: '#80EF80' }}
              />
              <button
                className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-black font-bold"
                style={{ backgroundColor: '#80EF80' }}
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductsPage