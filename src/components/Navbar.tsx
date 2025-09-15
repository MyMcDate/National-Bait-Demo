
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://static.lumi.new/d0/d03bedfe1addedcb8b07b86326af17ae.webp" 
              alt="Eagle Logo" 
              className="h-14 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800">Eagle Bait Co.</span>
              <span className="text-sm text-green-600 font-medium">Premium Night Crawlers</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contact
            </Link>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-300">
              <a href="tel:+1234567890" className="flex items-center text-green-600 hover:text-green-700">
                <Phone size={16} className="mr-1" />
                <span className="text-sm font-medium">(123) 456-7890</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+1234567890" className="flex items-center text-green-600 hover:text-green-700 mb-2">
                  <Phone size={16} className="mr-2" />
                  <span>(123) 456-7890</span>
                </a>
                <a href="mailto:info@eaglebait.com" className="flex items-center text-green-600 hover:text-green-700">
                  <Mail size={16} className="mr-2" />
                  <span>info@eaglebait.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
