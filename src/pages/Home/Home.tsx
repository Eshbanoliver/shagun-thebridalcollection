import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useInView } from '../../hooks/useInView';
import { 
  ArrowRight, 
  Users, 
  Award, 
  Shirt, 
  Heart, 
  Sparkles, 
  Stars, 
  Gem, 
  Target, 
  Compass, 
  Droplets, 
  Palette, 
  Crown, 
  Lightbulb, 
  Trophy, 
  CheckCircle2, 
  Package, 
  IndianRupee, 
  Scissors, 
  Star, 
  HelpCircle,
  Calendar,
  Phone,
  MessageCircle
} from 'lucide-react';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import './Home.css';

/* ================================================
   SUB-COMPONENTS
   ================================================ */

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/hero/lehenga.png',
    '/hero/jewelry.png',
    '/hero/boutique.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero" id="hero-section">
      <div className="hero__slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero__slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        <div className="hero__bg-overlay"></div>
      </div>
      <div className="hero__content container">
        <div className="hero__badge">
          <Sparkles size={14} className="inline-block mr-2" />
          Premium Bridal Fashion
          <Sparkles size={14} className="inline-block ml-2" />
        </div>
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
            <ArrowRight size={18} />
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
          <div className="about-preview__image-main">
            <img src="/about/main.png" alt="Bridal Collection Preview" loading="lazy" />
          </div>
          <div className="about-preview__image-overlay">
            <img src="/about/overlay.png" alt="Intricate Jewelry Detail" loading="lazy" />
          </div>
          <div className="about-preview__badge-float">
            <div className="about-preview__badge-spin">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text>
                  <textPath href="#circlePath" startOffset="0%" fill="currentColor">
                    SHAGUN BRIDAL BOUTIQUE •
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="about-preview__badge-year">
              2015
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
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================
   SUB-COMPONENTS
   ================================================ */

const CountUp: React.FC<{ end: number, suffix?: string }> = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    
    let startTimestamp: number | null = null;
    const duration = 2500;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const MetricsSection: React.FC = () => {
  const [ref, inView] = useInView();
  const metrics = [
    { numberValue: 2000, suffix: '+', label: 'Happy Brides', icon: <Users size={28} />, bgIcon: <Users size={180} /> },
    { numberValue: 10, suffix: '+', label: 'Years Experience', icon: <Award size={28} />, bgIcon: <Award size={180} /> },
    { numberValue: 500, suffix: '+', label: 'Exclusive Designs', icon: <Shirt size={28} />, bgIcon: <Shirt size={180} /> },
    { numberValue: 100, suffix: '%', label: 'Customer Satisfaction', icon: <Heart size={28} />, bgIcon: <Heart size={180} /> },
  ];

  return (
    <section className="section metrics" id="metrics-section" ref={ref}>
      <div className="metrics__bg-decor"></div>
      <div className="container">
        <div className={`metrics__grid ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {metrics.map((metric, i) => (
            <div className="metrics__card glass-card-dark" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="metrics__bg-icon">{metric.bgIcon}</div>
              <span className="metrics__icon">{metric.icon}</span>
              <span className="metrics__number">
                <CountUp end={metric.numberValue} suffix={metric.suffix} />
              </span>
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
      icon: <Stars size={24} />,
      image: '/services/lehenga.png',
      gradient: 'linear-gradient(135deg, var(--cherry-red) 0%, var(--cherry-red-dark) 100%)',
    },
    {
      title: 'Pre-Wed Gowns',
      desc: 'Stunning designer gowns for pre-wedding photoshoots and celebrations — effortlessly elegant and glamorous.',
      icon: <Sparkles size={24} />,
      image: '/services/gowns.png',
      gradient: 'linear-gradient(135deg, var(--brown) 0%, var(--brown-dark) 100%)',
    },
    {
      title: 'Bridal Jewellery',
      desc: 'Complete your bridal look with our curated collection of traditional and contemporary jewellery pieces.',
      icon: <Gem size={24} />,
      image: '/services/jewellery.png',
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
            <div className="services-preview__card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
              <img src={service.image} alt={service.title} className="services-preview__img" loading="lazy" />
              <div className="services-preview__overlay"></div>
              
              <div className="services-preview__content">
                <div className="services-preview__card-icon" style={{ background: service.gradient }}>
                  {service.icon}
                </div>
                <h3 className="services-preview__card-title">{service.title}</h3>
                
                <div className="services-preview__hidden-content">
                  <p className="services-preview__card-desc">{service.desc}</p>
                  <Link to="/services" className="services-preview__card-link">
                    View Collection
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
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
          <div className="mission-vision__card mission">
            <div className="mission-vision__bg-icon">
              <Target size={120} />
            </div>
            <div className="mission-vision__card-header">
              <div className="mission-vision__card-icon">
                <Target size={32} />
              </div>
              <h3>Our Mission</h3>
            </div>
            <p>
              To provide every bride with an unparalleled shopping experience, offering the finest quality 
              bridal wear at accessible prices. We are committed to blending tradition with modern elegance, 
              ensuring every bride feels confident, beautiful, and celebrated on her special day.
            </p>
          </div>
          
          <div className="mission-vision__card vision">
            <div className="mission-vision__bg-icon">
              <Compass size={120} />
            </div>
            <div className="mission-vision__card-header">
              <div className="mission-vision__card-icon">
                <Compass size={32} />
              </div>
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
    { icon: <Droplets size={32} />, title: 'Quality', desc: 'Only the finest fabrics and craftsmanship in every piece.', color: '#FF6B6B', glow: 'rgba(255, 107, 107, 0.3)' },
    { icon: <Users size={32} />, title: 'Trust', desc: 'Building lasting relationships through transparency and integrity.', color: '#4ECDC4', glow: 'rgba(78, 205, 196, 0.3)' },
    { icon: <Palette size={32} />, title: 'Artistry', desc: 'Every design reflects passion, tradition, and modern aesthetics.', color: '#9D50BB', glow: 'rgba(157, 80, 187, 0.3)' },
    { icon: <Crown size={32} />, title: 'Elegance', desc: 'Timeless beauty that makes every bride feel like royalty.', color: '#F9D423', glow: 'rgba(249, 212, 35, 0.3)' },
    { icon: <Heart size={32} />, title: 'Care', desc: 'Personalized attention to make your bridal journey special.', color: '#FF9F1C', glow: 'rgba(255, 159, 28, 0.3)' },
    { icon: <Lightbulb size={32} />, title: 'Innovation', desc: 'Blending heritage with contemporary bridal fashion trends.', color: '#45B7D1', glow: 'rgba(69, 183, 209, 0.3)' },
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
            <div 
              className="core-values__item" 
              key={i} 
              style={{ 
                animationDelay: `${i * 0.1}s`,
                '--accent-color': value.color,
                '--accent-glow': value.glow
              } as React.CSSProperties}
            >
              <span className="core-values__index">0{i + 1}</span>
              <div className="core-values__icon-wrapper">
                {value.icon}
              </div>
              <h4 className="core-values__title">{value.title}</h4>
              <p className="core-values__desc">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



const CTASection: React.FC = () => {
  const [ref, inView] = useInView();
  return (
    <section className="section cta-section" id="cta-section" ref={ref}>
      <div className="cta-section__bg">
        <img src="/hero/jewelry.png" alt="Premium Bridal Fashion" className="cta-section__bg-img" loading="lazy" />
        <div className="cta-section__overlay"></div>
        <div className="cta-section__glow cta-section__glow--1"></div>
        <div className="cta-section__glow cta-section__glow--2"></div>
        <div className="cta-section__particles"></div>
      </div>
      <div className={`container cta-section__content ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="cta-section__glass-box">
          <span className="cta-section__badge">
            <Sparkles size={12} className="inline-block mr-2" />
            Limited Period Collection
            <Sparkles size={12} className="inline-block ml-2" />
          </span>
          <h2 className="cta-section__title">
            Your Dream Bridal Look<br />
            <span className="cta-section__title-accent">Awaits You</span>
          </h2>
          <p className="cta-section__desc">
            Book a private appointment and explore our exclusive collection in a luxurious, 
            stress-free environment. Let us help you find the one.
          </p>
          <div className="cta-section__actions">
            <Link to="/contact" className="btn btn-gold cta-section__btn-primary" id="cta-book-btn">
              <Calendar size={18} />
              Book Your Appointment
            </Link>
            <a href="tel:9950889370" className="btn btn-outline cta-section__btn-secondary" id="cta-call-btn">
              <Phone size={18} />
              Call: 9950889370
            </a>
          </div>
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
                  <Star key={j} size={16} fill="var(--gold)" color="var(--gold)" className="inline-block mr-1" />
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
                <span className="faq-preview__q-icon">
                  <HelpCircle size={14} />
                </span>
                {faq.q}
              </h4>
              <p className="faq-preview__answer">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="faq-preview__cta">
          <Link to="/faq" className="btn btn-outline" id="faq-preview-btn">
            View All FAQs
            <ArrowRight size={18} />
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
