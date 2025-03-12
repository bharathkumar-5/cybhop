import React from 'react';
import Illustration from '../assets/Illustration.png';

const RightContent = () => {
  const stats = [
    { label: 'Celesteela', amount: '2204.4 lbs', progress: 48 },
    { label: 'Cosmoem', amount: '2204.4 lbs', progress: 44 },
    { label: 'Primal Groudon', amount: '2204.4 lbs', progress: 34 },
    { label: 'Eternatus', amount: '2094.4 lbs', progress: 38 },
    { label: 'Groudon', amount: '2094.4 lbs', progress: 36 }
  ];


  return (
    <div className="right-content">
      <div className="stats-section">
        <h2> Heaviest Pokémon by weight</h2>
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
        <div className='image'>
          <img src={Illustration} alt="" />
          <img src="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/illustra.png" alt="Illustration" />
        </div>
        <h3>Save more money</h3>

        
        <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <button>VIEW TIPS</button>
      </div>
    </div>
  );
};

export default RightContent;
