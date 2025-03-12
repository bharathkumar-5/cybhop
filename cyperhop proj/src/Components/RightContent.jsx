import React from 'react';

const RightContent = () => {
  const stats = [
    { label: 'Food and Drinks', amount: '872.400', progress: 28 },
    { label: 'Shopping', amount: '1.378.200', progress: 44 },
    { label: 'Housing', amount: '928.500', progress: 36 },
    { label: 'Transportation', amount: '420.700', progress: 24 },
    { label: 'Vehicle', amount: '520.000', progress: 36 }
  ];

  return (
    <div className="right-content">
      <div className="stats-section">
        <h2>Where your money go?</h2>
        {stats.map((item, index) => (
          <div key={index} className="stat-item">
            <div className="stat-details">
              <span>{item.label}</span>
              <span>{item.amount}</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${item.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="tips-box">
        <img src="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/illustra.png" alt="Illustration" />
        <h3>Save more money</h3>

        
        <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <button>VIEW TIPS</button>
      </div>
    </div>
  );
};

export default RightContent;
