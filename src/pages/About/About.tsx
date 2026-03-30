import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useInView } from '../../hooks/useInView';
import { Gem, Palette, Users, Lightbulb, Sparkles, Calendar, Phone } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const [storyRef, storyInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [teamRef, teamInView] = useInView();

  const values = [
    { icon: <Gem size={32} />, title: 'Premium Quality', desc: 'We source and craft only the finest fabrics, ensuring every piece meets the highest standards of bridal fashion.', color: 'gold' },
    { icon: <Palette size={32} />, title: 'Artistic Excellence', desc: 'Each ensemble is a masterpiece of traditional artistry blended with contemporary design sensibility.', color: 'purple' },
    { icon: <Users size={32} />, title: 'Personal Touch', desc: 'We believe in building relationships, not just transactions. Every bride receives dedicated, personalized attention.', color: 'pink' },
    { icon: <Lightbulb size={32} />, title: 'Innovation', desc: 'Staying ahead of trends while honoring timeless traditions that define Indian bridal wear.', color: 'teal' },
  ];

  const crafts = [
    { title: 'The Zardosi Art', desc: 'Handcrafted gold and silver thread work that has been the hallmark of Indian royalty for centuries.' },
    { title: 'Bespoke Tailoring', desc: 'Every stitch is a promise of perfection, ensuring a silhouette that makes every bride feel like a queen.' },
    { title: 'Exquisite Fabrics', desc: 'Sourcing the finest hand-woven silks and organzas from the traditional looms across India.' },
  ];

  const processes = [
    { 
      step: '01', 
      title: 'Consultation', 
      desc: 'Our experts understand your vision, preferences, and wedding theme to guide your choice.',
      color: 'emerald',
      icon: <Sparkles size={24} />
    },
    { 
      step: '02', 
      title: 'Collections', 
      desc: 'Explore our vast curated range of premium lehengas, gowns, and bridal jewellery.',
      color: 'saffron',
      icon: <Palette size={24} />
    },
    { 
      step: '03', 
      title: 'Expert Fit', 
      desc: 'Detailed measurement and fitting sessions to ensure your outfit is comfortable and perfect.',
      color: 'ruby',
      icon: <Palette size={24} />
    },
    { 
      step: '04', 
      title: 'The Reveal', 
      desc: 'Your dream bridal look is meticulously prepared, steamed, and ready for your big day.',
      color: 'gold',
      icon: <Gem size={24} />
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <div className="about-hero__overlay"></div>
        </div>
        <div className="about-hero__content container">
          <span className="about-hero__badge">✦ About Us ✦</span>
          <h1 className="about-hero__title">Our Story of<br />Bridal Elegance</h1>
          <p className="about-hero__subtitle">
            A decade of creating beautiful bridal moments, one bride at a time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section section-story-enhanced" ref={storyRef}>
        <div className="about-story__ornament top-right"></div>
        <div className="about-story__ornament bottom-left"></div>
        <div className={`container about-story ${storyInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="about-story__content">
            <div className="about-story__header">
              <span className="about-subtitle-creative">
                <Sparkles size={14} className="inline-block mr-2" />
                Our Journey
              </span>
              <h2 className="about-title-creative">
                The <span className="text-golditalic">Shagun</span> Story
              </h2>
              <div className="about-divider-premium"></div>
            </div>
            <div className="about-story__text">

              <p>
                Founded in the majestic city of Udaipur, <strong>Shagun THE BRIDAL COLLECTION</strong> was born 
                from a deep passion for bridal fashion and a desire to make every bride's dream come true. 
                What started as a small boutique has grown into one of the most trusted bridal destinations in Rajasthan.
              </p>
              <p>
                Our founder envisioned a space where brides could find everything they need under one roof — 
                from intricately embroidered lehengas and traditional paushak to modern pre-wedding gowns and 
                stunning bridal jewellery. Every piece in our collection is carefully curated to reflect the 
                rich cultural heritage of India while embracing contemporary design.
              </p>
              <p>
                At Shagun, we don't just sell outfits — we create experiences. Every bride who walks through 
                our doors receives personalized attention, expert styling advice, and the warmth of a family. 
                We understand that your wedding day is the most important day of your life, and we are honored 
                to be a part of it.
              </p>
            </div>
          </div>
          <div className="about-story__visual">
            <div className="about-story__frame premium-frame">
              <div className="about-story__frame-inner">
                <img src="/about/story-main.png" alt="Our Boutique" className="about-story__image" />
                <div className="about-story__overlay-glow"></div>
                <div className="about-story__decorative">शगुन</div>

                <div className="about-story__frame-badge">
                  <span>10+</span>
                  <small>Years of Excellence</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section section-dark about-process" ref={teamRef}>
        <div className="container">
          <SectionHeader
            subtitle="The Journey"
            title="Our Bridal Process"
            light
          />
          <div className={`about-process__grid ${teamInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {processes.map((p, i) => (
              <div className={`about-process__item process-color-${p.color}`} key={i}>
                <div className="about-process__step-wrapper">
                  <div className="about-process__step">{p.step}</div>
                  <div className="about-process__line"></div>
                </div>
                <div className="about-process__card glass-card-dark">
                  <div className="about-process__icon">{p.icon}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-values-creative" ref={valuesRef}>
        <div className="container">
          <SectionHeader
            subtitle="Our Philosophy"
            title="Values That Drive Us"
            description="These principles guide everything we do, from selecting fabrics to styling brides."
          />
          <div className={`about-values__creative-grid ${valuesInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {values.map((v, i) => (
              <div className={`about-values__creative-card value-color-${v.color}`} key={i}>
                <div className="value-card__bg-glow"></div>
                <div className="value-card__icon-wrapper">
                  {v.icon}
                </div>
                <div className="value-card__content">
                  <h4 className="value-card__title">{v.title}</h4>
                  <p className="value-card__desc">{v.desc}</p>
                </div>
                <div className="value-card__number">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage & Craftsmanship Section */}
      <section className="section section-heritage">
        <div className="container heritage-inner">
          <div className="heritage__visual">
            <div className="heritage__frame">
              <img src="/about/craft-detail.png" alt="Heritage Craftsmanship" className="heritage__main-img" />
              <div className="heritage__frame-accent"></div>
            </div>
            <div className="heritage__floating-badge animate-float">
              <span>Authentic</span>
              <small>Heritage Art</small>
            </div>
          </div>
          <div className="heritage__content">
            <div className="about-subtitle-creative heritage-subtitle">
              <Sparkles size={14} className="inline-block mr-2" />
              Preserving Traditions
            </div>
            <h2 className="about-title-creative heritage-title">
              Heritage <span className="text-golditalic">&</span> Craftsmanship
            </h2>
            <div className="heritage__grid">
              {crafts.map((c, i) => (
                <div className="heritage__item" key={i}>
                  <div className="heritage__item-dot"></div>
                  <div className="heritage__item-text">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section from Home */}
      <section className="section cta-section" id="cta-section">
        <div className="cta-section__bg">
          <img src="/hero/jewelry.png" alt="Premium Bridal Fashion" className="cta-section__bg-img" loading="lazy" />
          <div className="cta-section__overlay"></div>
          <div className="cta-section__glow cta-section__glow--1"></div>
          <div className="cta-section__glow cta-section__glow--2"></div>
          <div className="cta-section__particles"></div>
        </div>
        <div className="container cta-section__content animate-fade-in-up">
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
    </>
  );
}

export default About;
