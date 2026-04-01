import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useInView } from '../../hooks/useInView';
import { Plus, Minus, Phone } from 'lucide-react';
import './FAQ.css';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{question}</span>
        <span className="faq-item__icon">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div className="faq-item__answer-wrapper">
        <div className="faq-item__answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, inView] = useInView();

  const faqs = [
    {
      q: 'Do you offer bridal outfits on rent?',
      a: 'Yes! We offer both rent and sale options for our entire collection including wedding lehengas, paushak, pre-wedding gowns, and bridal jewellery. Renting is a great option for brides who want premium quality at an affordable price.',
    },
    {
      q: 'How do I book a private appointment?',
      a: 'You can book a private appointment by calling us at 9950889370 or 9079757782, or by visiting our Contact page. We recommend booking in advance, especially during wedding season, to ensure dedicated attention.',
    },
    {
      q: 'What types of bridal outfits do you have?',
      a: 'We offer a wide range of bridal fashion including wedding lehengas, traditional Rajasthani paushak, pre-wedding gowns for photoshoots and receptions, and a curated collection of bridal jewellery to complete your look.',
    },
    {
      q: 'Do you provide custom fitting and alterations?',
      a: 'Absolutely! We provide expert custom fitting and alterations for all our outfits. Our skilled tailors ensure every outfit fits you perfectly, so you feel comfortable and confident on your special day.',
    },
    {
      q: 'Can I see the collection before booking?',
      a: 'Of course! You are welcome to visit our boutique at Orbit Garden Road, Udaipur for a complimentary browse. However, for a more personalized experience with dedicated styling assistance, we recommend booking an appointment.',
    },
    {
      q: 'Do you offer bridal jewellery separately?',
      a: 'Yes, our bridal jewellery collection is available independently. You can rent or purchase individual pieces or complete sets including necklaces, earrings, maang tikka, bangles, and more.',
    },
    {
      q: 'What is your price range?',
      a: 'Our collection caters to various budgets. Whether you are looking for a premium designer piece or an affordable rental option, we have something for everyone. Contact us for specific pricing details.',
    },
    {
      q: 'How early should I book for my wedding?',
      a: 'We recommend booking at least 2-3 months before your wedding date, especially during peak wedding season (October to March). This gives us enough time for fittings, alterations, and any customizations.',
    },
    {
      q: 'Do you provide home delivery?',
      a: 'Currently, we offer in-store services at our Udaipur boutique. This ensures the best fitting and styling experience. For special requests, please contact us directly.',
    },
    {
      q: 'What is your return/exchange policy for rented items?',
      a: 'Rented items must be returned within the agreed-upon rental period in their original condition. A security deposit is required at the time of rental, which is fully refundable upon the return of items in good condition.',
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="faq-hero">
        <div className="faq-hero__bg">
          <div className="faq-hero__overlay"></div>
        </div>
        <div className="faq-hero__content container">
          <span className="faq-hero__badge">✦ Help Center ✦</span>
          <h1 className="faq-hero__title">Frequently Asked<br />Questions</h1>
          <p className="faq-hero__subtitle">
            Everything you need to know about our bridal collection and services.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section section-gradient" ref={ref}>
        <div className="container">
          <SectionHeader
            subtitle="Got Questions?"
            title="We've Got Answers"
            description="Find answers to the most common questions about our bridal fashion services."
          />
          <div className={`faq-list ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section faq-cta">
        <div className="faq-cta__bg"></div>
        <div className="container faq-cta__content">
          <h2>Still Have Questions?</h2>
          <p>We'd love to hear from you. Reach out and our team will get back to you shortly.</p>
          <div className="faq-cta__actions">
            <Link to="/contact" className="btn btn-gold" id="faq-contact-btn">
              Contact Us
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

export default FAQ;
