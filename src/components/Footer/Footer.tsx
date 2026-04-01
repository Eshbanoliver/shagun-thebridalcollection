import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, ArrowRight, MapPin, Heart, Share2 } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const services = [
    'Wedding Lehenga',
    'Paushak Collection',
    'Pre-Wed Gowns',
    'Bridal Jewellery',
    'Rent & Sale',
  ];

  return (
    <footer className="footer" id="main-footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,40 1440,40 L1440,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="footer__content">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__col footer__col--brand">
              <Link to="/" className="footer__brand">
                <span className="footer__brand-icon">
                  <Sparkles size={20} />
                </span>
                <div>
                  <h3 className="footer__brand-name">Shagun</h3>
                  <p className="footer__brand-tagline">The Bridal Collection</p>
                </div>
              </Link>
              <p className="footer__brand-desc">
                Udaipur's premier bridal fashion destination. We bring elegance, tradition, 
                and luxury together to make your special day truly unforgettable.
              </p>
              <div className="footer__social">
                <a href="https://www.instagram.com/shagun_the_bridal_collection/" className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener">
                  <Heart size={18} />
                </a>
                <a href="https://facebook.com" className="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener">
                  <Share2 size={18} />
                </a>
                <a href="tel:9950889370" className="footer__social-link" aria-label="Call us">
                  <Phone size={18} />
                </a>
                <a href="mailto:SHAGUNTHEBRIDALCOLLECTION@GMAIL.COM" className="footer__social-link" aria-label="Email us">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__list">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__list-link">
                      <span className="footer__list-arrow">
                        <ArrowRight size={14} />
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h4 className="footer__col-title">Our Services</h4>
              <ul className="footer__list">
                {services.map((service) => (
                  <li key={service}>
                    <Link to="/services" className="footer__list-link">
                      <span className="footer__list-arrow">
                        <ArrowRight size={14} />
                      </span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__col">
              <h4 className="footer__col-title">Get In Touch</h4>
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <MapPin size={16} className="flex-shrink-0 mt-1" />
                  <p>Orbit Garden Road, Ganpati Vihar, Pulan, Udaipur, Rajasthan 313001</p>
                </div>
                <div className="footer__contact-item">
                  <Phone size={16} className="flex-shrink-0 mt-1" />
                  <div>
                    <a href="tel:9950889370">9950889370</a>
                    <br />
                    <a href="tel:9079757782">9079757782</a>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <Mail size={16} className="flex-shrink-0 mt-1" />
                  <a href="mailto:SHAGUNTHEBRIDALCOLLECTION@GMAIL.COM" className="footer__email-link">
                    shagunthebridalcollection@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {new Date().getFullYear()} | <strong>Shagun THE BRIDAL COLLECTION</strong> | All Rights Reserved
          </p>
          <p className="footer__powered">
            Powered by{' '}
            <a href="https://shapesway.in" target="_blank" rel="noopener" className="footer__powered-link">
              Shapesway Technologies
            </a>
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="footer__decor footer__decor--1"></div>
      <div className="footer__decor footer__decor--2"></div>
    </footer>
  );
}

export default Footer;
