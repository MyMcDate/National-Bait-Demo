
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
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Snowflake,
      title: "Innovation",
      description: "Unique cooling facilities ensuring year-round supply and optimal worm health",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "First-Class Service",
      description: "Dedicated to exceptional customer service and reliable supply chains",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: MapPin,
      title: "Global Reach",
      description: "Exporting millions of night crawlers annually to Europe and United States",
      color: "from-purple-500 to-pink-600"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"> Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Built on a history of quality, innovation, and first-class service - 
              the key to our success for almost four decades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Canada's Leading 
                <span className="text-emerald-600"> Bait Supplier</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?_gl=1*ytyf4j*_ga*MzUxMzgwOTM5LjE3NTU3NTUxNTM.*_ga_8JE65Q40S6*czE3NTU3NTUxNTIkbzEkZzEkdDE3NTU3NTcxOTQkajMxJGwwJGgw"
                  alt="National Bait Facilities"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Since 1965</h3>
                      <p className="text-gray-600">Nearly 60 years of excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - discover the milestones that shaped National Bait Inc.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-600 rounded-full hidden lg:block"></div>

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
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-emerald-400 flex items-center justify-center z-10 hidden lg:flex">
                    <item.icon className="w-8 h-8 text-emerald-600" />
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
                      <div className="flex items-center space-x-4 mb-4 lg:hidden">
                        <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-emerald-600">{item.year}</div>
                      </div>
                      
                      <div className="hidden lg:block text-2xl font-bold text-emerald-600 mb-4">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that have guided our success for nearly six decades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Competitive
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"> Advantage</span>
            </h2>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Snowflake className="w-16 h-16 text-emerald-300" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Year-Round Supply Guarantee
              </h3>
              
              <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                Our unique cooling facilities keep our dew worms strong and healthy while enabling 
                us to maintain year-round supply and service. While other Canadian wholesalers may 
                run out or find it infeasible to keep worms during the long, cold Canadian winters, 
                we at National Bait Inc. maintain an extensive stock.
              </p>
              
              <p className="text-xl font-semibold text-emerald-300">
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
