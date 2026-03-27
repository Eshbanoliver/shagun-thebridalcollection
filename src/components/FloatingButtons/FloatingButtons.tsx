import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import './FloatingButtons.css';

const FloatingButtons: React.FC = () => {
  const phoneNumber = '919950889370';
  const whatsappMessage = encodeURIComponent('Hello! I am interested in your bridal collection. Please share more details.');

  return (
    <div className="floating-buttons" id="floating-buttons">
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn--whatsapp"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp"
      >
        <MessageCircle size={24} />
        <span className="floating-btn__label">WhatsApp</span>
      </a>

      <a
        href="tel:9950889370"
        className="floating-btn floating-btn--call"
        aria-label="Call us"
        id="floating-call"
      >
        <Phone size={22} />
        <span className="floating-btn__label">Call Now</span>
      </a>
    </div>
  );
}

export default FloatingButtons;
