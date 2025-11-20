import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {Fish, Waves, MapPin} from 'lucide-react'

interface LoadingPageProps {
  onLoadingComplete: () => void
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'de' | null>(null)
  const [showLanguageSelect, setShowLanguageSelect] = useState(true)

  const loadingTexts = {
    en: [
      "Loading premium night crawlers...",
      "Preparing your fishing experience...",
      "Canada's leading supplier of quality fishing bait...",
      "Ready to help you catch more fish!"
    ],
    de: [
      "Lade Premium-Nachtwürmer...",
      "Bereite dein Angelerlebnis vor...",
      "Kanadas führender Anbieter für hochwertigen Angelköder...",
      "Bereit, dir beim Fischfang zu helfen!"
    ]
  }

  const handleLanguageSelect = (lang: 'en' | 'de') => {
    setSelectedLanguage(lang)
    setShowLanguageSelect(false)
  }

  useEffect(() => {
    if (!selectedLanguage) return

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => onLoadingComplete(), 800)
          return 100
        }
        return prev + 1.5
      })
    }, 60)

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts[selectedLanguage].length)
    }, 1200)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [selectedLanguage, onLoadingComplete])

  if (showLanguageSelect) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #000000 0%, #0A1C22 100%)' }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at 30% 50%, #80EF80 0%, transparent 60%), radial-gradient(circle at 70% 70%, #8CBD9B 0%, transparent 60%)` }}></div>

        {/* Top Left Product Image - Blum1.png */}
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0, scale: 0.6 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 1.2 }}
          className="absolute top-8 left-8 z-10 hidden xl:block"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl blur-xl scale-110 animate-pulse" style={{ backgroundColor: '#8CBD9B20' }}></div>
            
            <motion.div
              animate={{ 
                y: [0, -6, 0],
                rotate: [0, -2, 2, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-60 h-60 rounded-2xl overflow-hidden border-3 shadow-xl bg-white/5 backdrop-blur-sm"
              style={{ borderColor: '#8CBD9B40' }}
            >
              <img 
                src="Blum1.png" 
                alt="Premium Bait Product - Blum1" 
                className="w-full h-full object-cover filter brightness-110 contrast-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5"></div>
              
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 6, repeat: Infinity, repeatDelay: 5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
              ></motion.div>

              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                  <p className="text-white font-semibold text-xs">Premium Collection</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute inset-0 border-2 rounded-2xl scale-110"
              style={{ borderColor: '#8CBD9B30' }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Top Center Product Image - 100-box.jpg */}
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 0.6 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 1.3 }}
          className="absolute top-8 left-[58%] transform -translate-x-1/2 z-10 hidden xl:block"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl blur-xl scale-110 animate-pulse" style={{ backgroundColor: '#80EF8020' }}></div>
            
            <motion.div
              animate={{ 
                y: [0, -6, 0],
                rotate: [0, -1, 1, 0]
              }}
              transition={{ 
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-60 h-60 rounded-2xl overflow-hidden border-3 shadow-xl bg-white/5 backdrop-blur-sm"
              style={{ borderColor: '#80EF8040' }}
            >
              <img 
                src="100-box.jpg" 
                alt="Premium Bait Box Packaging - 100 Count" 
                className="w-full h-full object-cover filter brightness-110 contrast-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5"></div>
              
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 5.5, repeat: Infinity, repeatDelay: 4.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12"
              ></motion.div>

              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                  <p className="text-white font-semibold text-xs">Professional Packaging</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.18, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 6.5, repeat: Infinity }}
              className="absolute inset-0 border-2 rounded-2xl scale-110"
              style={{ borderColor: '#80EF8030' }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Top Right Product Image - Blum2.png */}
        <motion.div
          initial={{ x: 100, y: -100, opacity: 0, scale: 0.6 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 1.4 }}
          className="absolute top-8 right-8 z-10 hidden xl:block"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl blur-xl scale-110 animate-pulse" style={{ backgroundColor: '#92E68E20' }}></div>
            
            <motion.div
              animate={{ 
                y: [0, -7, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-60 h-64 rounded-2xl overflow-hidden border-3 shadow-xl bg-white/5 backdrop-blur-sm"
              style={{ borderColor: '#92E68E40' }}
            >
              <img 
                src="Blum2.png" 
                alt="Premium Bait Product - Blum2" 
                className="w-full h-full object-cover filter brightness-110 contrast-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5"></div>
              
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 4 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12"
              ></motion.div>

              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                  <p className="text-white font-semibold text-xs">Fresh & Quality</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 border-2 rounded-2xl scale-110"
              style={{ borderColor: '#92E68E30' }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Left Side Product Image */}
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl blur-2xl scale-110" style={{ backgroundColor: '#8CBD9B20' }}></div>
            <div className="absolute inset-0 rounded-2xl blur-xl scale-105 animate-pulse" style={{ backgroundColor: '#80EF8020' }}></div>
            
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, -1, 1, 0]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 shadow-2xl bg-black/20 backdrop-blur-sm"
              style={{ borderColor: '#8CBD9B30' }}
            >
              <img 
                src="Bait_post2.jpg" 
                alt="Premium Bait Products Collection" 
                className="w-full h-full object-cover filter brightness-105 contrast-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"></div>
              
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 4 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
              ></motion.div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white font-bold text-sm">Premium Bait</p>
                  <p className="text-xs" style={{ color: '#92E68E' }}>Fresh & Available</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 border-2 rounded-2xl scale-110"
              style={{ borderColor: '#8CBD9B30' }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Right Side Product Image */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.0 }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl blur-2xl scale-110" style={{ backgroundColor: '#92E68E20' }}></div>
            <div className="absolute inset-0 rounded-2xl blur-xl scale-105 animate-pulse" style={{ backgroundColor: '#80EF8020' }}></div>
            
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-96 h-[26rem] rounded-2xl overflow-hidden border-4 shadow-2xl bg-black/20 backdrop-blur-sm"
              style={{ borderColor: '#92E68E30' }}
            >
              <img 
                src="baitproducts.jpg" 
                alt="Premium Bait Products in Fridge" 
                className="w-full h-full object-cover filter brightness-105 contrast-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"></div>
              
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
              ></motion.div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white font-bold text-sm">Premium Bait</p>
                  <p className="text-xs" style={{ color: '#80EF80' }}>Fresh & Ready</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 border-2 rounded-2xl scale-110"
              style={{ borderColor: '#92E68E30' }}
            ></motion.div>
          </div>
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="mb-12"
          >
            {/* NB Logo - BIGGER & CENTERED */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: -100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                {/* Glowing backdrop */}
                <div className="absolute inset-0 rounded-full blur-3xl scale-150" style={{ backgroundColor: '#8CBD9B40' }}></div>
                <div className="absolute inset-0 rounded-full blur-2xl scale-125 animate-pulse" style={{ backgroundColor: '#80EF8030' }}></div>
                
                {/* NB LOGO - BIGGER */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 shadow-2xl"
                  style={{ borderColor: '#8CBD9B50', backgroundColor: '#0B1418' }}
                >
                  <img 
                    src="PNG-04.png" 
                    alt="National Bait Inc. NB Logo" 
                    className="w-full h-full object-contain p-6"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </motion.div>

                {/* Radiating rings */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 border-2 rounded-full scale-125"
                  style={{ borderColor: '#8CBD9B40' }}
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0 border-2 rounded-full scale-150"
                  style={{ borderColor: '#80EF8030' }}
                ></motion.div>
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
              NATIONAL BAIT INC.
            </h2>
            <p className="text-lg text-gray-400 italic font-medium mb-12">
              Select Your Region / Wählen Sie Ihre Region
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('en')}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 hover:border-opacity-100 transition-all duration-300 min-w-[280px]"
              style={{ borderColor: '#8CBD9B40' }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <MapPin className="w-8 h-8" style={{ color: '#80EF80' }} />
                <span className="text-3xl font-bold text-white">U.S.A.</span>
              </div>
              <p className="text-gray-400 font-medium">English</p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('de')}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 hover:border-opacity-100 transition-all duration-300 min-w-[280px]"
              style={{ borderColor: '#92E68E40' }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <MapPin className="w-8 h-8" style={{ color: '#92E68E' }} />
                <span className="text-3xl font-bold text-white">EUROPE</span>
              </div>
              <p className="text-gray-400 font-medium">Deutsch</p>
            </motion.button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #000000 0%, #0A1C22 100%)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at 30% 50%, #80EF80 0%, transparent 60%), radial-gradient(circle at 70% 70%, #8CBD9B 0%, transparent 60%)` }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        {/* NB LOGO - BIGGER positioned above National Bait Inc */}
        <motion.div
          initial={{ scale: 0, opacity: 0, y: -50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Multiple glowing backdrops */}
            <div className="absolute inset-0 rounded-full blur-3xl scale-200 animate-pulse" style={{ backgroundColor: '#8CBD9B30' }}></div>
            <div className="absolute inset-0 rounded-full blur-2xl scale-150" style={{ backgroundColor: '#80EF8040' }}></div>
            <div className="absolute inset-0 rounded-full blur-xl scale-125" style={{ backgroundColor: '#92E68E30' }}></div>
            
            {/* NB LOGO - EVEN BIGGER FOR LOADING */}
            <motion.div
              animate={{ 
                scale: [1, 1.08, 1],
                rotate: [0, 2, -2, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 shadow-2xl"
              style={{ borderColor: '#80EF8050', backgroundColor: '#0B1418' }}
            >
              <img 
                src="PNG-04.png" 
                alt="National Bait Inc. - NB Logo" 
                className="w-full h-full object-contain p-6 filter brightness-110 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"></div>
              
              {/* Shine effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
              ></motion.div>
            </motion.div>

            {/* Dynamic radiating rings */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 border-3 rounded-full scale-125"
              style={{ borderColor: '#8CBD9B40' }}
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute inset-0 border-2 rounded-full scale-150"
              style={{ borderColor: '#80EF8040' }}
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute inset-0 border-2 rounded-full scale-175"
              style={{ borderColor: '#92E68E30' }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Main Logo Section */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl border-2"
                style={{ backgroundColor: '#8CBD9B', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <Fish className="w-8 h-8 text-black" />
              </motion.div>
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>
                  NATIONAL BAIT INC.
                </h2>
                <p className="text-lg italic font-medium" style={{ color: '#92E68E' }}>
                  {selectedLanguage === 'de' 
                    ? "Kanadas führender Anbieter für hochwertigen Angelköder"
                    : "Canada's Leading Supplier of Quality Fishing Bait"
                  }
                </p>
              </div>
            </div>
          </motion.div>

          {/* Product Showcase */}
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mb-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border" style={{ borderColor: '#8CBD9B30' }}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                BAITMASTER™
              </h3>
              <div className="flex items-center justify-center gap-8 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" style={{ color: '#80EF80' }} />
                  <span className="text-xl font-semibold">U.S.A.</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" style={{ color: '#92E68E' }} />
                  <span className="text-xl font-semibold">EUROPE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl font-bold" style={{ color: '#80EF80' }}>
            {selectedLanguage === 'de' ? "Was lockt Fische an?" : "What hooks fish?"}
          </p>
          <p className="text-lg text-gray-400">
            {selectedLanguage === 'de' 
              ? "Nichts wie ein saftiger kanadischer Riesenwurm von Baitmaster."
              : "Nothing like a juicy giant Canadian Nightcrawler from Baitmaster."
            }
          </p>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="h-8 mb-8"
        >
          <p className="text-lg text-gray-400 font-medium">
            {loadingTexts[selectedLanguage][currentText]}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-96 max-w-full mx-auto">
          <div className="bg-white/10 rounded-full h-3 mb-4 overflow-hidden border" style={{ borderColor: '#8CBD9B30' }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              className="h-full rounded-full shadow-lg"
              style={{ background: 'linear-gradient(90deg, #8CBD9B 0%, #80EF80 50%, #92E68E 100%)' }}
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-gray-400 text-sm font-semibold"
          >
            {selectedLanguage === 'de' ? `Lädt... ${progress}%` : `Loading... ${progress}%`}
          </motion.p>
        </div>

        {/* Animated Elements */}
        <motion.div
          animate={{ 
            x: [-30, 30, -30],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Waves className="w-10 h-10 text-white/30" />
        </motion.div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
              opacity: 0
            }}
            animate={{ 
              y: -100,
              opacity: [0, 0.8, 0],
              rotate: [0, 360],
              scale: [0.3, 1.2, 0.3]
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear"
            }}
            className="absolute w-3 h-3 rounded-full shadow-lg"
            style={{ backgroundColor: i % 3 === 0 ? '#8CBD9B50' : i % 3 === 1 ? '#80EF8050' : '#92E68E50' }}
          />
        ))}
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 right-4 w-20 h-20 border-4 rounded-full" style={{ borderColor: 'rgba(255,255,255,0.1)' }}></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-4 rounded-full" style={{ borderColor: '#8CBD9B30' }}></div>
      
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-8 w-8 h-8 border-2 rounded-full"
        style={{ borderColor: '#80EF8040' }}
      ></motion.div>
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-8 w-6 h-6 border-2 rounded-full"
        style={{ borderColor: '#92E68E40' }}
      ></motion.div>
    </motion.div>
  )
}

export default LoadingPage