import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle, Globe, FileText, Scale, Truck, Leaf, Users, Eye } from 'lucide-react'

const CertificationsPage: React.FC = () => {
  const [showAODAPDF, setShowAODAPDF] = React.useState(false)

  const handleAODAClick = () => {
    setShowAODAPDF(true)
  }

  const certifications = [
    {
      icon: Shield,
      title: "CFIA Compliance",
      description: "Canadian Food Inspection Agency certified for food safety and export standards",
      status: "Certified",
      color: "#92E68E"
    },
    {
      icon: Globe,
      title: "International Export License",
      description: "Licensed for export to Europe, United States, and international markets",
      status: "Active",
      color: "#80EF80"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Environmentally responsible harvesting and farming practices certification",
      status: "Verified",
      color: "#8CBD9B"
    },
    {
      icon: Truck,
      title: "Transport Certification",
      description: "Certified for safe transport of live bait across provincial and international borders",
      status: "Licensed",
      color: "#92E68E"
    },
    {
      icon: Eye,
      title: "AODA Compliance",
      description: "Accessibility for Ontarians with Disabilities Act - ensuring inclusive business practices",
      status: "Certified",
      color: "#80EF80"
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
    <div className="pt-20" style={{ backgroundColor: '#0B1418' }}>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #0A1C22 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 30% 50%, #80EF80 0%, transparent 60%), radial-gradient(circle at 70% 70%, #8CBD9B 0%, transparent 60%)` }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              <span className="text-white">Certifications & </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] via-[#80EF80] to-[#92E68E] bg-clip-text text-transparent">Compliance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Maintaining the highest standards of quality, safety, accessibility, and regulatory compliance 
              for nearly six decades of trusted service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
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
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] to-[#80EF80] bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Recognized certifications and licenses that ensure quality, safety, accessibility, and legal compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className={`group bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10 ${
                  cert.title === "AODA Compliance" ? "cursor-pointer" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={cert.title === "AODA Compliance" ? handleAODAClick : undefined}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `${cert.color}50`}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: cert.color }}>
                  <cert.icon className="w-8 h-8 text-black" />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full text-black" style={{ backgroundColor: cert.color }}>
                    {cert.status}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
                
                {cert.title === "AODA Compliance" && (
                  <div className="mt-4 text-center">
                    <span className="text-xs font-semibold" style={{ color: cert.color }}>Click to view Multi-Year Accessibility Plan</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AODA Spotlight Section */}
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
              <span className="bg-gradient-to-r from-[#8CBD9B] to-[#80EF80] bg-clip-text text-transparent">AODA </span>
              <span className="text-white">Accessibility Commitment</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border" style={{ borderColor: '#8CBD9B40' }}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#80EF80' }}>
                    <Eye className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AODA Compliance</h3>
                    <p className="font-medium" style={{ color: '#92E68E' }}>Accessibility for Ontarians with Disabilities Act</p>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  We are proud to maintain compliance with the Accessibility for Ontarians with Disabilities Act (AODA), 
                  demonstrating our commitment to creating barrier-free environments and inclusive customer experiences.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8CBD9B' }} />
                    <span className="text-gray-300">Accessible customer service standards</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#80EF80' }} />
                    <span className="text-gray-300">Information and communication accessibility</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#92E68E' }} />
                    <span className="text-gray-300">Employment accessibility practices</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8CBD9B' }} />
                    <span className="text-gray-300">Design of public spaces consideration</span>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-2xl" style={{ backgroundColor: '#8CBD9B15' }}>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#92E68E' }}>Official Documentation</h4>
                  <p className="text-sm" style={{ color: '#8CBD9B' }}>
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2" style={{ borderColor: '#80EF8040' }}>
                <img
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?w=600"
                  alt="Inclusive workplace and accessibility"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h4 className="text-lg font-bold text-white mb-2">Inclusive Excellence</h4>
                  <p className="text-gray-300 text-sm">
                    Creating accessible experiences for all customers while maintaining our commitment to premium quality products and services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
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
              <span className="text-white">Regulatory </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] via-[#80EF80] to-[#92E68E] bg-clip-text text-transparent">Compliance</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive adherence to all applicable regulations and standards
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {regulations.map((regulation, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-[#8CBD9B]/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{regulation.title}</h3>
                
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
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: idx % 3 === 0 ? '#8CBD9B' : idx % 3 === 1 ? '#80EF80' : '#92E68E' }} />
                      <span className="text-gray-400 leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
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
              <span className="text-white">Quality </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] to-[#92E68E] bg-clip-text text-transparent">Standards</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300" style={{ backgroundColor: index % 3 === 0 ? '#8CBD9B' : index % 3 === 1 ? '#80EF80' : '#92E68E' }}>
                  <standard.icon className="w-10 h-10 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{standard.title}</h3>
                <p className="text-gray-400 leading-relaxed">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #000000 0%, #0A1C22 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              <span className="text-white">Legal </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] to-[#92E68E] bg-clip-text text-transparent">Compliance Statement</span>
            </h2>
            
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border max-w-4xl mx-auto" style={{ borderColor: '#8CBD9B40' }}>
              <div className="flex items-center justify-center mb-6">
                <Scale className="w-16 h-16" style={{ color: '#80EF80' }} />
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                National Bait Inc. operates in full compliance with all applicable federal, provincial, 
                and international regulations governing the harvest, processing, transport, and export 
                of live fishing bait. Our operations are regularly audited and inspected to ensure 
                continued adherence to the highest standards of quality, safety, accessibility, and environmental responsibility.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8 text-gray-400">
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
              
              <p className="font-semibold text-lg mt-8" style={{ color: '#92E68E' }}>
                Trusted by regulators and customers worldwide since 1965 - now with enhanced accessibility commitment
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AODA PDF Modal */}
      {showAODAPDF && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col mx-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
              <h3 className="text-2xl font-bold text-gray-900">
                Multi-Year Accessibility Plan (2025-2030)
              </h3>
              <button
                onClick={() => setShowAODAPDF(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="flex-1 p-6 overflow-hidden">
              <div className="h-full flex flex-col">
                <div className="text-center mb-6 flex-shrink-0">
                  <FileText className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Multi-Year Accessibility Plan (2025–2030)
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Prepared in accordance with the Accessibility for Ontarians with Disabilities Act, 2005 (AODA)
                  </p>
                </div>

                {/* PDF Viewer */}
                <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-50 flex-1 min-h-0">
                  <iframe
                    src="/documents/OfficialAODA.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="AODA Multi-Year Accessibility Plan (2025-2030)"
                  >
                    <div className="flex items-center justify-center h-full bg-gray-100">
                      <div className="text-center p-8">
                        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-4">PDF viewer not supported in your browser.</p>
                        <a 
                          href="/documents/OfficialAODA.pdf" 
                          download="National-Bait-AODA-Plan-2025-2030.pdf"
                          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                        >
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </iframe>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 flex-shrink-0">
                  <a 
                    href="/documents/OfficialAODA.pdf" 
                    download="National-Bait-AODA-Plan-2025-2030.pdf"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                  >
                    Download PDF
                  </a>
                  <button 
                    onClick={() => window.open('/documents/OfficialAODA.pdf', '_blank')}
                    className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                  >
                    Open in New Tab
                  </button>
                </div>
                
                <div className="mt-4 text-center flex-shrink-0">
                  <p className="text-gray-500 text-xs">
                    Having trouble viewing? Try opening in a new tab or downloading the PDF directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CertificationsPage