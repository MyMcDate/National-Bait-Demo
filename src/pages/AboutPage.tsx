import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Trophy, Snowflake, Building } from 'lucide-react'

const AboutPage: React.FC = () => {
  const timeline = [
    {
      year: "1965",
      title: "Company Founded",
      description: "National Bait Inc. established as Canada's premier fishing bait supplier",
      icon: Building
    },
    {
      year: "1950s",
      title: "Export Beginnings",
      description: "Started exporting night crawlers as angling became a flourishing leisure activity",
      icon: MapPin
    },
    {
      year: "1980s-2000s",
      title: "Rapid Expansion",
      description: "Outgrew facilities four times due to accelerated business growth",
      icon: Trophy
    },
    {
      year: "Present",
      title: "Industry Leader",
      description: "Sold billions of night crawlers - more than any other bait company on the continent",
      icon: Users
    }
  ]

  const values = [
    {
      icon: Trophy,
      title: "Quality Excellence",
      description: "Uncompromising commitment to providing the highest quality night crawlers",
      color: "#92E68E"
    },
    {
      icon: Snowflake,
      title: "Innovation",
      description: "Unique cooling facilities ensuring year-round supply and optimal worm health",
      color: "#80EF80"
    },
    {
      icon: Users,
      title: "First-Class Service",
      description: "Dedicated to exceptional customer service and reliable supply chains",
      color: "#8CBD9B"
    },
    {
      icon: MapPin,
      title: "Global Reach",
      description: "Exporting millions of night crawlers annually to Europe and United States",
      color: "#92E68E"
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
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] via-[#80EF80] to-[#92E68E] bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Built on a history of quality, innovation, and first-class service - 
              the key to our success for almost six decades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24" style={{ backgroundColor: '#0B1418' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
                <span className="text-white">Canada's Leading </span>
                <span style={{ color: '#92E68E' }}>Bait Supplier</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Since our inception in 1965, National Bait Inc. has been Canada's leading supplier 
                  of quality freshwater fishing bait. We have built our reputation on an unwavering 
                  commitment to excellence, innovation, and customer service.
                </p>
                
                <p>
                  Our rapid growth has been remarkable - we have outgrown our facilities at an 
                  accelerated rate and changed locations four times to keep up with the expansion 
                  of our business. This growth is a testament to our dedication to quality and 
                  customer satisfaction.
                </p>
                
                <p>
                  To date, we have sold billions of night crawlers, more than any other bait 
                  company on this continent. Our large Canadian dew worms are one of the best 
                  selling baits around, with unparalleled quality and competitive pricing.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2" style={{ borderColor: '#8CBD9B40' }}>
                <img
                  src="https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg"
                  alt="National Bait Facilities"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#92E68E' }}>
                      <Calendar className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Since 1965</h3>
                      <p className="text-gray-300">Nearly 60 years of excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] to-[#80EF80] bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - discover the milestones that shaped National Bait Inc.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full hidden lg:block" style={{ background: 'linear-gradient(180deg, #8CBD9B 0%, #80EF80 50%, #92E68E 100%)' }}></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 flex items-center justify-center z-10 hidden lg:flex" style={{ backgroundColor: '#0B1418', borderColor: '#92E68E' }}>
                    <item.icon className="w-8 h-8" style={{ color: '#80EF80' }} />
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-[#8CBD9B]/50">
                      <div className="flex items-center space-x-4 mb-4 lg:hidden">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#92E68E' }}>
                          <item.icon className="w-6 h-6 text-black" />
                        </div>
                        <div className="text-2xl font-bold" style={{ color: '#80EF80' }}>{item.year}</div>
                      </div>
                      
                      <div className="hidden lg:block text-2xl font-bold mb-4" style={{ color: '#92E68E' }}>{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              <span className="bg-gradient-to-r from-[#8CBD9B] via-[#80EF80] to-[#92E68E] bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that have guided our success for nearly six decades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = `${value.color}50`}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: value.color }}>
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #000000 0%, #0A1C22 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              <span className="text-white">Our Competitive </span>
              <span className="bg-gradient-to-r from-[#8CBD9B] to-[#92E68E] bg-clip-text text-transparent">Advantage</span>
            </h2>
            
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border max-w-4xl mx-auto" style={{ borderColor: '#8CBD9B40' }}>
              <div className="flex items-center justify-center mb-6">
                <Snowflake className="w-16 h-16" style={{ color: '#80EF80' }} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Year-Round Supply Guarantee
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our unique cooling facilities keep our dew worms strong and healthy while enabling 
                us to maintain year-round supply and service. While other Canadian wholesalers may 
                run out or find it infeasible to keep worms during the long, cold Canadian winters, 
                we at National Bait Inc. maintain an extensive stock.
              </p>
              
              <p className="text-xl font-semibold" style={{ color: '#92E68E' }}>
                This enables us to have constant supply right to your door year-round.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage