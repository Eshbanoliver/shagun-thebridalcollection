import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/services', label: 'SERVICES' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar--scrolled' : ''}`}>
      {/* Top Utility Bar */}
      <div className="navbar-top">
        <div className="container-wide navbar-top__container">
          <div className="navbar-top__left">
            <div className="navbar-top__item">
              <span className="navbar-top__icon">✉</span>
              <a href="mailto:SHAGUNTHEBRIDALCOLLECTION@GMAIL.COM">SHAGUNTHEBRIDALCOLLECTION@GMAIL.COM</a>
            </div>
            <div className="navbar-top__item">
              <span className="navbar-top__icon">🕒</span>
              <span>Mon - Sat 10:00 AM - 8:00 PM</span>
            </div>
          </div>
          <div className="navbar-top__right">
            <span className="navbar-top__label">Follow Us On :</span>
            <div className="navbar-top__social">
              <a href="#" className="navbar-top__social-link">📸</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Diagonal Navbar */}
      <div className="navbar-main">
        <div className="container-wide navbar-main__outer">
          <div className="navbar-shagun">
            
            {/* 1. Brand Section (Logo) - White Parallelogram */}
            <div className="navbar-shagun__brand-box">
              <Link to="/" className="navbar-shagun__brand">
                <span className="navbar-shagun__brand-icon">✦</span>
                <div className="navbar-shagun__brand-text">
                  <span className="navbar-shagun__brand-name">Shagun</span>
                  <span className="navbar-shagun__brand-tagline">The Bridal Collection</span>
                </div>
              </Link>
            </div>

            {/* 2. Nav Section (Links) - Cherry Red Parallelogram */}
            <div className="navbar-shagun__nav-box">
              <nav className={`navbar-shagun__nav ${isMobileOpen ? 'navbar-shagun__nav--open' : ''}`}>
                <ul className="navbar-shagun__links">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`navbar-shagun__link ${location.pathname === link.path ? 'navbar-shagun__link--active' : ''}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* 3. Call Section - White Parallelogram */}
            <div className="navbar-shagun__call-box">
              <div className="navbar-shagun__call-content">
                <div className="navbar-shagun__call-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div className="navbar-shagun__call-info">
                  <span className="navbar-shagun__call-label">CALL HELPLINE</span>
                  <a href="tel:9950889370" className="navbar-shagun__call-number">+91 99508 89370</a>
                </div>
              </div>
            </div>

            {/* Mobile Hamburger (Only visible on mobile) */}
            <button
              className={`navbar-shagun__hamburger ${isMobileOpen ? 'navbar-shagun__hamburger--active' : ''}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>
        </div>
      </div>

      {isMobileOpen && <div className="navbar-shagun__overlay" onClick={() => setIsMobileOpen(false)}></div>}
    </header>
  );
}

export default Navbar;
