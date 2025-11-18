import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Fish, Waves } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/packaging', label: 'Packaging' },
    { path: '/products', label: 'Products' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/contact', label: 'Contact' },
    { path: '/shipping', label: 'Shipping' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md shadow-lg border-b border-[#80EF80]/30' 
          : 'bg-transparent'
      }`}
      style={scrolled ? { backgroundColor: '#0E3B24dd' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group -ml-20">
            <img 
              src="/PNG-03.png" 
              alt="National Bait Inc Logo" 
              className="h-100 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-white hover:text-[#80EF80]'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{ backgroundColor: '#80EF8030' }}
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            style={{ backgroundColor: '#80EF8020' }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden backdrop-blur-md rounded-b-2xl border-t"
          style={{ backgroundColor: '#0E3B24dd', borderColor: '#80EF8030' }}
        >
          <div className="px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  location.pathname === item.path
                    ? 'text-white border-l-4'
                    : 'text-white hover:text-[#80EF80] hover:bg-white/10'
                }`}
                style={location.pathname === item.path ? { 
                  backgroundColor: '#80EF8020',
                  borderColor: '#80EF80'
                } : {}}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation