import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import CertificationsPage from './pages/CertificationsPage'
import Footer from './components/Footer'
import AdvancedAnalyticsDashboard from './pages/AnalyticsPage'
import ShippingPage from './pages/ShippingPage'


function AppContent() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

 useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      {!isAdminPage && <Navigation />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/analytics" element={<AdvancedAnalyticsDashboard />} />
        <Route path="/shipping" element={<ShippingPage />} />
      </Routes>
      
      {!isAdminPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: { 
            background: '#1f2937', 
            color: '#fff',
            borderRadius: '12px'
          },
          success: { 
            style: { 
              background: '#059669',
              color: '#fff'
            } 
          },
          error: { 
            style: { 
              background: '#dc2626',
              color: '#fff'
            } 
          }
        }}
      />
      
      <Router>
        <AppContent />
      </Router>
    </>
  )
}

export default App