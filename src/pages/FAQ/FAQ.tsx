import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useInView } from '../../hooks/useInView';
import { Plus, Minus, Phone, Sparkles, Tag, Calendar, Scissors, HelpCircle, ChevronRight, Search, MessageSquare, ArrowRight } from 'lucide-react';
import './FAQ.css';

interface FAQItemProps {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ index, question, answer, isOpen, onToggle }) => {
  const displayIndex = (index + 1).toString().padStart(2, '0');
  
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <div className="faq-item__number">{displayIndex}</div>
      <div className="faq-item__content-box">
        <button className="faq-item__question" onClick={onToggle} aria-expanded={isOpen}>
          <span>{question}</span>
          <span className="faq-item__icon">
            <Plus size={18} className={`plus-icon ${isOpen ? 'hidden' : ''}`} />
            <Minus size={18} className={`minus-icon ${!isOpen ? 'hidden' : ''}`} />
          </span>
        </button>
        <div className="faq-item__answer-wrapper">
          <div className="faq-item__answer">
            <p>{answer}</p>
            <div className="faq-item__answer-footer">
              <span className="helpful-text">Was this helpful?</span>
              <div className="helpful-actions">
                <button className="helpful-btn">Yes</button>
                <button className="helpful-btn">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>('collections-0');
  const [ref, inView] = useInView();

  const faqCategories = [
    {
      id: 'collections',
      name: 'Collections & Products',
      icon: <Sparkles size={20} />,
      faqs: [
        {
          q: 'What types of bridal outfits do you have?',
          a: 'We offer a wide range of bridal fashion including wedding lehengas, traditional Rajasthani paushak, pre-wedding gowns for photoshoots and receptions, and a curated collection of bridal jewellery to complete your look.',
        },
        {
          q: 'Do you offer bridal jewellery separately?',
          a: 'Yes, our bridal jewellery collection is available independently. You can rent or purchase individual pieces or complete sets including necklaces, earrings, maang tikka, bangles, and more.',
        },
        {
          q: 'Can I see the collection before booking?',
          a: 'Of course! You are welcome to visit our boutique at Orbit Garden Road, Udaipur for a complimentary browse. However, for a more personalized experience with dedicated styling assistance, we recommend booking an appointment.',
        },
      ]
    },
    {
      id: 'rental',
      name: 'Rental & Sale',
      icon: <Tag size={20} />,
      faqs: [
        {
          q: 'Do you offer bridal outfits on rent?',
          a: 'Yes! We offer both rent and sale options for our entire collection including wedding lehengas, paushak, pre-wedding gowns, and bridal jewellery. Renting is a great option for brides who want premium quality at an affordable price.',
        },
        {
          q: 'What is your return/exchange policy for rented items?',
          a: 'Rented items must be returned within the agreed-upon rental period in their original condition. A security deposit is required at the time of rental, which is fully refundable upon the return of items in good condition.',
        },
        {
          q: 'What is your price range?',
          a: 'Our collection caters to various budgets. Whether you are looking for a premium designer piece or an affordable rental option, we have something for everyone. Contact us for specific pricing details.',
        },
      ]
    },
    {
      id: 'booking',
      name: 'Booking & Appointments',
      icon: <Calendar size={20} />,
      faqs: [
        {
          q: 'How do I book a private appointment?',
          a: 'You can book a private appointment by calling us at 9950889370 or 9079757782, or by visiting our Contact page. We recommend booking in advance, especially during wedding season, to ensure dedicated attention.',
        },
        {
          q: 'How early should I book for my wedding?',
          a: 'We recommend booking at least 2-3 months before your wedding date, especially during peak wedding season (October to March). This gives us enough time for fittings, alterations, and any customizations.',
        },
      ]
    },
    {
      id: 'fitting',
      name: 'Fitting & Styling',
      icon: <Scissors size={20} />,
      faqs: [
        {
          q: 'Do you provide custom fitting and alterations?',
          a: 'Absolutely! We provide expert custom fitting and alterations for all our outfits. Our skilled tailors ensure every outfit fits you perfectly, so you feel comfortable and confident on your special day.',
        },
        {
          q: 'Do you provide home delivery?',
          a: 'Currently, we offer in-store services at our Udaipur boutique. This ensures the best fitting and styling experience. For special requests, please contact us directly.',
        },
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      (activeCategory === 'all' || category.id === activeCategory) &&
      (faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
       faq.a.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.faqs.length > 0);

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

      {/* FAQ Search & Filter */}
      <section className="section faq-interactive-container" ref={ref}>
        <div className="container">
          <div className="faq-header-wrapper">
            <SectionHeader
              subtitle="Explore Categories"
              title="How Can We Help You?"
              description="Browse our frequently asked questions organized by category to find exactly what you need."
            />
            
            {/* Search Bar */}
            <div className={`faq-search-wrapper ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="faq-search-input-container">
                <Search className="search-icon" size={20} />
                <input 
                  type="text" 
                  placeholder="Search for questions, keywords, or topics..." 
                  className="faq-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="search-clear" onClick={() => setSearchQuery('')}>×</button>
                )}
              </div>
              <div className="faq-search-tags">
                <span className="tag-label">Popular:</span>
                <button onClick={() => setSearchQuery('Jewellery')} className="search-tag">Jewellery</button>
                <button onClick={() => setSearchQuery('Rent')} className="search-tag">Rent</button>
                <button onClick={() => setSearchQuery('Appointment')} className="search-tag">Appointment</button>
                <button onClick={() => setSearchQuery('Fitting')} className="search-tag">Fitting</button>
              </div>
            </div>
          </div>

          <div className="faq-layout">
            {/* Category Sidebar */}
            <div className={`faq-sidebar ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="category-list">
                <button 
                  className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('all')}
                >
                  <div className="category-btn__icon">
                    <HelpCircle size={18} />
                  </div>
                  <span>All Questions</span>
                  <ChevronRight size={14} className="category-btn__arrow" />
                </button>
                {faqCategories.map((cat) => (
                  <button 
                    key={cat.id}
                    className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <div className="category-btn__icon">
                      {cat.icon}
                    </div>
                    <span>{cat.name}</span>
                    <ChevronRight size={14} className="category-btn__arrow" />
                  </button>
                ))}
              </div>

              {/* Quick Contact Card */}
              <div className="quick-help-card">
                <div className="quick-help-card__glow-wrap">
                  <div className="quick-help-card__glow-circle"></div>
                </div>
                <div className="quick-help-card__status">
                  <span className="status-dot"></span>
                  <span className="status-text">Live Support Available</span>
                </div>
                <div className="quick-help-card__icon-box">
                  <MessageSquare size={28} className="contact-icon-main" />
                </div>
                <h4>Can't find answer?</h4>
                <p>Our bridal consultants are online and ready to assist you in real-time.</p>
                <div className="quick-help-actions">
                  <a href="tel:9950889370" className="quick-help-link">
                    <Phone size={16} />
                    Call Us Now
                  </a>
                  <Link to="/contact" className="quick-help-btn-minimal">
                    Send Message <ArrowRight size={14} className="arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Questions Content */}
            <div className={`faq-main-content ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <div key={category.id} className="faq-category-section">
                    <div className="category-header-banner">
                      <h3 className="category-title-inline">
                        <span className="category-title-icon">{category.icon}</span>
                        {category.name}
                      </h3>
                      <span className="category-count">{category.faqs.length} Questions</span>
                    </div>
                    <div className="faq-items-grid">
                      {category.faqs.map((faq, i) => {
                        const itemKey = `${category.id}-${i}`;
                        return (
                          <FAQItem
                            key={itemKey}
                            index={i}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openIndex === itemKey}
                            onToggle={() => setOpenIndex(openIndex === itemKey ? null : itemKey)}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="faq-no-results">
                  <div className="no-results-icon">
                    <HelpCircle size={48} />
                  </div>
                  <h3>No matching questions found</h3>
                  <p>Try searching for different keywords or browse all categories.</p>
                  <button 
                    className="btn btn-outline" 
                    onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section from About/Home */}
      <section className="section cta-section" id="cta-section">
        <div className="cta-section__bg">
          <img src="/hero/jewelry.png" alt="Premium Bridal Fashion" className="cta-section__bg-img" loading="lazy" />
          <div className="cta-section__overlay"></div>
          <div className="cta-section__glow cta-section__glow--1"></div>
          <div className="cta-section__glow cta-section__glow--2"></div>
          <div className="cta-section__particles"></div>
        </div>
        <div className="container cta-section__content">
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
              <Link to="/contact" className="btn btn-gold cta-section__btn-primary">
                <Calendar size={18} />
                Book Your Appointment
              </Link>
              <a href="tel:9950889370" className="btn btn-outline cta-section__btn-secondary">
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

export default FAQ;
