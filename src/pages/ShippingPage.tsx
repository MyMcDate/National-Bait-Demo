import React from 'react'
import { motion } from 'framer-motion'
import {Truck, Package, DollarSign, CheckCircle, MapPin, Clock, Star, Shield} from 'lucide-react'

const ShippingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/16955622/pexels-photo-16955622.jpeg?_gl=1*u68lz5*_ga*MzUxMzgwOTM5LjE3NTU3NTUxNTM.*_ga_8JE65Q40S6*czE3NTg2ODg5ODckbzEzJGcxJHQxNzU4Njg5MDUzJGo1OSRsMCRoMA..)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-emerald-900/80"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
              <Shield className="w-5 h-5 mr-2 text-emerald-300" />
              <span className="text-sm font-medium text-emerald-100">Premium Quality Guarantee</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              Professional Shipping & Delivery
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Industry-leading logistics solutions for premium night crawlers across North America and Europe
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* US and Canadian Shipping Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-6">
              <MapPin className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                US and Canadian Distribution
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Baitmaster® Night Crawlers Available in Premium Biodegradable Packaging
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* GIANT/LARGE - BEST SELLER */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-xl border-2 border-amber-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-yellow-400 text-amber-900 px-6 py-2 rounded-bl-2xl">
                <div className="flex items-center font-bold text-sm">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  BEST SELLER
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="bg-amber-500 rounded-full p-3 mr-4 shadow-lg">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  GIANT/LARGE Night Crawlers
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl p-6 border-2 border-yellow-200 shadow-sm">
                  <div className="text-lg text-gray-800 font-medium mb-3">
                    12 NC to a pack - 60 packs (720 NC) to a case
                  </div>
                  <div className="text-sm text-emerald-700 font-semibold bg-emerald-50 rounded-lg px-4 py-2 border border-emerald-200">
                    Available in: Standard • Green Colour • Garlic-Scented
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="text-lg text-gray-800 font-medium">
                      18 NC to a pack - 48 packs (864 NC) to a case
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="text-lg text-gray-800 font-medium">
                      24 NC to a pack - 48 packs (1,152 NC) to a case
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-gray-200 pt-6">
                  <div className="flex items-center mb-4">
                    <Package className="w-5 h-5 text-gray-600 mr-2" />
                    <span className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Premium Packaging Options</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="text-lg text-gray-800 font-medium">
                        48 NC to a pack - 24 packs (1,152 NC) to a case
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="text-lg text-gray-800 font-medium">
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
              className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 rounded-full p-3 mr-4 shadow-lg">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  MINI / SMALL / "DILLIES"
                </h3>
              </div>
              <div className="grid gap-4">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="text-lg text-gray-800 font-medium">
                    15 NC to a pack - 60 packs (900 NC) to a case
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="text-lg text-gray-800 font-medium">
                    18 NC to a pack - 60 packs (1,080 NC) to a case
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="text-lg text-gray-800 font-medium">
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
            className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-4 mr-4">
                  <Truck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Refrigerated Delivery</h4>
                  <p className="text-blue-100">Premium air ride tractor-trailers deliver directly to your location</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-4 mr-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Customs Cleared</h4>
                  <p className="text-blue-100">All documentation handled for seamless cross-border delivery</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* European Shipping Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <MapPin className="w-6 h-6 mr-3" />
              <h2 className="text-3xl font-bold">European Distribution Network</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Comprehensive European Union Coverage</h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                National Bait Inc. maintains strategic partnerships across the European Union. 
                Our experienced distribution network has been serving Western Europe with 
                reliability and expertise since the 1950s.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="bg-blue-500 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-yellow-300 mb-2 text-lg">Extensive Coverage</h4>
                  <p className="text-blue-100">Comprehensive distribution network spanning all major European markets</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                  <div className="bg-emerald-500 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-yellow-300 mb-2 text-lg">Trusted Partners</h4>
                  <p className="text-blue-100">Decades of experience providing regional expertise and local support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-green-100 rounded-full px-6 py-3 mb-6">
              <DollarSign className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Professional Pricing</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-200"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="bg-blue-600 rounded-full p-3 w-12 h-12 mb-4">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Bulk Night Crawlers</h3>
                <p className="text-gray-600">Competitive pricing quoted per 1,000 night crawlers for volume orders</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                <div className="bg-emerald-600 rounded-full p-3 w-12 h-12 mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Pre-packaged Cases</h3>
                <p className="text-gray-600">Convenient case pricing for retail-ready biodegradable packaging</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
              <div className="flex items-center mb-4">
                <div className="bg-amber-400 rounded-full p-2 mr-3">
                  <Clock className="w-5 h-5 text-amber-900" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Dynamic Pricing Notice</h4>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Night crawler pricing fluctuates based on seasonal weather conditions and availability. 
                Our experienced team monitors market conditions to provide competitive, fair pricing.
              </p>
              <p className="text-gray-700 font-medium">
                For current pricing and immediate quotes, please contact our sales team. 
                We're committed to building long-term partnerships with our valued customers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Partner With Industry Leaders?
            </h2>
            <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust National Bait Inc. 
              for premium night crawlers and professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg"
              >
                Request Quote
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-700 transition-all duration-300"
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
