import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
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
                <span className="footer__brand-icon">✦</span>
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
                <a href="tel:9950889370" className="footer__social-link" aria-label="Call us" id="footer-call">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </a>
                <a href="mailto:SHAGUNTHEBRIDALCOLLECTION@GMAIL.COM" className="footer__social-link" aria-label="Email us" id="footer-email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
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
                      <span className="footer__list-arrow">→</span>
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
                      <span className="footer__list-arrow">→</span>
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <p>Orbit Garden Road, Ganpati Vihar, Pulan, Udaipur, Rajasthan 313001</p>
                </div>
                <div className="footer__contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                  <div>
                    <a href="tel:9950889370">9950889370</a>
                    <br />
                    <a href="tel:9079757782">9079757782</a>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
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
        <div className="container">
          <p className="footer__copyright">
            ©️ Copyright 2026 | Shagun THE BRIDAL COLLECTION | All Rights Reserved | Powered by{' '}
            <a href="https://shapesway.in" target="_blank" rel="noopener" className="footer__powered-link">
              Shapesway Technologies Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
