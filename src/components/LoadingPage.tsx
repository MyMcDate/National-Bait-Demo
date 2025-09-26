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
    // Here you would typically set the language in a global state or context
    // For now, we'll just proceed with the loading
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
        className="fixed inset-0 bg-gradient-to-br from-teal-800 via-teal-600 to-emerald-700 flex items-center justify-center z-50 overflow-hidden"
      >
        {/* Top Left Product Image - Blum1.png */}
        <motion.div
          initial={{ x: -100, y: -100, opacity: 0, scale: 0.6 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 1.2 }}
          className="absolute top-8 left-8 z-10 hidden xl:block"
        >
          <div className="relative">
            {/* Glowing backdrop */}
            <div className="absolute inset-0 bg-teal-200/20 rounded-2xl blur-xl scale-110 animate-pulse"></div>
            
            {/* Product container */}
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
              className="relative w-90 h-60 rounded-2xl overflow-hidden border-3 border-white/40 shadow-xl bg-white/10 backdrop-blur-sm"
            >
              <img 
                src="Blum1.png" 
                alt="Premium Bait Product - Blum1" 
                className="w-full h-full object-cover filter brightness-110 contrast-105"
              />
              
              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-800/20 via-transparent to-white/5"></div>
              
              {/* Shine effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 6, repeat: Infinity, repeatDelay: 5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
              ></motion.div>

              {/* Product label */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                  <p className="text-white font-semibold text-xs">Premium Collection</p>
                </div>
              </div>
            </motion.div>

            {/* Floating ring */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute inset-0 border-2 border-teal-300/30 rounded-2xl scale-110"
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
            {/* Glowing backdrop */}
            <div className="absolute inset-0 bg-emerald-200/20 rounded-2xl blur-xl scale-110 animate-pulse"></div>
            
            {/* Product container */}
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
              className="relative w-60 h-64 rounded-2xl overflow-hidden border-3 border-white/40 shadow-xl bg-white/10 backdrop-blur-sm"
            >
              <img 
                src="Blum2.png" 
                alt="Premium Bait Product - Blum2" 
                className="w-full h-full object-cover filter brightness-110 contrast-105"
              />
              
              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/20 via-transparent to-white/5"></div>
              
              {/* Shine effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 4 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12"
              ></motion.div>

              {/* Product label */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                  <p className="text-white font-semibold text-xs">Fresh & Quality</p>
                </div>
              </div>
            </motion.div>

            {/* Floating ring */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 border-2 border-emerald-300/30 rounded-2xl scale-110"
            ></motion.div>
          </div>
        </motion.div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
        </div>

        {/* Left Side Product Image - iPhone Style */}
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
        >
          <div className="relative">
            {/* Glowing backdrop for product image */}
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-2xl scale-110"></div>
            <div className="absolute inset-0 bg-teal-400/20 rounded-2xl blur-xl scale-105 animate-pulse"></div>
            
            {/* Product image container with iPhone-style border */}
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
              className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl bg-black/20 backdrop-blur-sm"
            >
              <img 
                src="Bait_post2.jpg" 
                alt="Premium Bait Products Collection - Left" 
                className="w-full h-full object-cover filter brightness-105 contrast-105"
              />
              
              {/* iPhone-style overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"></div>
              
              {/* Subtle shine effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 4 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
              ></motion.div>

              {/* Product label overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white font-bold text-sm">Premium Bait</p>
                  <p className="text-teal-200 text-xs">Fresh & Available</p>
                </div>
              </div>
            </motion.div>

            {/* Floating rings around product image */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 border-2 border-teal-300/30 rounded-2xl scale-110"
            ></motion.div>
          </div>
        </motion.div>

        {/* Right Side Product Image - iPhone Style */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.0 }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
        >
          <div className="relative">
            {/* Glowing backdrop for product image */}
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-2xl scale-110"></div>
            <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-xl scale-105 animate-pulse"></div>
            
            {/* Product image container with iPhone-style border */}
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
              className="relative w-100 h-[26rem] rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl bg-black/20 backdrop-blur-sm"
            >
              <img 
                src="baitproducts.jpg" 
                alt="Premium Bait Products in Fridge - iPhone Style" 
                className="w-full h-full object-cover filter brightness-105 contrast-105"
              />
              
              {/* iPhone-style overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10"></div>
              
              {/* Subtle shine effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
              ></motion.div>

              {/* Product label overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <p className="text-white font-bold text-sm">Premium Bait</p>
                  <p className="text-teal-200 text-xs">Fresh & Ready</p>
                </div>
              </div>
            </motion.div>

            {/* Floating rings around product image */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 border-2 border-teal-300/30 rounded-2xl scale-110"
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
            {/* Eagle Logo - Perfectly Centered Above Title */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: -100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                {/* Glowing backdrop */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-150"></div>
                <div className="absolute inset-0 bg-emerald-400/30 rounded-full blur-2xl scale-125 animate-pulse"></div>
                
                {/* Eagle image with effects */}
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
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl"
                >
                  <img 
                    src="eagle-logo.jpg" 
                    alt="Majestic Eagle Logo" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent"></div>
                </motion.div>

                {/* Radiating rings */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 border-2 border-white/30 rounded-full scale-125"
                ></motion.div>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute inset-0 border-2 border-emerald-300/30 rounded-full scale-150"
                ></motion.div>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black text-white tracking-wider transform -rotate-2 mb-8">
              
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-100 mb-4">
              NATIONAL BAIT INC.
            </h2>
            <p className="text-lg text-white/80 italic font-medium mb-12">
              Select Your Region / Wählen Sie Ihre Region
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('en')}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-teal-300/40 hover:border-teal-200 transition-all duration-300 min-w-[280px]"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-teal-200 group-hover:text-teal-100" />
                <span className="text-3xl font-bold text-white group-hover:text-teal-100">U.S.A.</span>
              </div>
              <p className="text-white/80 font-medium">English</p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('de')}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-teal-300/40 hover:border-teal-200 transition-all duration-300 min-w-[280px]"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-teal-200 group-hover:text-teal-100" />
                <span className="text-3xl font-bold text-white group-hover:text-teal-100">EUROPE</span>
              </div>
              <p className="text-white/80 font-medium">Deutsch</p>
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
      className="fixed inset-0 bg-gradient-to-br from-teal-700 via-teal-500 to-emerald-600 flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
      </div>


      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        {/* Eagle Logo positioned above National Bait Inc */}
        <motion.div
          initial={{ scale: 0, opacity: 0, y: -50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Multiple glowing backdrops for dramatic effect */}
            <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl scale-200 animate-pulse"></div>
            <div className="absolute inset-0 bg-emerald-400/40 rounded-full blur-2xl scale-150"></div>
            <div className="absolute inset-0 bg-teal-300/30 rounded-full blur-xl scale-125"></div>
            
            {/* Main eagle image with enhanced styling */}
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
              className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl"
            >
              <img 
                src="eagle-logo.jpg" 
                alt="Majestic Eagle - National Bait Logo" 
                className="w-full h-full object-cover filter brightness-110 contrast-110"
              />
              {/* Artistic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 via-transparent to-emerald-400/10"></div>
              
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
              className="absolute inset-0 border-3 border-white/40 rounded-full scale-125"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute inset-0 border-2 border-emerald-300/40 rounded-full scale-150"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute inset-0 border-2 border-teal-200/30 rounded-full scale-175"
            ></motion.div>
          </div>
        </motion.div>

        {/* Main Logo Section - National Bait Inc Centered */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="mb-8"
        >
          {/* National Bait Inc Title */}
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
                className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20"
              >
                <Fish className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  NATIONAL BAIT INC.
                </h2>
                <p className="text-lg text-teal-100 italic font-medium">
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-teal-300/30">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                BAITMASTER™
              </h3>
              <div className="flex items-center justify-center gap-8 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-200" />
                  <span className="text-xl font-semibold">U.S.A.</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-200" />
                  <span className="text-xl font-semibold text-teal-100">EUROPE</span>
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
          <p className="text-xl md:text-2xl text-teal-100 font-bold">
            {selectedLanguage === 'de' ? "Was lockt Fische an?" : "What hooks fish?"}
          </p>
          <p className="text-lg text-white/80">
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
          <p className="text-lg text-white/80 font-medium">
            {loadingTexts[selectedLanguage][currentText]}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-96 max-w-full mx-auto">
          <div className="bg-white/20 rounded-full h-3 mb-4 overflow-hidden border border-teal-300/30">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full shadow-lg"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-white/80 text-sm font-semibold"
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
            className="absolute w-3 h-3 bg-white/50 rounded-full shadow-lg"
          />
        ))}
      </div>

      {/* Corner Decorations with Eagle Theme */}
      <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white/20 rounded-full"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-teal-300/30 rounded-full"></div>
      
      {/* Additional eagle-themed decorative elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-8 w-8 h-8 border-2 border-emerald-300/40 rounded-full"
      ></motion.div>
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-8 w-6 h-6 border-2 border-teal-200/40 rounded-full"
      ></motion.div>
    </motion.div>
  )
}

export default LoadingPage