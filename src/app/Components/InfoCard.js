import React from 'react';
import { BarChart2, Infinity } from 'lucide-react';
import "../CSS/Components/InfoCard.css";

const InfoGrid = () => {
  return (
    <div className="info-grid-container">
      <div className="info-grid">
        <InfoCard 
          title="Our Expertise" 
          icon={<BarChart2 size={48} />}
          items={[
            "Replacement Lighting and Sockets",
            "Wifi Fixing and Installation",
            "Hobs and Cookers",
            "Outside Lighting",
            "Fault Finding",
            "TV Installations",
            "Bathroom Extractor Fans",
          ]}
        />
        <InfoCard 
          title="Our Commitment" 
          icon={<Infinity size={48} />}
          items={[
            "Community Focus: We strive to support and uplift the Dublin 13 community through our services.",
            "Continuous Improvement: We keep ourselves updated with the latest industry standards and training to offer the best solutions.",
            "Customer-Centric Approach: Your needs come first, and we tailor our services to meet your specific requirements."
          ]}
        />
      </div>
    </div>
  );
};

const InfoCard = ({ title, icon, items }) => {
  return (
    <div className="info-card">
      <div className="info-card-header">
        {React.cloneElement(icon, { className: 'info-icon' })}
        <h2 className="info-card-title">{title}</h2>
      </div>
      <ul className="info-card-list">
        {items.map((item, index) => (
          <li key={index} className="info-list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoGrid;