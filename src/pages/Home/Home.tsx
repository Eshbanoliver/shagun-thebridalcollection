import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useInView } from '../../hooks/useInView';
import './Home.css';

/* ================================================
   SUB-COMPONENTS
   ================================================ */

const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="hero-section">
      <div className="hero__bg">
        <div className="hero__bg-overlay"></div>
        <div className="hero__bg-pattern"></div>
        <div className="hero__bg-particles">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="hero__particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}></span>
          ))}
        </div>
      </div>
      <div className="hero__content container">
        <div className="hero__badge">✦ Premium Bridal Fashion ✦</div>
        <h1 className="hero__title">
          <span className="hero__title-line">Where Dreams</span>
          <span className="hero__title-accent">Meet Elegance</span>
        </h1>
        <p className="hero__subtitle">
          Udaipur's finest bridal collection — exquisite lehengas, gowns & jewellery 
          crafted for your most unforgettable moments.
        </p>
        <div className="hero__actions">
          <Link to="/services" className="btn btn-primary" id="hero-explore-btn">
            Explore Collection
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <Link to="/contact" className="btn btn-secondary" id="hero-contact-btn">
            Book Appointment
          </Link>
        </div>
        <div className="hero__scroll-indicator">
          <span>Scroll Down</span>
          <div className="hero__scroll-line"></div>
        </div>
      </div>
    </section>
  );
}

const AboutPreview: React.FC = () => {
  const [ref, inView] = useInView();
  return (
    <section className="section section-gradient about-preview" id="about-preview" ref={ref}>
      <div className={`container about-preview__inner ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="about-preview__visual">
          <div className="about-preview__image-frame">
            <div className="about-preview__image-bg">
              <div className="about-preview__decorative-text">शगुन</div>
            </div>
            <div className="about-preview__badge-float">
              <span className="about-preview__badge-number">Since</span>
              <span className="about-preview__badge-label">Est. 2015</span>
            </div>
          </div>
        </div>
        <div className="about-preview__content">
          <SectionHeader
            subtitle="Our Story"
            title="A Legacy of Bridal Elegance"
            description=""
          />
          <p className="about-preview__text">
            At <strong>Shagun THE BRIDAL COLLECTION</strong>, we believe every bride deserves to feel like royalty. 
            Nestled in the heart of Udaipur, our boutique curates the finest bridal ensembles — 
            from richly embroidered lehengas to stunning pre-wedding gowns and exquisite jewellery.
          </p>
          <p className="about-preview__text">
            With years of experience in bridal fashion, we blend traditional craftsmanship with 
            contemporary elegance, ensuring every piece tells a story of love, grace, and grandeur.
          </p>
          <Link to="/about" className="btn btn-outline" id="about-preview-btn">
            Discover Our Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

const MetricsSection: React.FC = () => {
  const [ref, inView] = useInView();
  const metrics = [
    { number: '2000+', label: 'Happy Brides', icon: '💍' },
    { number: '10+', label: 'Years Experience', icon: '✨' },
    { number: '500+', label: 'Exclusive Designs', icon: '👗' },
    { number: '100%', label: 'Customer Satisfaction', icon: '❤️' },
  ];

  return (
    <section className="section section-dark metrics" id="metrics-section" ref={ref}>
      <div className="metrics__bg-decor"></div>
      <div className="container">
        <div className={`metrics__grid ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {metrics.map((metric, i) => (
            <div className="metrics__card glass-card-dark" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="metrics__icon">{metric.icon}</span>
              <span className="metrics__number">{metric.number}</span>
              <span className="metrics__label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ServicesPreview: React.FC = () => {
  const [ref, inView] = useInView();
  const services = [
    {
      title: 'Wedding Lehenga & Paushak',
      desc: 'Exquisite bridal lehengas and traditional paushak with intricate embroidery, handcrafted for your special day.',
      icon: '👰',
      gradient: 'linear-gradient(135deg, #B22234 0%, #8B1A29 100%)',
    },
    {
      title: 'Pre-Wed Gowns',
      desc: 'Stunning designer gowns for pre-wedding photoshoots and celebrations — effortlessly elegant and glamorous.',
      icon: '✨',
      gradient: 'linear-gradient(135deg, #6B3A2A 0%, #4A2518 100%)',
    },
    {
      title: 'Bridal Jewellery',
      desc: 'Complete your bridal look with our curated collection of traditional and contemporary jewellery pieces.',
      icon: '💎',
      gradient: 'linear-gradient(135deg, #D4A853 0%, #B08A3A 100%)',
    },
  ];

  return (
    <section className="section section-cream services-preview" id="services-preview" ref={ref}>
      <div className="container">
        <SectionHeader
          subtitle="Our Collections"
          title="Bridal Fashion & Beyond"
          description="Available for Rent & Sale — find the perfect ensemble for every celebration."
        />
        <div className={`services-preview__grid ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {services.map((service, i) => (
            <div className="services-preview__card glass-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="services-preview__card-icon" style={{ background: service.gradient }}>
                <span>{service.icon}</span>
              </div>
              <h3 className="services-preview__card-title">{service.title}</h3>
              <p className="services-preview__card-desc">{service.desc}</p>
              <Link to="/services" className="services-preview__card-link">
                View Collection
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
          ))}
        </div>
        <div className="services-preview__cta">
          <Link to="/services" className="btn btn-primary" id="services-preview-btn">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

const MissionVision: React.FC = () => {
  const [ref, inView] = useInView();
  return (
    <section className="section section-gradient mission-vision" id="mission-vision" ref={ref}>
      <div className={`container mission-vision__inner ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <SectionHeader
          subtitle="Purpose & Direction"
          title="Our Mission & Vision"
        />
        <div className="mission-vision__grid">
          <div className="mission-vision__card glass-card">
            <div className="mission-vision__card-header">
              <div className="mission-vision__card-icon">🎯</div>
              <h3>Our Mission</h3>
            </div>
            <p>
              To provide every bride with an unparalleled shopping experience, offering the finest quality 
              bridal wear at accessible prices. We are committed to blending tradition with modern elegance, 
              ensuring every bride feels confident, beautiful, and celebrated on her special day.
            </p>
          </div>
          <div className="mission-vision__card glass-card">
            <div className="mission-vision__card-header">
              <div className="mission-vision__card-icon">🌟</div>
              <h3>Our Vision</h3>
            </div>
            <p>
              To become Rajasthan's most trusted and admired bridal fashion destination, 
              known for exceptional craftsmanship, personalized service, and a collection 
              that inspires brides across generations to embrace their unique beauty and culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const CoreValues: React.FC = () => {
  const [ref, inView] = useInView();
  const values = [
    { icon: '💎', title: 'Quality', desc: 'Only the finest fabrics and craftsmanship in every piece.' },
    { icon: '🤝', title: 'Trust', desc: 'Building lasting relationships through transparency and integrity.' },
    { icon: '🎨', title: 'Artistry', desc: 'Every design reflects passion, tradition, and modern aesthetics.' },
    { icon: '👑', title: 'Elegance', desc: 'Timeless beauty that makes every bride feel like royalty.' },
    { icon: '💝', title: 'Care', desc: 'Personalized attention to make your bridal journey special.' },
    { icon: '✨', title: 'Innovation', desc: 'Blending heritage with contemporary bridal fashion trends.' },
  ];

  return (
    <section className="section section-dark core-values" id="core-values" ref={ref}>
      <div className="container">
        <SectionHeader
          subtitle="What We Stand For"
          title="Our Core Values"
          light
        />
        <div className={`core-values__grid ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {values.map((value, i) => (
            <div className="core-values__item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="core-values__icon">{value.icon}</span>
              <h4 className="core-values__title">{value.title}</h4>
              <p className="core-values__desc">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView();
  const reasons = [
    { icon: '🏆', title: 'Trusted Brand', desc: 'Over a decade of creating beautiful bridal moments in Udaipur.' },
    { icon: '👗', title: 'Rent & Sale', desc: 'Flexible options to fit every budget — rent or own your dream outfit.' },
    { icon: '🎁', title: 'Complete Package', desc: 'Lehengas, gowns, paushak, and jewellery — everything under one roof.' },
    { icon: '💰', title: 'Best Value', desc: 'Premium quality at fair prices with no hidden costs.' },
    { icon: '🪡', title: 'Custom Fitting', desc: 'Expert tailoring and alterations for a perfect, personalized fit.' },
    { icon: '⭐', title: 'VIP Experience', desc: 'Personal styling assistance and a luxurious shopping ambiance.' },
  ];

  return (
    <section className="section section-cream why-choose" id="why-choose" ref={ref}>
      <div className="container">
        <SectionHeader
          subtitle="The Shagun Difference"
          title="Why Choose Us"
          description="We're not just a bridal store — we're your partner in creating memories that last a lifetime."
        />
        <div className={`why-choose__grid ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {reasons.map((reason, i) => (
            <div className="why-choose__card glass-card" key={i}>
              <span className="why-choose__icon">{reason.icon}</span>
              <h4 className="why-choose__title">{reason.title}</h4>
              <p className="why-choose__desc">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CTASection: React.FC = () => {
  return (
    <section className="section cta-section" id="cta-section">
      <div className="cta-section__bg">
        <div className="cta-section__overlay"></div>
      </div>
      <div className="container cta-section__content">
        <span className="cta-section__badge">✦ Limited Period Collection ✦</span>
        <h2 className="cta-section__title">
          Your Dream Bridal Look<br />Awaits You
        </h2>
        <p className="cta-section__desc">
          Book a private appointment and explore our exclusive collection in a luxurious, 
          stress-free environment. Let us help you find the one.
        </p>
        <div className="cta-section__actions">
          <Link to="/contact" className="btn btn-gold" id="cta-book-btn">
            Book Your Appointment
          </Link>
          <a href="tel:9950889370" className="btn btn-secondary" id="cta-call-btn">
            📞 Call: 9950889370
          </a>
        </div>
      </div>
    </section>
  );
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView();
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Bride, 2025',
      text: 'Shagun made my wedding day absolutely magical! The lehenga was stunning and the team was so helpful in finding the perfect ensemble. Couldn\'t be happier!',
      rating: 5,
    },
    {
      name: 'Ananya Rajput',
      role: 'Bride, 2024',
      text: 'The collection is breathtaking. I rented a gown for my pre-wedding shoot and it was more beautiful than I ever imagined. Thank you, Shagun!',
      rating: 5,
    },
    {
      name: 'Meera Joshi',
      role: 'Bride, 2025',
      text: 'From the moment I walked in, I felt special. The bridal jewellery collection is exquisite and the staff helped me coordinate my entire look perfectly.',
      rating: 5,
    },
  ];

  return (
    <section className="section section-gradient testimonials" id="testimonials" ref={ref}>
      <div className="container">
        <SectionHeader
          subtitle="Bride's Words"
          title="What Our Brides Say"
          description="Hear from the beautiful brides who trusted us with their most special day."
        />
        <div className={`testimonials__grid ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {testimonials.map((t, i) => (
            <div className="testimonials__card glass-card" key={i}>
              <div className="testimonials__stars">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="testimonials__star">★</span>
                ))}
              </div>
              <p className="testimonials__text">"{t.text}"</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="testimonials__name">{t.name}</h4>
                  <p className="testimonials__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQPreview: React.FC = () => {
  const [ref, inView] = useInView();
  const faqs = [
    {
      q: 'Do you offer bridal outfits on rent?',
      a: 'Yes! We offer both rent and sale options for all our bridal lehengas, gowns, and paushak collections.',
    },
    {
      q: 'Can I book a private appointment?',
      a: 'Absolutely! Contact us to schedule a private bridal consultation for a personalized, VIP shopping experience.',
    },
    {
      q: 'Do you provide jewellery with the outfit?',
      a: 'Yes, we have a curated collection of bridal jewellery that can be rented or purchased to complement your outfit.',
    },
  ];

  return (
    <section className="section section-cream faq-preview" id="faq-preview" ref={ref}>
      <div className="container">
        <SectionHeader
          subtitle="Common Questions"
          title="Frequently Asked Questions"
        />
        <div className={`faq-preview__list ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {faqs.map((faq, i) => (
            <div className="faq-preview__item glass-card" key={i}>
              <h4 className="faq-preview__question">
                <span className="faq-preview__q-icon">Q</span>
                {faq.q}
              </h4>
              <p className="faq-preview__answer">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="faq-preview__cta">
          <Link to="/faq" className="btn btn-outline" id="faq-preview-btn">
            View All FAQs
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================
   HOME PAGE
   ================================================ */
const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <MetricsSection />
      <ServicesPreview />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <CTASection />
      <Testimonials />
      <FAQPreview />
    </>
  );
}

export default Home;
