import React from 'react'
import { motion } from 'framer-motion'
import {Truck, Package, DollarSign, CheckCircle, MapPin, Clock, Star, Shield} from 'lucide-react'

const ShippingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#0B1418' }}>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #0A1C22 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 30% 50%, #80EF80 0%, transparent 60%), radial-gradient(circle at 70% 70%, #8CBD9B 0%, transparent 60%)` }}></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
              <Shield className="w-5 h-5 mr-2" style={{ color: '#80EF80' }} />
              <span className="text-sm font-medium" style={{ color: '#92E68E' }}>Premium Quality Guarantee</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              <span className="text-white">Professional Shipping & </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] via-[#80EF80] to-[#92E68E] bg-clip-text text-transparent">Delivery</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Industry-leading logistics solutions for premium night crawlers across North America and Europe
            </p>
          </motion.div>
        </div>
      </section>

      {/* US and Canadian Shipping Section */}
      <section className="py-16" style={{ backgroundColor: '#0B1418' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <MapPin className="w-6 h-6 mr-3" style={{ color: '#80EF80' }} />
              <h2 className="text-3xl font-bold text-white">
                US and Canadian Distribution
              </h2>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Baitmaster® Night Crawlers Available in Premium Biodegradable Packaging
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* GIANT/LARGE - BEST SELLER */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 shadow-xl border-2 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #8CBD9B15 0%, #80EF8015 100%)', borderColor: '#92E68E50' }}
            >
              <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl text-black" style={{ background: 'linear-gradient(135deg, #92E68E 0%, #80EF80 100%)' }}>
                <div className="flex items-center font-bold text-sm">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  BEST SELLER
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="rounded-full p-3 mr-4 shadow-lg" style={{ backgroundColor: '#92E68E' }}>
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  GIANT/LARGE Night Crawlers
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="rounded-xl p-6 border-2 shadow-sm" style={{ background: '#80EF8015', borderColor: '#80EF8050' }}>
                  <div className="text-lg text-gray-300 font-medium mb-3">
                    12 NC to a pack - 60 packs (720 NC) to a case
                  </div>
                  <div className="text-sm font-semibold rounded-lg px-4 py-2 border text-black" style={{ backgroundColor: '#8CBD9B', borderColor: '#8CBD9B' }}>
                    Available in: Standard • Green Colour • Garlic-Scented
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/10">
                    <div className="text-lg text-gray-300 font-medium">
                      18 NC to a pack - 48 packs (864 NC) to a case
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/10">
                    <div className="text-lg text-gray-300 font-medium">
                      24 NC to a pack - 48 packs (1,152 NC) to a case
                    </div>
                  </div>
                </div>

                <div className="border-t-2 pt-6" style={{ borderColor: '#8CBD9B30' }}>
                  <div className="flex items-center mb-4">
                    <Package className="w-5 h-5 mr-2" style={{ color: '#80EF80' }} />
                    <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#92E68E' }}>Premium Packaging Options</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/10">
                      <div className="text-lg text-gray-300 font-medium">
                        48 NC to a pack - 24 packs (1,152 NC) to a case
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/10">
                      <div className="text-lg text-gray-300 font-medium">
                        100 NC to a pack - 12 packs (1,200 NC) to a case
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* MINI / SMALL / DILLIES */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border hover:shadow-xl transition-all duration-300"
              style={{ borderColor: '#80EF8040' }}
            >
              <div className="flex items-center mb-6">
                <div className="rounded-full p-3 mr-4 shadow-lg" style={{ backgroundColor: '#80EF80' }}>
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  MINI / SMALL / "DILLIES"
                </h3>
              </div>
              <div className="grid gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/10">
                  <div className="text-lg text-gray-300 font-medium">
                    15 NC to a pack - 60 packs (900 NC) to a case
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/10">
                  <div className="text-lg text-gray-300 font-medium">
                    18 NC to a pack - 60 packs (1,080 NC) to a case
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/10">
                  <div className="text-lg text-gray-300 font-medium">
                    24 NC to a pack - 48 packs (1,152 NC) to a case
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Delivery Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl p-8 text-white shadow-xl"
            style={{ background: 'linear-gradient(135deg, #8CBD9B 0%, #80EF80 100%)' }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center">
                <div className="bg-black/20 rounded-full p-4 mr-4">
                  <Truck className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-black">Refrigerated Delivery</h4>
                  <p className="text-black/80">Premium air ride tractor-trailers deliver directly to your location</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-black/20 rounded-full p-4 mr-4">
                  <CheckCircle className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-black">Customs Cleared</h4>
                  <p className="text-black/80">All documentation handled for seamless cross-border delivery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* European Shipping Section */}
      <section className="py-16" style={{ background: 'linear-gradient(180deg, #0A1C22 0%, #101B24 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <MapPin className="w-6 h-6 mr-3" style={{ color: '#92E68E' }} />
              <h2 className="text-3xl font-bold text-white">European Distribution Network</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border max-w-4xl mx-auto"
            style={{ borderColor: '#8CBD9B40' }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-white">Comprehensive European Coverage</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                National Bait Inc. maintains partnerships in Europe. 
                Our experienced distribution network has been serving Europe with 
                reliability and expertise since the 1965s.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                  <div className="rounded-full p-3 w-12 h-12 mx-auto mb-4" style={{ backgroundColor: '#80EF80' }}>
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: '#92E68E' }}>Extensive Coverage</h4>
                  <p className="text-gray-400">Comprehensive distribution network across all Europe</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                  <div className="rounded-full p-3 w-12 h-12 mx-auto mb-4" style={{ backgroundColor: '#8CBD9B' }}>
                    <Shield className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: '#92E68E' }}>Trusted Partners</h4>
                  <p className="text-gray-400">Decades of experience providing regional expertise and local support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16" style={{ backgroundColor: '#0B1418' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <DollarSign className="w-6 h-6 mr-3" style={{ color: '#80EF80' }} />
              <h2 className="text-3xl font-bold text-white">Professional Pricing</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto border"
            style={{ borderColor: '#8CBD9B40' }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="rounded-xl p-6 border" style={{ background: '#80EF8015', borderColor: '#80EF8050' }}>
                <div className="rounded-full p-3 w-12 h-12 mb-4" style={{ backgroundColor: '#80EF80' }}>
                  <Package className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Bulk Night Crawlers</h3>
                <p className="text-gray-400">Competitive pricing quoted per 1,000 night crawlers for volume orders</p>
              </div>
              <div className="rounded-xl p-6 border" style={{ background: '#8CBD9B15', borderColor: '#8CBD9B50' }}>
                <div className="rounded-full p-3 w-12 h-12 mb-4" style={{ backgroundColor: '#8CBD9B' }}>
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Pre-packaged Cases</h3>
                <p className="text-gray-400">Convenient case pricing for retail-ready biodegradable packaging</p>
              </div>
            </div>

            <div className="border-l-4 p-6 rounded-r-xl" style={{ background: '#92E68E15', borderColor: '#92E68E' }}>
              <div className="flex items-center mb-4">
                <div className="rounded-full p-2 mr-3" style={{ backgroundColor: '#92E68E' }}>
                  <Clock className="w-5 h-5 text-black" />
                </div>
                <h4 className="font-bold text-white text-lg">Dynamic Pricing Notice</h4>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Night crawler pricing fluctuates based on seasonal weather conditions and availability. 
                Our experienced team monitors market conditions to provide competitive, fair pricing.
              </p>
              <p className="text-gray-300 font-medium">
                For current pricing and immediate quotes, please contact our sales team. 
                We're committed to building long-term partnerships with our valued customers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #8CBD9B 0%, #80EF80 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-black">
              Ready to Partner With Industry Leaders?
            </h2>
            <p className="mb-8 text-lg max-w-2xl mx-auto text-black/80">
              Join thousands of satisfied customers who trust National Bait Inc. 
              for premium night crawlers and professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all duration-300 shadow-lg"
              >
                Request Quote
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-black text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ShippingPage