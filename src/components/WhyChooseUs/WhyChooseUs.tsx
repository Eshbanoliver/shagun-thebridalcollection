import React from 'react';
import { useInView } from '../../hooks/useInView';
import SectionHeader from '../SectionHeader/SectionHeader';
import { Trophy, CheckCircle2, Package, IndianRupee, Scissors, Star } from 'lucide-react';
import './WhyChooseUs.css';

interface WhyChooseUsProps {
  light?: boolean;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ light = false }) => {
  const [ref, inView] = useInView();
  const reasons = [
    { icon: <Trophy size={20} />, title: 'Trusted Brand', desc: 'Over a decade of creating beautiful bridal moments in Udaipur.', image: '/about/trusted.png' },
    { icon: <CheckCircle2 size={20} />, title: 'Rent & Sale', desc: 'Flexible options to fit every budget — rent or own your dream outfit.', image: '/about/rent.png' },
    { icon: <Package size={20} />, title: 'Complete Package', desc: 'Lehengas, gowns, paushak, and jewellery — everything under one roof.', image: '/about/package.png' },
    { icon: <IndianRupee size={20} />, title: 'Best Value', desc: 'Premium quality at fair prices with no hidden costs.', image: '/about/value.png' },
    { icon: <Scissors size={20} />, title: 'Custom Fitting', desc: 'Expert tailoring and alterations for a perfect, personalized fit.', image: '/about/fitting.png' },
    { icon: <Star size={20} />, title: 'VIP Experience', desc: 'Personal styling assistance and a luxurious shopping ambiance.', image: '/about/vip.png' },
  ];

  return (
    <section className="section why-choose" id="why-choose" ref={ref}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <SectionHeader
          subtitle="The Shagun Difference"
          title="Why Choose Us"
          description="We're not just a bridal store — we're your partner in creating memories that last a lifetime."
          light={light}
        />
        <div className={`why-choose__bento ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {reasons.map((reason, i) => (
            <div 
              className={`why-choose__card ${i === 0 || i === 5 ? 'why-choose__card--wide' : ''}`} 
              key={i}
            >
              <div className="why-choose__bg">
                <img src={reason.image} alt={reason.title} loading="lazy" />
                <div className="why-choose__overlay"></div>
              </div>

              <div className="why-choose__top-left">
                {reason.icon}
              </div>



              <div className="why-choose__content">
                <h4 className="why-choose__title">{reason.title}</h4>
                <p className="why-choose__desc">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
