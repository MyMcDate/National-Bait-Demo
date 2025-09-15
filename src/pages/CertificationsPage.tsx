
import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle, Globe, FileText, Scale, Truck, Leaf, Users, Eye } from 'lucide-react'

const CertificationsPage: React.FC = () => {
  const certifications = [
    {
      icon: Shield,
      title: "CFIA Compliance",
      description: "Canadian Food Inspection Agency certified for food safety and export standards",
      status: "Certified",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Globe,
      title: "International Export License",
      description: "Licensed for export to Europe, United States, and international markets",
      status: "Active",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Environmentally responsible harvesting and farming practices certification",
      status: "Verified",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Truck,
      title: "Transport Certification",
      description: "Certified for safe transport of live bait across provincial and international borders",
      status: "Licensed",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Eye,
      title: "AODA Compliance",
      description: "Accessibility for Ontarians with Disabilities Act - ensuring inclusive business practices",
      status: "Certified",
      color: "from-purple-500 to-indigo-600"
    }
  ]

  const regulations = [
    {
      title: "Federal Regulations",
      items: [
        "Fisheries Act compliance for bait fish regulations",
        "Canadian Food Inspection Agency (CFIA) standards",
        "Transport Canada regulations for live cargo",
        "Environment and Climate Change Canada guidelines"
      ]
    },
    {
      title: "Provincial Compliance",
      items: [
        "Provincial fishing and bait regulations across Canada",
        "Wildlife protection and conservation standards",
        "Business licensing and operational permits",
        "Health and safety workplace regulations",
        "Accessibility for Ontarians with Disabilities Act (AODA)"
      ]
    },
    {
      title: "International Standards",
      items: [
        "USDA compliance for U.S. exports",
        "European Union import/export regulations",
        "CITES compliance for species protection",
        "International shipping and customs requirements"
      ]
    }
  ]

  const qualityStandards = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure consistent product excellence"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete traceability with detailed records from harvest to delivery"
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "Full adherence to all applicable laws and regulations in every jurisdiction"
    },
    {
      icon: Shield,
      title: "Safety Standards",
      description: "Comprehensive safety protocols protecting both product integrity and worker safety"
    },
    {
      icon: Users,
      title: "Accessibility Standards",
      description: "AODA compliant practices ensuring equal access and inclusive customer service"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/9858904/pexels-photo-9858904.jpeg?_gl=1*a8lnw8*_ga*MzUxMzgwOTM5LjE3NTU3NTUxNTM.*_ga_8JE65Q40S6*czE3NTU3NjA0NjkkbzIkZzEkdDE3NTU3NjE1OTgkajYwJGwwJGgw')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Certifications &
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"> Compliance</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Maintaining the highest standards of quality, safety, accessibility, and regulatory compliance 
              for nearly six decades of trusted service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
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
              Our
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized certifications and licenses that ensure quality, safety, accessibility, and legal compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {cert.status}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AODA Spotlight Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">AODA</span>
              <span className="text-gray-900"> Accessibility Commitment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              National Bait Inc. is committed to providing accessible services and ensuring equal opportunities for all customers
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AODA Compliance</h3>
                    <p className="text-purple-600 font-medium">Accessibility for Ontarians with Disabilities Act</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  We are proud to maintain compliance with the Accessibility for Ontarians with Disabilities Act (AODA), 
                  demonstrating our commitment to creating barrier-free environments and inclusive customer experiences.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Accessible customer service standards</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Information and communication accessibility</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Employment accessibility practices</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Design of public spaces consideration</span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-purple-50 rounded-2xl">
                  <h4 className="text-lg font-bold text-purple-800 mb-2">Official Documentation</h4>
                  <p className="text-purple-700 text-sm">
                    Our complete AODA compliance documentation and accessibility plan are available upon request. 
                    We continuously review and update our practices to ensure ongoing compliance.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?w=600"
                  alt="Inclusive workplace and accessibility"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Inclusive Excellence</h4>
                  <p className="text-gray-600 text-sm">
                    Creating accessible experiences for all customers while maintaining our commitment to premium quality products and services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Regulatory
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Compliance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive adherence to all applicable regulations and standards
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {regulations.map((regulation, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{regulation.title}</h3>
                
                <div className="space-y-4">
                  {regulation.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
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
              Quality
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Standards</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence extends beyond compliance to industry-leading standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                  <standard.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{standard.title}</h3>
                <p className="text-gray-600 leading-relaxed">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Legal
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"> Compliance Statement</span>
            </h2>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Scale className="w-16 h-16 text-emerald-300" />
              </div>
              
              <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                National Bait Co. operates in full compliance with all applicable federal, provincial, 
                and international regulations governing the harvest, processing, transport, and export 
                of live fishing bait. Our operations are regularly audited and inspected to ensure 
                continued adherence to the highest standards of quality, safety, accessibility, and environmental responsibility.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8 text-emerald-200">
                <div>
                  <h4 className="font-bold text-white mb-2">Regulatory Bodies</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Canadian Food Inspection Agency (CFIA)</li>
                    <li>• Fisheries and Oceans Canada (DFO)</li>
                    <li>• Environment and Climate Change Canada</li>
                    <li>• Provincial wildlife agencies</li>
                    <li>• Accessibility Standards Canada</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-white mb-2">International Compliance</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• USDA regulations for U.S. exports</li>
                    <li>• European Union import standards</li>
                    <li>• CITES species protection protocols</li>
                    <li>• International shipping regulations</li>
                    <li>• AODA accessibility standards</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-emerald-300 font-semibold text-lg mt-8">
                Trusted by regulators and customers worldwide since 1965 - now with enhanced accessibility commitment
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CertificationsPage
