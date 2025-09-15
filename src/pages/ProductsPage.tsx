
import React from 'react'
import { motion } from 'framer-motion'
import { Ruler, Palette, Globe, Award, Thermometer, Package, CheckCircle, Star, Leaf, Sprout, Recycle, Users } from 'lucide-react'

const ProductsPage: React.FC = () => {
  const nightCrawlerSpecs = [
    {
      icon: Ruler,
      title: "Size Range",
      value: "90mm - 300mm",
      description: "Length varies from 90 millimeters to 300 millimeters",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Palette,
      title: "Coloration",
      value: "Light Pinkish-Brown",
      description: "Distinctive natural coloring that attracts fish",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Globe,
      title: "Origin",
      value: "European Heritage",
      description: "Introduced to North America by European settlers",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Award,
      title: "Quality Grade",
      value: "Premium A+",
      description: "Highest quality grade for freshwater fishing",
      color: "from-amber-500 to-orange-600"
    }
  ]

  const castingsSpecs = [
    {
      icon: Leaf,
      title: "Organic Content",
      value: "100% Natural",
      description: "Pure organic worm castings with no synthetic additives",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Sprout,
      title: "Nutrient Rich",
      value: "NPK Enhanced",
      description: "High in nitrogen, phosphorus, and potassium",
      color: "from-blue-500 to-teal-600"
    },
    {
      icon: Recycle,
      title: "Eco-Friendly",
      value: "Sustainable",
      description: "Environmentally responsible production process",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Package,
      title: "Packaging",
      value: "Various Sizes",
      description: "Available in retail and bulk commercial quantities",
      color: "from-amber-500 to-orange-600"
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
      description: "Exported worldwide since the 1950s as angling became popular",
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

  const nightCrawlerFeatures = [
    "Premium Lumbricus Terrestris species",
    "Hand-selected for size and quality",
    "Climate-controlled storage facilities",
    "Year-round availability guarantee",
    "Worldwide shipping capabilities",
    "Bulk and retail packaging options"
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3696170/pexels-photo-3696170.jpeg?_gl=1*1q6cflu*_ga*MzUxMzgwOTM5LjE3NTU3NTUxNTM.*_ga_8JE65Q40S6*czE3NTU4MDQ5NzkkbzMkZzEkdDE3NTU4MDUwMzYkajMkbDAkaDA.')] bg-cover bg-center opacity-15"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <motion.div
            className="flex items-center justify-start mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <img 
                src="https://static.lumi.new/d0/d03bedfe1addedcb8b07b86326af17ae.webp" 
                alt="Eagle Bait Co. Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">National Bait</h1>
                <p className="text-emerald-200 text-sm">Premium Night Crawlers & Organic Products</p>
              </div>
            </div>
          </motion.div>

          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Premium
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"> Products</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed max-w-4xl mx-auto">
                From world-class fishing bait to premium organic fertilizers - 
                Eagle Bait Co. delivers quality products for anglers and gardeners alike.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Night Crawlers</h2>
              <p className="text-emerald-100 mb-6">Premium Lumbricus Terrestris - the world's favoured freshwater fishing bait</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">90-300mm</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">Premium Grade</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">Year-Round</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Worm Castings</h2>
              <p className="text-emerald-100 mb-6">Blum Premium Earth Worm Castings - nature's perfect organic fertilizer</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">100% Organic</span>
                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">Nutrient Rich</span>
                <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">Commercial Grade</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Night Crawlers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-emerald-600 italic">Lumbricus Terrestris</span>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Night Crawlers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 mb-12">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Professional Bait Packaging</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/baitproducts.jpg"
                    alt="Professional Night Crawler Bait Packaging"
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Retail-Ready Packaging</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our night crawlers come in professional, consumer-friendly packaging designed for retail environments. 
                    Each container maintains optimal moisture and temperature conditions to keep your bait fresh and active.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Moisture-controlled containers</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Clear visibility for quality inspection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Extended shelf life guarantee</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Professional branding and labeling</span>
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
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${spec.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <spec.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.title}</h3>
                <div className="text-2xl font-bold text-emerald-600 mb-3">{spec.value}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{spec.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nightCrawlerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Worm Castings Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Blum Premium</span>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Earth Worm Castings</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://static.lumi.new/c4/c4fb8b20fa15ee98fe20046f570636a7.webp"
                    alt="Blum Premium Earth Worm Castings Product"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://static.lumi.new/f9/f9a8a5e8b9552c9c13d79667fafafd94.webp"
                    alt="Blum Castings Application"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?w=600"
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
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                The Ultimate Organic Fertilizer
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-green-100 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-green-800 mb-3">Trusted by Professionals</h4>
                <p className="text-green-700">
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
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${spec.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <spec.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.title}</h3>
                <div className="text-2xl font-bold text-green-600 mb-3">{spec.value}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{spec.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {castingsBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Experience
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"> Premium Quality?</span>
            </h2>
            
            <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto">
              Whether you need premium night crawlers for fishing or organic worm castings for your garden, 
              Eagle Bait Co. delivers exceptional quality products trusted by professionals worldwide.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Night Crawlers</h3>
                <p className="text-emerald-100 mb-6">
                  Premium fishing bait with year-round availability. Bulk orders and worldwide shipping available.
                </p>
                <div className="text-emerald-300 font-semibold text-lg">
                  Contact us for wholesale pricing
                </div>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Worm Castings</h3>
                <p className="text-emerald-100 mb-6">
                  Premium organic fertilizer for commercial and retail applications. Multiple package sizes available.
                </p>
                <div className="text-emerald-300 font-semibold text-lg">
                  Perfect for big box stores & growers
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
