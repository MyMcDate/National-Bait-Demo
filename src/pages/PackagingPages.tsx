import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {Leaf, Recycle, Package, CheckCircle, Sparkles, Box, Shield, Award, Star} from 'lucide-react'

const PackagingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const packagingImages = [
    {
      url: "/12GarlicPack.jpeg",
      title: "12 Baitmaster™ Garlic Giant Canadian Night Crawlers",
      count: "12 Count",
      description: "Biodegradable container with garlic scent",
      bestSeller: false
    },
    {
      url: "/12Pack.jpeg",
      title: "12 Baitmaster™ Giant Canadian Night Crawlers",
      count: "12 Count",
      description: "Premium biodegradable packaging",
      bestSeller: true
    },
    {
      url: "/18DielliePack.jpeg",
      title: "18 Baitmaster™ Small Night Crawlers (Dillies)",
      count: "18 Count",
      description: "Temperature-controlled refrigerated design",
      bestSeller: false
    },
    {
      url: "/18Pack.jpeg",
      title: "18 Baitmaster™ Giant Canadian Night Crawlers",
      count: "18 Count",
      description: "Eco-friendly biodegradable container",
      bestSeller: false
    },
    {
      url: "/24Pack.jpeg",
      title: "24 Baitmaster™ Giant Canadian Night Crawlers",
      count: "24 Count",
      description: "Premium bulk packaging for serious anglers",
      bestSeller: false
    },
    {
      url: "/48Pack.jpeg",
      title: "48 Baitmaster™ Giant Canadian Night Crawlers",
      count: "48 Count",
      description: "Professional-grade bulk packaging",
      bestSeller: false
    },
    {
      url: "/100Pack.jpeg",
      title: "100 Baitmaster™ Giant Canadian Night Crawlers",
      count: "100 Count",
      description: "Maximum value commercial packaging",
      bestSeller: false
    },
    {
      url: "/Greenpack.jpeg",
      title: "12 Baitmaster™ Green Giant Canadian Night Crawlers",
      count: "12 Count",
      description: "Eco-friendly green dye biodegradable container",
      bestSeller: false
    }
  ]

  const features = [
    {
      icon: Leaf,
      title: "100% Biodegradable",
      description: "Eco-friendly containers that decompose naturally",
      color: "#80EF80"
    },
    {
      icon: Recycle,
      title: "Sustainable Materials",
      description: "Made from renewable, earth-friendly resources",
      color: "#80EF80"
    },
    {
      icon: Shield,
      title: "Temperature Control",
      description: "Maintains optimal freshness at 36°F/+2°C",
      color: "#80EF80"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Product of Canada - highest standards",
      color: "#80EF80"
    }
  ]

  const specifications = [
    {
      label: "Material",
      value: "Biodegradable Fiber",
      icon: Package
    },
    {
      label: "Ventilation",
      value: "Optimized Airflow",
      icon: Box
    },
    {
      label: "Moisture",
      value: "Controlled Humidity",
      icon: Sparkles
    },
    {
      label: "Certification",
      value: "Eco-Certified",
      icon: CheckCircle
    }
  ]

  return (
    <div className="pt-20" style={{ backgroundColor: '#0B1418' }}>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20"
          style={{ background: `radial-gradient(circle, #80EF80 0%, transparent 70%)` }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{ background: `radial-gradient(circle, #80EF80 0%, transparent 70%)` }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <img 
                src="/PNG-04.png" 
                alt="National Bait Inc Logo" 
                className="h-52 md:h-60 w-auto mx-auto"
              />
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              <span className="text-white">Biodegradable</span>
              <br />
              <span style={{ color: '#80EF80' }}>Packaging Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Pioneering sustainable packaging solutions for premium nightcrawlers. 
              Our unique 1:1 biodegradable containers set the industry standard.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#80EF80]/50 transition-all duration-500">
                  <motion.div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: '#80EF80' }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-black" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-400 text-center leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              <span className="text-white">Our Packaging</span>
              <span style={{ color: '#80EF80' }}> Collection</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our complete range of biodegradable containers designed for optimal freshness and sustainability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packagingImages.map((pkg, index) => (
              <motion.div
                key={index}
                className="group relative cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(pkg.url)}
              >
                <div className={`relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border transition-all duration-500 ${
                  pkg.bestSeller 
                    ? 'border-4 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1' 
                    : 'border border-white/10 hover:border-[#80EF80]/50'
                }`}>
                  <div className={`${pkg.bestSeller ? 'bg-black rounded-3xl' : ''}`}>
                    <div className="aspect-square overflow-hidden rounded-3xl">
                      <img
                        src={pkg.url}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-2xl font-bold mb-2" style={{ color: '#80EF80' }}>
                          {pkg.count}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                        <p className="text-gray-300 text-sm">{pkg.description}</p>
                      </div>
                    </div>

                    {pkg.bestSeller ? (
                      <motion.div
                        className="absolute top-4 left-4 px-4 py-2 rounded-full flex items-center space-x-2 font-bold text-sm"
                        style={{ 
                          background: 'linear-gradient(135deg, #ff6ec4, #7873f5, #4facfe)',
                          backgroundSize: '200% 200%'
                        }}
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Star className="w-5 h-5 text-white fill-white" />
                        <span className="text-white">BEST SELLER</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#80EF80' }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <Sparkles className="w-6 h-6 text-black" />
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold text-white mb-1">{pkg.title}</h4>
                  <p className="text-gray-400 text-sm">{pkg.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              <span className="text-white">Technical</span>
              <span style={{ color: '#80EF80' }}> Specifications</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#80EF80]/50 transition-all duration-500 h-full">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#80EF80' }}>
                    <spec.icon className="w-7 h-7 text-black" />
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-2">{spec.label}</div>
                  <div className="text-2xl font-bold text-white">{spec.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Statement */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Recycle className="w-20 h-20 mx-auto mb-8" style={{ color: '#80EF80' }} />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              Committed to <span style={{ color: '#80EF80' }}>Sustainability</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our biodegradable containers represent a breakthrough in sustainable packaging. 
              Made from 100% renewable materials, they naturally decompose while maintaining 
              the highest standards of quality and freshness for our premium Canadian nightcrawlers.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold mb-2" style={{ color: '#80EF80' }}>100%</div>
                <div className="text-gray-300">Biodegradable</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold mb-2" style={{ color: '#80EF80' }}>36°F</div>
                <div className="text-gray-300">Optimal Storage</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold mb-2" style={{ color: '#80EF80' }}>1:1</div>
                <div className="text-gray-300">Perfect Ratio</div>
              </div>
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
                alt="Packaging detail"
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

export default PackagingPage