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

      {/* Artistic Collection Grid */}
      <section className="section section-collections-artistic" ref={servRef}>
        <div className="section-ornament section-ornament--top"></div>
        <div className="container">
          <SectionHeader
            subtitle="The Shagun Edit"
            title="Our Exclusive Collections"
            description="Explore our curated masterpieces crafted with passion and heritage."
          />
          
          <div className={`collections-artistic-grid ${servInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {[
              {
                title: 'Bridal Lehengas',
                category: 'Heritage Couture',
                image: '/services/lehenga.png',
                desc: 'Handcrafted Zardozi and Gota Patti masterpieces that define Indian royalty.',
                features: ['Custom Fit', 'Pure Silk', 'Rental Available'],
                badge: 'Signature'
              },
              {
                title: 'Premium Gowns',
                category: 'Modern Fusion',
                image: '/services/gowns.png',
                desc: 'Ethereal silhouettes blending international trends with traditional Indian grace.',
                features: ['Reception Wear', 'Exquisite Beadwork'],
                badge: 'New Launch'
              },
              {
                title: 'Exquisite Jewellery',
                category: 'Bridal Finishes',
                image: '/services/jewellery.png',
                desc: 'Complete your bridal look with our curated sets of Kundan and Jadau jewellery.',
                features: ['Kundan Sets', 'Polki Art', 'Gold Plated'],
                badge: 'Trending'
              },
              {
                title: 'Designer Sarees',
                category: 'Timeless Drapes',
                image: '/hero/boutique.png',
                desc: 'From Banarasi silks to modern organza, find the perfect drape for every occasion.',
                features: ['Hand-Woven', 'Luxury Borders'],
                badge: 'Artisanal'
              }
            ].map((collection, i) => (
              <div className="collection-art-card" key={i}>
                <div className="collection-art-card__visual">
                  <img src={collection.image} alt={collection.title} />
                  <div className="collection-art-card__overlay"></div>
                  <div className="collection-art-card__badge">{collection.badge}</div>
                </div>
                <div className="collection-art-card__content">
                  <span className="collection-art-card__category">{collection.category}</span>
                  <h3 className="collection-art-card__title">{collection.title}</h3>
                  <p className="collection-art-card__desc">{collection.desc}</p>
                  <ul className="collection-art-card__features">
                    {collection.features.map((f, j) => (
                      <li key={j}>
                        <Check size={14} className="mr-2 text-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="collection-art-card__actions">
                    <Link to="/contact" className="btn btn-gold collection-art-card__btn">
                      <Phone size={16} className="mr-2" />
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-ornament section-ornament--bottom"></div>
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
