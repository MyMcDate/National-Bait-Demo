import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Modal from './Modal';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <footer className="text-white" style={{ background: 'linear-gradient(180deg, #0A1C22 0%, #000000 100%)' }}>
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
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'KAMERIK 105, sans-serif' }}>National Bait Inc.</h3>
                  <p className="text-sm" style={{ color: '#92E68E' }}>Premium Night Crawlers</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Your trusted source for premium quality night crawlers and fishing bait. 
                We've been serving anglers with the finest live bait for over 60 years.
              </p>
              
              <div className="flex items-center space-x-2 mb-6" style={{ color: '#80EF80' }}>
                <Clock size={16} />
                <span className="text-sm">Fresh bait delivered weekly</span>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300" style={{ '--hover-bg': '#80EF8020' } as any}>
                  <Facebook size={20} style={{ color: '#8CBD9B' }} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300">
                  <Instagram size={20} style={{ color: '#80EF80' }} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300">
                  <Twitter size={20} style={{ color: '#92E68E' }} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300">
                  <Linkedin size={20} style={{ color: '#8CBD9B' }} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#92E68E' }}>Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full mr-2 transition-all" style={{ backgroundColor: '#8CBD9B' }}></span>
                    <span className="group-hover:translate-x-1 transition-transform">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full mr-2 transition-all" style={{ backgroundColor: '#80EF80' }}></span>
                    <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full mr-2 transition-all" style={{ backgroundColor: '#92E68E' }}></span>
                    <span className="group-hover:translate-x-1 transition-transform">Products</span>
                  </Link>
                </li>
                <li>
                  <Link to="/packaging" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full mr-2 transition-all" style={{ backgroundColor: '#8CBD9B' }}></span>
                    <span className="group-hover:translate-x-1 transition-transform">Packaging</span>
                  </Link>
                </li>
                <li>
                  <Link to="/certifications" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full mr-2 transition-all" style={{ backgroundColor: '#80EF80' }}></span>
                    <span className="group-hover:translate-x-1 transition-transform">Certifications</span>
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full mr-2 transition-all" style={{ backgroundColor: '#92E68E' }}></span>
                    <span className="group-hover:translate-x-1 transition-transform">Shipping</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full mr-2 transition-all" style={{ backgroundColor: '#8CBD9B' }}></span>
                    <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: '#92E68E' }}>Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-all" style={{ backgroundColor: '#8CBD9B20' }}>
                    <Phone size={16} style={{ color: '#8CBD9B' }} />
                  </div>
                  <a href="tel:+19052780180" className="text-gray-400 hover:text-white transition-colors">
                    (905) 278-0180
                  </a>
                </li>
                <li className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-all" style={{ backgroundColor: '#80EF8020' }}>
                    <Mail size={16} style={{ color: '#80EF80' }} />
                  </div>
                  <a href="mailto:info@nationalbait.com" className="text-gray-400 hover:text-white transition-colors">
                    info@nationalbait.com
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 mt-0.5" style={{ backgroundColor: '#92E68E20' }}>
                    <MapPin size={16} style={{ color: '#92E68E' }} />
                  </div>
                  <span className="text-gray-400 text-sm leading-relaxed">
                    946 Lakeshore Road East<br />
                    Mississauga, Ontario<br />
                    L5E 1E4, CANADA
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t mt-8 pt-8" style={{ borderColor: '#8CBD9B30' }}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2025 National Bait Inc. All rights reserved. Built with excellence since 1965.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button 
                  onClick={() => setShowPrivacy(true)}
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                  style={{ '--hover-color': '#80EF80' } as any}
                >
                  Privacy Policy
                </button>
                <span className="text-gray-700">•</span>
                <button 
                  onClick={() => setShowTerms(true)}
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                  style={{ '--hover-color': '#80EF80' } as any}
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #8CBD9B 0%, #80EF80 50%, #92E68E 100%)' }}></div>
      </footer>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        <div className="prose prose-gray max-w-none text-gray-800 space-y-6">
          <div className="text-sm text-gray-600 mb-6">
            <strong>Last updated:</strong> January 1, 2025
          </div>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Information We Collect</h3>
            <p className="mb-4 leading-relaxed">
              At National Bait Inc., we collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Create an account or place an order</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Contact us for customer support</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              This may include your name, email address, phone number, shipping address, payment information, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">2. How We Use Your Information</h3>
            <p className="mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Process and fulfill your orders</li>
              <li>Provide customer service and support</li>
              <li>Send you product updates and promotional materials</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Information Sharing</h3>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">4. Data Security</h3>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">5. Your Rights</h3>
            <p className="leading-relaxed">
              You have the right to access, update, or delete your personal information. You may also opt out of receiving marketing communications from us at any time by contacting us or using the unsubscribe link in our emails.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">6. Contact Us</h3>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-2">
              <p><strong>National Bait Inc.</strong></p>
              <p>946 Lakeshore Road East, Mississauga</p>
              <p>Ontario L5E 1E4, CANADA</p>
              <p>Email: info@nationalbait.com</p>
              <p>Phone: (905) 278-0180</p>
            </div>
          </section>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
      >
        <div className="prose prose-gray max-w-none text-gray-800 space-y-6">
          <div className="text-sm text-gray-600 mb-6">
            <strong>Last updated:</strong> January 1, 2025
          </div>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">1. Acceptance of Terms</h3>
            <p className="leading-relaxed">
              By accessing and using National Bait Inc.'s services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">2. Product Quality & Guarantee</h3>
            <p className="mb-4 leading-relaxed">
              We guarantee the freshness and quality of our night crawlers and fishing bait products. Our commitment includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Fresh bait delivered daily to our retail partners</li>
              <li>Proper storage and handling to maintain product quality</li>
              <li>Replacement of any products that don't meet our quality standards</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">3. Orders & Payment</h3>
            <p className="mb-4 leading-relaxed">
              By placing an order with us, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide accurate and complete ordering information</li>
              <li>Pay all charges at the prices in effect when you place your order</li>
              <li>Accept delivery during our standard delivery hours</li>
              <li>Inspect products upon delivery and report any issues within 24 hours</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">4. Shipping & Delivery</h3>
            <p className="leading-relaxed">
              We make every effort to deliver your order on time and in perfect condition. Due to the live nature of our products, special handling and timing requirements apply. Delivery schedules may be affected by weather conditions or other factors beyond our control.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">5. Returns & Refunds</h3>
            <p className="leading-relaxed">
              Due to the perishable nature of our live bait products, returns are generally not accepted unless the product is defective or damaged upon delivery. In such cases, please contact us within 24 hours of delivery for a replacement or refund.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">6. Limitation of Liability</h3>
            <p className="leading-relaxed">
              National Bait Inc. shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the amount paid for the specific product or service.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">7. Modifications</h3>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any modifications.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">8. Contact Information</h3>
            <p className="leading-relaxed">
              For questions regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-2">
              <p><strong>National Bait Inc.</strong></p>
              <p>946 Lakeshore Road East, Mississauga</p>
              <p>Ontario L5E 1E4, CANADA</p>
              <p>Email: info@nationalbait.com</p>
              <p>Phone: (905) 278-0180</p>
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default Footer;