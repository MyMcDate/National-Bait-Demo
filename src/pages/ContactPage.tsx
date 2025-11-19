import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, Building, Truck, Globe } from 'lucide-react'
import toast from 'react-hot-toast'
import emailjs from '@emailjs/browser'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    serviceId: 'service_ll6nmaq',
    templateId: 'template_cnwo2q7',
    publicKey: '7UXeB4j9BCU3dfaLf'
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        inquiry_type: formData.inquiryType,
        subject: formData.subject,
        message: formData.message,
        current_date: new Date().toLocaleDateString(),
        current_time: new Date().toLocaleTimeString()
      }

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )

      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      })
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      toast.error('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Building,
      title: "Company",
      details: ["National Bait Inc.", "Canada's Leading Bait Supplier"],
      color: "#92E68E"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Canada", "Serving North America & Europe"],
      color: "#80EF80"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM"],
      color: "#8CBD9B"
    },
    {
      icon: Truck,
      title: "Shipping",
      details: ["Year-Round Supply", "Worldwide Delivery Available"],
      color: "#92E68E"
    }
  ]

  const services = [
    {
      title: "Wholesale Orders",
      description: "Bulk orders for retailers and distributors with competitive pricing",
      icon: Globe
    },
    {
      title: "Custom Packaging",
      description: "Tailored packaging solutions for your specific business needs",
      icon: Building
    },
    {
      title: "Export Services",
      description: "International shipping to Europe, United States, and beyond",
      icon: Truck
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
              <span className="text-white">Get In </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] via-[#80EF80] to-[#92E68E] bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to experience premium quality night crawlers? Contact National Bait Inc. 
              for wholesale inquiries, custom orders, or general information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              <span className="text-white">Contact </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] to-[#80EF80] bg-clip-text text-transparent">Information</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multiple ways to reach us for all your night crawler and fishing bait needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `${info.color}50`}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: info.color }}>
                  <info.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #0A1C22 0%, #101B24 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border" style={{ borderColor: '#8CBD9B40' }}>
                <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:border-transparent transition-colors disabled:opacity-50 placeholder-gray-500"
                        style={{ '--tw-ring-color': '#80EF80' } as any}
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:border-transparent transition-colors disabled:opacity-50 placeholder-gray-500"
                        style={{ '--tw-ring-color': '#80EF80' } as any}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:border-transparent transition-colors disabled:opacity-50 placeholder-gray-500"
                        style={{ '--tw-ring-color': '#80EF80' } as any}
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:border-transparent transition-colors disabled:opacity-50 placeholder-gray-500"
                        style={{ '--tw-ring-color': '#80EF80' } as any}
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:border-transparent transition-colors disabled:opacity-50"
                      style={{ '--tw-ring-color': '#80EF80' } as any}
                    >
                      <option value="general" className="bg-gray-800">General Inquiry</option>
                      <option value="wholesale" className="bg-gray-800">Wholesale Orders</option>
                      <option value="export" className="bg-gray-800">Export Services</option>
                      <option value="custom" className="bg-gray-800">Custom Packaging</option>
                      <option value="pricing" className="bg-gray-800">Pricing Information</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:border-transparent transition-colors disabled:opacity-50 placeholder-gray-500"
                      style={{ '--tw-ring-color': '#80EF80' } as any}
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:ring-2 focus:border-transparent transition-colors resize-none disabled:opacity-50 placeholder-gray-500"
                      style={{ '--tw-ring-color': '#80EF80' } as any}
                      placeholder="Please provide details about your inquiry, including quantities, delivery requirements, or any specific questions..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-black py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, #8CBD9B 0%, #80EF80 100%)' }}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Services & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border" style={{ borderColor: '#92E68E40' }}>
                  <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
                  
                  <div className="space-y-6">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#92E68E' }}>
                          <service.icon className="w-6 h-6 text-black" />
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                          <p className="text-gray-400">{service.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl p-8 text-white" style={{ background: 'linear-gradient(135deg, #8CBD9B 0%, #80EF80 100%)' }}>
                  <h3 className="text-2xl font-bold mb-4 text-black">Why Choose National Bait?</h3>
                  
                  <div className="space-y-4 text-black">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>Nearly 60 years of industry experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>Billions of night crawlers sold worldwide</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>Year-round supply guarantee</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>Competitive wholesale pricing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span>Worldwide shipping capabilities</span>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-black/20 backdrop-blur-md rounded-2xl border border-black/30">
                    <h4 className="text-lg font-bold mb-2 text-black">Quick Response Guarantee</h4>
                    <p className="text-black">
                      We respond to all inquiries within 24 hours during business days. 
                      For urgent wholesale orders, contact us directly by phone.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage