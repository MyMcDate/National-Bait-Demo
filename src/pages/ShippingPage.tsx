
import React from 'react'
import { motion } from 'framer-motion'
import {Truck, Globe, Package, DollarSign, CheckCircle, MapPin, Clock, Flag} from 'lucide-react'

const ShippingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shipping & Delivery
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Professional logistics solutions for night crawlers worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* USA Shipping Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-emerald-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">USA Shipping</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Delivery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Truck className="w-10 h-10 text-emerald-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Delivery</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                We deliver in refrigerated air ride tractor-trailers right to your door, 
                ensuring your night crawlers arrive in perfect condition.
              </p>
            </motion.div>

            {/* Customs Clearance */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Customs Clearance</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                All shipments to the USA are customs cleared. We handle all paperwork 
                to ensure your ordering experience is pleasant and hassle-free!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Canadian Shipping Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Flag className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Canadian Shipping</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-8">
              <Truck className="w-10 h-10 text-red-600 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900">Refrigerated Transport</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Delivery Method</h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Orders throughout Canada are shipped by refrigerated tractor trailers, 
                  ensuring optimal temperature control and product quality during transport.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <Package className="w-6 h-6 text-red-600 mr-3" />
                    <h5 className="text-lg font-semibold text-gray-900">Professional Palletization</h5>
                  </div>
                  <p className="text-gray-700">
                    Each order is professionally palletized on skids for secure transport 
                    and easy handling upon delivery.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Pallet Configurations</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-bold text-red-700">Standard Skid</h5>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        63 Boxes
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">Ideal for smaller orders and retail distribution</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-bold text-red-700">Medium Skid</h5>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        72 Boxes
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">Perfect for medium-volume commercial orders</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-bold text-red-700">Large Skid</h5>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        180 Boxes
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">Optimal for high-volume wholesale distribution</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3" />
                <h5 className="text-lg font-semibold text-gray-900">Quality Assurance</h5>
              </div>
              <p className="text-gray-700">
                Our refrigerated transport system maintains consistent temperatures throughout 
                the journey, ensuring your night crawlers arrive in peak condition ready for 
                immediate use or retail distribution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overseas Shipments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Overseas Shipments</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Globe className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">European Union</h3>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  National Bait Inc. ships to most countries in the European Union. 
                  Our experienced distributors supply almost all of Western Europe, 
                  ensuring reliable delivery and local support.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Coverage Area</h4>
                    <p className="text-blue-700 text-sm">Comprehensive distribution network across Western Europe</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Local Support</h4>
                    <p className="text-blue-700 text-sm">Experienced distributors provide regional expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-4xl font-bold text-gray-900">Pricing Information</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bulk Night Crawlers</h3>
                <p className="text-gray-700">Quoted per 1,000 night crawlers</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-packaged</h3>
                <p className="text-gray-700">Quoted per case</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-yellow-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Important Pricing Note</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Night crawler prices are subject to change due to weather conditions. 
                For current pricing information, please contact us directly.
              </p>
              <p className="text-gray-700">
                If you require an immediate quote, please fill out our order form as we look forward to your business!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Place Your Order?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Contact us today for current pricing and shipping quotes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Get Quote
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-700 transition-colors"
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
