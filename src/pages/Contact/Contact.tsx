import React, { useState } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useInView } from '../../hooks/useInView';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin size={22} />,
      title: 'Visit Our Boutique',
      lines: ['Orbit Garden Road, Ganpati Vihar,', 'Pulan, Pulla Bhuwana, Pulla,', 'Rupsagar, Udaipur, Rajasthan 313001'],
    },
    {
      icon: <Phone size={22} />,
      title: 'Call Us',
      lines: ['9950889370', '9079757782'],
      links: true,
    },
    {
      icon: <Mail size={22} />,
      title: 'Email Us',
      lines: ['SHAGUNTHEBRIDALCOLLECTION@GMAIL.COM'],
      email: true,
    },
    {
      icon: <Clock size={22} />,
      title: 'Working Hours',
      lines: ['Mon – Sat: 10:00 AM – 8:00 PM', 'Sunday: By Appointment Only'],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__bg">
          <div className="contact-hero__overlay"></div>
        </div>
        <div className="contact-hero__content container">
          <span className="contact-hero__badge">✦ Get In Touch ✦</span>
          <h1 className="contact-hero__title">Let's Create Your<br />Bridal Dream</h1>
          <p className="contact-hero__subtitle">
            Visit our boutique or reach out — we'd love to help you find the perfect look.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section contact-info-section" ref={ref}>
        <div className="container">
          <div className="contact-info__grid">
            {contactInfo.map((info, i) => (
              <div 
                className={`contact-info__card glass-card ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} 
                key={i}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="contact-info__icon">{info.icon}</div>
                <h3 className="contact-info__title">{info.title}</h3>
                <div className="contact-info__lines">
                  {info.lines.map((line, j) => (
                    info.links ? (
                      <a key={j} href={`tel:${line}`} className="contact-info__link">{line}</a>
                    ) : info.email ? (
                      <a key={j} href={`mailto:${line}`} className="contact-info__link contact-info__email">{line.toLowerCase()}</a>
                    ) : (
                      <p key={j}>{line}</p>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            subtitle="Send a Message"
            title="Book Your Appointment"
            description="Fill the form below and our team will get back to you within 24 hours."
          />
          <div className="contact-form-section">
            <form className="contact-form glass-card" onSubmit={handleSubmit} id="contact-form">
              {submitted && (
                <div className="contact-form__success">
                  <CheckCircle2 size={18} className="inline-block mr-2 text-green-500" />
                  Thank you! Your message has been sent. We'll get back to you soon.
                </div>
              )}
              <div className="contact-form__grid">
                <div className="contact-form__group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="contact-service">Service Interested In</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="Wedding Lehenga">Wedding Lehenga</option>
                    <option value="Paushak">Paushak Collection</option>
                    <option value="Pre-Wed Gown">Pre-Wed Gown</option>
                    <option value="Bridal Jewellery">Bridal Jewellery</option>
                    <option value="Rental">Outfit Rental</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="contact-form__group contact-form__group--full">
                <label htmlFor="contact-message">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, preferred date, etc."
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary contact-form__submit" id="contact-submit-btn">
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section section-dark contact-map-section">
        <div className="container">
          <SectionHeader
            subtitle="Find Us"
            title="Visit Our Boutique"
            light
          />
          <div className="contact-map">
            <div className="contact-map__placeholder">
              <div className="contact-map__icon">
                <MapPin size={48} />
              </div>
              <h3>Shagun THE BRIDAL COLLECTION</h3>
              <p>Orbit Garden Road, Ganpati Vihar, Pulan, Pulla Bhuwana,<br />Pulla, Rupsagar, Udaipur, Rajasthan 313001</p>
              <a
                href="https://maps.google.com/?q=Orbit+Garden+Road+Ganpati+Vihar+Udaipur+Rajasthan+313001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold contact-map__btn"
                id="contact-map-btn"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
