import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import './ScrollToTop.css';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      id="scroll-to-top-btn"
    >
      <ChevronUp size={24} />
    </button>
  );
}

export default ScrollToTop;
