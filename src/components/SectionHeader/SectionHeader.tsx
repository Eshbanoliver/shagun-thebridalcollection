import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, description, light = false }) => {
  return (
    <div className={`section-header ${light ? 'section-header--light' : ''}`}>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <h2 className="section-title">{title}</h2>
      <div className="section-divider"></div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionHeader;
