import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useInView } from '../../hooks/useInView';
import { Stars, Sparkles, Shirt, Gem, Tag, Check, Calendar, Phone, Crown, Palette, Scissors, Heart } from 'lucide-react';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import './Services.css';

const Services: React.FC = () => {
  const [servRef, servInView] = useInView();
  const [processRef, processInView] = useInView();

  const services = [
    {
      icon: <Stars size={40} />,
      title: 'Wedding Lehengas',
      desc: 'Our signature collection of bridal lehengas featuring intricate Zardozi, Gota Patti, and hand-embroidery. Available for both personalized rental and exclusive sale.',
      features: ['Handcrafted Zardozi', 'Bespoke Fitting', 'Regal Silhouettes', 'Premium Velvets & Silks'],
      gradient: 'linear-gradient(135deg, #8E0E00 0%, #1F1C18 100%)',
    },
    {
      icon: <Palette size={40} />,
      title: 'Designer Sarees',
      desc: 'Exquisite sarees ranging from traditional Banarasi and Kanjeevaram to modern designer drapes in Chiffon and Organza. Perfect for weddings and high-profile parties.',
      features: ['Silk & Georgette', 'Designer Borders', 'Custom Blouse Stitching', 'Classic & Contemporary'],
      gradient: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Salwar Suits & Shararas',
      desc: 'Elegant salwar suits and trendy sharara sets designed for sangeet, haldi, and festive celebrations. A blend of comfort and traditional glamour.',
      features: ['Heavy Sharara Sets', 'Anarkali Styles', 'Mirror Work Details', 'Custom Tailoring'],
      gradient: 'linear-gradient(135deg, #D4A853 0%, #B08A3A 100%)',
    },
    {
      icon: <Crown size={40} />,
      title: 'Gowns & Bridal Wear',
      desc: 'Breathtaking bridal gowns and heavy ethnic wear for receptions and pre-wedding shoots. Designed to make every bride feel like global royalty.',
      features: ['Fairy-tale Silhouettes', 'International Trends', 'Intricate Beadwork', 'Photogenic Styles'],
      gradient: 'linear-gradient(135deg, #1d2671 0%, #c33764 100%)',
    },
    {
      icon: <Shirt size={40} />,
      title: 'Dresses & Indo-Western',
      desc: 'A fusion of Indian tradition and Western elegance. Our designer dresses capture the essence of modern bridal fashion with ease and style.',
      features: ['Modern Cuts', 'Fusion Embroidery', 'Luxury Party Wear', 'Trendy Palettes'],
      gradient: 'linear-gradient(135deg, #373331 0%, #bbbbbb 100%)',
    },
    {
      icon: <Scissors size={40} />,
      title: 'Suits & Dress Materials',
      desc: 'Exclusive unstitched dress materials and luxury suit fabrics for those who want to create their own unique bridal ensemble.',
      features: ['Pure Silk & Cotton', 'Authentic Prints', 'Intricate Necklines', 'Custom Design Support'],
      gradient: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
    },
    {
      icon: <Gem size={40} />,
      title: 'Exquisite Jewellery',
      desc: 'Complete your look with our curated bridal jewellery sets featuring premium Kundan, Polki, and Jadau craftsmanship.',
      features: ['Bridal Choker Sets', 'Maang Tikka & Mathapatti', 'Matching Earrings', 'Rent & Sale Options'],
      gradient: 'linear-gradient(135deg, #642B73 0%, #C6426E 100%)',
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

      {/* Premium Highlight Badges */}
      <section className="section services-feature-highlights">
        <div className="container">
          <div className="services-feature-grid">
            {[
              {
                icon: <Tag size={32} />,
                title: 'Available for Rent & Sale',
                desc: 'Flexible luxury options to fit every budget.',
                color: 'gold',
                label: 'Exclusive Deal'
              },
              {
                icon: <Shirt size={32} />,
                title: 'Lehengas | Sarees | Suits',
                desc: 'Traditional elegance for every festive occasion.',
                color: 'ruby',
                label: 'Bridal Choice'
              },
              {
                icon: <Gem size={32} />,
                title: 'Gowns | Jewellery',
                desc: 'Modern fusion and exquisite bridal finishes.',
                color: 'indanthia',
                label: 'Couture Art'
              }
            ].map((item, idx) => (
              <div 
                className={`feature-card feature-card--${item.color}`} 
                key={idx}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="feature-card__glow"></div>
                <div className="feature-card__badge">{item.label}</div>
                <div className="feature-card__icon">
                  {item.icon}
                </div>
                <div className="feature-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="feature-card__shape"></div>
              </div>
            ))}
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
                        <span className="services-detail__check">
                          <Check size={14} />
                        </span>
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

      {/* Why Choose Us */}
      <WhyChooseUs />

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
              <Calendar size={18} />
              Book Appointment
            </Link>
            <a href="tel:9950889370" className="btn btn-secondary">
              <Phone size={18} />
              Call: 9950889370
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
