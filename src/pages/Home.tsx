
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, Shield, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://static.lumi.new/d0/d03bedfe1addedcb8b07b86326af17ae.webp" 
                  alt="Eagle Logo" 
                  className="h-16 w-auto object-contain"
                />
                <div>
                  <h1 className="text-5xl font-bold leading-tight">
                    Eagle Bait Co.
                  </h1>
                  <p className="text-xl text-green-200 font-medium">
                    Premium Night Crawlers
                  </p>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold leading-tight">
                The Finest Live Bait for 
                <span className="text-green-300"> Serious Anglers</span>
              </h2>
              
              <p className="text-xl text-gray-200 leading-relaxed">
                For over 20 years, we've been providing premium quality night crawlers 
                that give you the edge you need. Fresh, lively, and guaranteed to attract fish.
              </p>

              {/* Feature Points */}
              <div className="space-y-3">
                {[
                  'Premium quality night crawlers',
                  'Fresh daily harvesting',
                  'Fast & reliable delivery',
                  '100% satisfaction guarantee'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/products"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
                  alt="Premium Night Crawlers"
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
                <div className="mt-6 text-center">
                  <p className="text-green-200 font-medium">Fresh • Live • Premium Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Eagle Bait Co.?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality live bait with unmatched service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-green-600" size={48} />,
                title: 'Quality Guarantee',
                description: 'Every night crawler is hand-selected for size, vitality, and freshness'
              },
              {
                icon: <Truck className="text-green-600" size={48} />,
                title: 'Fast Delivery',
                description: 'Same-day delivery available in local areas, overnight shipping nationwide'
              },
              {
                icon: <Clock className="text-green-600" size={48} />,
                title: '24/7 Freshness',
                description: 'Climate-controlled storage ensures your bait stays fresh and active'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <img 
              src="https://static.lumi.new/d0/d03bedfe1addedcb8b07b86326af17ae.webp" 
              alt="Eagle Logo" 
              className="h-20 w-auto object-contain"
            />
          </div>
          
          <h2 className="text-4xl font-bold mb-6">
            Ready to Improve Your Fishing Success?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of satisfied customers who trust Eagle Bait Co. for their fishing needs
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/products"
              className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Browse Products
            </Link>
            <a
              href="tel:+1234567890"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
