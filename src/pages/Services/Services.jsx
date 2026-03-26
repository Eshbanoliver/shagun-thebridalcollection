import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useInView } from '../../hooks/useInView';
import './Services.css';

function Services() {
  const [servRef, servInView] = useInView();
  const [processRef, processInView] = useInView();

  const services = [
    {
      icon: '👰',
      title: 'Wedding Lehenga',
      desc: 'Exquisitely embroidered bridal lehengas featuring zardozi work, mirror embellishments, and rich fabrics. Each piece is a masterwork of traditional Indian craftsmanship designed to make you the center of attention.',
      features: ['Handcrafted Embroidery', 'Premium Fabrics', 'Custom Fitting', 'Rent & Sale Options'],
      gradient: 'linear-gradient(135deg, #B22234 0%, #8B1A29 100%)',
    },
    {
      icon: '🪄',
      title: 'Paushak Collection',
      desc: 'Traditional Rajasthani paushak sets that honor cultural heritage while embracing modern elegance. Perfect for the bride who wants to celebrate tradition with grace and grandeur.',
      features: ['Traditional Designs', 'Rich Color Palette', 'Heritage Craftsmanship', 'Matching Accessories'],
      gradient: 'linear-gradient(135deg, #6B3A2A 0%, #4A2518 100%)',
    },
    {
      icon: '✨',
      title: 'Pre-Wed Gowns',
      desc: 'Stunning designer gowns for pre-wedding photoshoots, engagement ceremonies, and receptions. From flowing silhouettes to fitted glamour, find your perfect pre-wedding look.',
      features: ['Designer Silhouettes', 'Photoshoot Ready', 'Western & Fusion Styles', 'Available for Rent'],
      gradient: 'linear-gradient(135deg, #D4A853 0%, #9A7A3A 100%)',
    },
    {
      icon: '💎',
      title: 'Bridal Jewellery',
      desc: 'Complete your bridal ensemble with our curated collection of traditional kundan, polki, and contemporary jewellery sets. From maang tikka to payal — everything you need.',
      features: ['Kundan & Polki Sets', 'Complete Bridal Sets', 'Matching Ensemble Options', 'Rent & Purchase'],
      gradient: 'linear-gradient(135deg, #B22234 0%, #D4A853 100%)',
    },
  ];

  const process = [
    { step: '01', title: 'Book Appointment', desc: 'Schedule a private consultation at our Udaipur boutique.' },
    { step: '02', title: 'Explore & Try', desc: 'Browse our collection and try on your favorites with expert guidance.' },
    { step: '03', title: 'Perfect Fit', desc: 'Get custom alterations and fitting for a flawless look.' },
    { step: '04', title: 'Shine Bright', desc: 'Walk down the aisle with confidence and grace!' },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="services-hero">
        <div className="services-hero__bg">
          <div className="services-hero__overlay"></div>
        </div>
        <div className="services-hero__content container">
          <span className="services-hero__badge">✦ Our Collections ✦</span>
          <h1 className="services-hero__title">Bridal Fashion<br />& Beyond</h1>
          <p className="services-hero__subtitle">
            Available for Rent & Sale — Discover exquisite wedding lehengas, paushak, pre-wed gowns & jewellery.
          </p>
        </div>
      </section>

      {/* Availability Badge */}
      <section className="section services-badge-section">
        <div className="container">
          <div className="services-badge-row">
            <div className="services-badge-item glass-card">
              <span className="services-badge-icon">🏷️</span>
              <div>
                <h3>Available for Rent & Sale</h3>
                <p>Flexible options to fit every budget</p>
              </div>
            </div>
            <div className="services-badge-item glass-card">
              <span className="services-badge-icon">👗</span>
              <div>
                <h3>Wedding Lehenga | Paushak</h3>
                <p>Traditional bridal elegance</p>
              </div>
            </div>
            <div className="services-badge-item glass-card">
              <span className="services-badge-icon">💍</span>
              <div>
                <h3>Pre Wed Gowns | Jewellery</h3>
                <p>Complete your bridal look</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section section-cream" ref={servRef}>
        <div className="container">
          <SectionHeader
            subtitle="What We Offer"
            title="Our Exclusive Collections"
            description="Every piece tells a story of love, tradition, and artistry."
          />
          <div className={`services-detail__list ${servInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {services.map((service, i) => (
              <div className={`services-detail__card ${i % 2 === 1 ? 'services-detail__card--reverse' : ''}`} key={i}>
                <div className="services-detail__visual">
                  <div className="services-detail__visual-inner" style={{ background: service.gradient }}>
                    <span className="services-detail__visual-icon">{service.icon}</span>
                    <div className="services-detail__visual-decor"></div>
                  </div>
                </div>
                <div className="services-detail__info">
                  <h3 className="services-detail__title">{service.title}</h3>
                  <p className="services-detail__desc">{service.desc}</p>
                  <ul className="services-detail__features">
                    {service.features.map((f, j) => (
                      <li key={j}>
                        <span className="services-detail__check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-outline services-detail__btn">
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-dark" ref={processRef}>
        <div className="container">
          <SectionHeader
            subtitle="How It Works"
            title="Your Bridal Journey"
            light
          />
          <div className={`services-process__grid ${processInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {process.map((p, i) => (
              <div className="services-process__item" key={i}>
                <div className="services-process__step">{p.step}</div>
                <h4 className="services-process__title">{p.title}</h4>
                <p className="services-process__desc">{p.desc}</p>
                {i < process.length - 1 && <div className="services-process__connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section services-cta">
        <div className="services-cta__bg"></div>
        <div className="container services-cta__content">
          <h2>Find Your Perfect Bridal Ensemble</h2>
          <p>Book a private consultation and let our experts guide you to the outfit of your dreams.</p>
          <div className="services-cta__actions">
            <Link to="/contact" className="btn btn-gold" id="services-cta-btn">
              Book Appointment
            </Link>
            <a href="tel:9950889370" className="btn btn-secondary">
              📞 Call: 9950889370
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
