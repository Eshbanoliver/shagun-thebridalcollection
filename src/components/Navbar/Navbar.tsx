import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Clock, Phone } from 'lucide-react';
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
              <span className="navbar-top__icon">
                <Mail size={14} />
              </span>
              <a href="mailto:SHAGUNTHEBRIDALCOLLECTION@GMAIL.COM">SHAGUNTHEBRIDALCOLLECTION@GMAIL.COM</a>
            </div>
            <div className="navbar-top__item">
              <span className="navbar-top__icon">
                <Clock size={14} />
              </span>
              <span>Mon - Sat 10:00 AM - 8:00 PM</span>
            </div>
          </div>
          <div className="navbar-top__right">
            <span className="navbar-top__label">Follow Us On :</span>
            <div className="navbar-top__social">
              <a href="https://www.instagram.com/shagun_the_bridal_collection/" className="navbar-top__social-link" target="_blank" rel="noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
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
                <img src="/logo.png" alt="Shagun Logo" className="navbar-shagun__logo" />
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
                  <Phone size={20} />
                </div>
                <div className="navbar-shagun__call-info">
                  <span className="navbar-shagun__call-label">CALL HELPLINE</span>
                  <a href="tel:9079757782" className="navbar-shagun__call-number">+91 90797 57782</a>
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
