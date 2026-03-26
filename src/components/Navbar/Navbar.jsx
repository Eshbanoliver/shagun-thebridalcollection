import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__container container">
        <Link to="/" className="navbar__brand" aria-label="Home">
          <span className="navbar__brand-icon">✦</span>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">Shagun</span>
            <span className="navbar__brand-tagline">The Bridal Collection</span>
          </div>
        </Link>

        <nav className={`navbar__nav ${isMobileOpen ? 'navbar__nav--open' : ''}`} id="main-nav">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.path} className="navbar__item">
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                  <span className="navbar__link-underline"></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="navbar__cta btn btn-primary" id="nav-cta-btn">
            Book Now
          </Link>
        </nav>

        <button
          className={`navbar__hamburger ${isMobileOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
          id="nav-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isMobileOpen && <div className="navbar__overlay" onClick={() => setIsMobileOpen(false)}></div>}
    </header>
  );
}

export default Navbar;
