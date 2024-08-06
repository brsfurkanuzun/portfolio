import React from 'react';
import '../App.css'; // CSS dosyanızın yolu

const Timeline: React.FC = () => {
    const now = new Date();
  return (
    <div className="timeline-container">
      <div className="vertical-line"></div>
      <div className="date-marker" style={{ top: '20%' }}>{now.getFullYear()}</div>
      <div className="date-marker" style={{ top: '95%' }}>Born 1996</div>
      {/* Diğer tarihler için benzer elemanlar ekleyebilirsiniz */}
    </div>
  );
};

export default Timeline;
