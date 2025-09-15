
import React from 'react'
import { motion } from 'framer-motion'
import {Truck, Plane, Globe, Package, DollarSign, CheckCircle, MapPin, Clock} from 'lucide-react'

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

          <div className="grid md:grid-cols-2 gap-8 mb-12">
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

          {/* Airfreight Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-8">
              <Plane className="w-10 h-10 text-blue-600 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900">Airfreight Shipments</h3>
            </div>
            
            <p className="text-gray-700 text-lg mb-8">
              For orders of less than one pallet, we ship by airfreight:
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bulk Night Crawlers */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Bulk Night Crawlers</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Package className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Minimum 20,000 night crawlers (large size)</span>
                  </div>
                  <div className="flex items-center">
                    <Package className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">Minimum 18,000 night crawlers (extra-large size)</span>
                  </div>
                  <div className="flex items-center">
                    <Package className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">One-pallet master container (EH)</span>
                  </div>
                </div>
              </div>

              {/* Pre-packaged */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Pre-packaged Options</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-emerald-700 mb-2">GIANTS</h5>
                    <p className="text-gray-600 text-sm">Packages of 12 - 576 packages (6,912 NC)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-emerald-700 mb-2">LARGE</h5>
                    <p className="text-gray-600 text-sm">Packages of 12 - 576 packages (6,912 NC)</p>
                    <p className="text-gray-600 text-sm">Packages of 18 - 432 packages (7,776 NC)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-emerald-700 mb-2">MINI / DILLIES</h5>
                    <p className="text-gray-600 text-sm">Packages of 15 - 576 packages (8,640 NC)</p>
                    <p className="text-gray-600 text-sm">Packages of 18 - 576 packages (10,368 NC)</p>
                    <p className="text-gray-600 text-sm">Packages of 24 - 432 packages (10,368 NC)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overseas Shipments */}
      <section className="py-16 bg-gray-50">
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
            className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">European Union</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  National Bait Inc. ships to most countries in the European Union. 
                  Our distributors supply almost all of Western Europe.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Canada Orders</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Orders from Canada are shipped F.O.B. or C.I.F. airfreight. 
                  The consignee must arrange customs clearance at the airport of arrival through a local broker.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
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
