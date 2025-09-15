
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://static.lumi.new/d0/d03bedfe1addedcb8b07b86326af17ae.webp" 
                alt="Eagle Logo" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">National Bait Co.</h3>
                <p className="text-green-400 text-sm">Premium Night Crawlers</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted source for premium quality night crawlers and fishing bait. 
              We've been serving anglers with the finest live bait for over 20 years.
            </p>
            
            <div className="flex items-center space-x-2 text-green-400">
              <Clock size={16} />
              <span className="text-sm">Fresh bait delivered daily</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-green-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-green-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-green-400 transition-colors">
                  Fax (905) 278-0209
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-green-400" />
                <a href="mailto:info@eaglebait.com" className="text-gray-300 hover:text-green-400 transition-colors">
                  info@nationalbait.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-green-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  946 Lakeshore Road East Mississauga<br />
                  Ontario L5G 2R4, CANADA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 National Bait Co. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
