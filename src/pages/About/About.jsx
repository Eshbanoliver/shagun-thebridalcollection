import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useInView } from '../../hooks/useInView';
import './About.css';

function About() {
  const [storyRef, storyInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [teamRef, teamInView] = useInView();

  const values = [
    { icon: '💎', title: 'Premium Quality', desc: 'We source and craft only the finest fabrics, ensuring every piece meets the highest standards of bridal fashion.' },
    { icon: '🎨', title: 'Artistic Excellence', desc: 'Each ensemble is a masterpiece of traditional artistry blended with contemporary design sensibility.' },
    { icon: '🤝', title: 'Personal Touch', desc: 'We believe in building relationships, not just transactions. Every bride receives dedicated, personalized attention.' },
    { icon: '✨', title: 'Innovation', desc: 'Staying ahead of trends while honoring timeless traditions that define Indian bridal wear.' },
  ];

  const milestones = [
    { year: '2015', title: 'The Beginning', desc: 'Shagun THE BRIDAL COLLECTION opened its doors in Udaipur with a vision to redefine bridal fashion.' },
    { year: '2018', title: 'Growing Reputation', desc: 'Expanded our collection to include pre-wedding gowns and an exclusive jewellery line.' },
    { year: '2021', title: 'Rent Service Launched', desc: 'Introduced our popular rental service, making luxury bridal wear accessible to all.' },
    { year: '2024', title: '2000+ Happy Brides', desc: 'Celebrated the milestone of dressing over 2000 brides across Rajasthan and beyond.' },
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
      <section className="section section-gradient" ref={storyRef}>
        <div className={`container about-story ${storyInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="about-story__content">
            <SectionHeader
              subtitle="Our Journey"
              title="The Shagun Story"
            />
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
            <div className="about-story__frame">
              <div className="about-story__frame-inner">
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

      {/* Timeline */}
      <section className="section section-dark about-timeline" ref={teamRef}>
        <div className="container">
          <SectionHeader
            subtitle="Milestones"
            title="Our Journey Through the Years"
            light
          />
          <div className={`about-timeline__grid ${teamInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {milestones.map((m, i) => (
              <div className="about-timeline__item" key={i}>
                <div className="about-timeline__year">{m.year}</div>
                <div className="about-timeline__line"></div>
                <div className="about-timeline__card glass-card-dark">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-cream" ref={valuesRef}>
        <div className="container">
          <SectionHeader
            subtitle="Our Philosophy"
            title="Values That Drive Us"
            description="These principles guide everything we do, from selecting fabrics to styling brides."
          />
          <div className={`about-values__grid ${valuesInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {values.map((v, i) => (
              <div className="about-values__card glass-card" key={i}>
                <span className="about-values__icon">{v.icon}</span>
                <h4 className="about-values__title">{v.title}</h4>
                <p className="about-values__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="about-cta__bg"></div>
        <div className="container about-cta__content">
          <h2 className="about-cta__title">Ready to Find Your Dream Bridal Look?</h2>
          <p className="about-cta__desc">
            Visit our boutique in Udaipur and let us help you discover the perfect ensemble for your special day.
          </p>
          <div className="about-cta__actions">
            <Link to="/contact" className="btn btn-gold" id="about-cta-btn">
              Schedule a Visit
            </Link>
            <Link to="/services" className="btn btn-secondary" id="about-services-btn">
              Browse Collections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
