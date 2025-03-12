import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', isActive: false },
    { name: 'Expenses', isActive: true },
    { name: 'Wallets', isActive: false },
    { name: 'Summary', isActive: false },
    { name: 'Accounts', isActive: false },
    { name: 'Settings', isActive: false },
  ];

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/profile.png" alt="Profile" />
        <h1>Samantha</h1>
        <p>samantha@email.com</p>
      </div>
      <div className="menu-items">
        {menuItems.map((item) => (
          <h2 key={item.name} className={item.isActive ? 'active' : ''}>
            {item.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
