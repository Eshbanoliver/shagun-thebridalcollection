import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollRestoration from './components/ScrollRestoration';
import './App.css';

// Lazy loading components for better performance
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const FAQ = lazy(() => import('./pages/FAQ/FAQ'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

// Simple loading fallback
const PageLoader = () => (
  <div className="page-loader" style={{ 
    height: '60vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: 'var(--section-cream)',
    color: 'var(--charcoal)',
    fontSize: '1.2rem',
    fontFamily: 'var(--font-heading)'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div className="animate-spin" style={{ 
        width: '40px', 
        height: '40px', 
        border: '3px solid rgba(212, 168, 83, 0.2)', 
        borderTopColor: 'var(--gold)', 
        borderRadius: '50%',
        margin: '0 auto 15px'
      }} />
      <span style={{ letterSpacing: '2px', opacity: 0.7 }}>SHAGUN</span>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
