import React from 'react';

const ExpenseItem = ({ icon, category, time, description, amount }) => (
  <div className="expense-item">
    <div className="expense-details">
      <img src={icon} alt={category} />
      <div>
        <h3>{category}</h3>
        <p>{`${time} • ${description}`}</p>
      </div>
    </div>
    <span>{amount}</span>
  </div>
);

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="header">
        <div>
          <h1>Expenses</h1>
          <p>01 - 25 March, 2020</p>
        </div>
        <img src="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/users.png" alt="users" />
      </div>
      <img src="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/stats.png" alt="statistics" className="stats" />
      <div className="expenses">
        <h2>Today</h2>
        <ExpenseItem 
          icon="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/group-4.png"
          category="Grocery"
          time="5:12 pm"
          description="Belanja di pasar"
          amount="-326.800"
        />
        <ExpenseItem 
          icon="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/group-4-2.png"
          category="Transportation"
          time="5:12 pm"
          description="Naik bus umum"
          amount="-15.000"
        />
        <ExpenseItem 
          icon="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/group-4-3.png"
          category="Housing"
          time="5:12 pm"
          description="Bayar Listrik"
          amount="-185.750"
        />
        <h2>Monday, 23 March 2020</h2>
        <ExpenseItem 
          icon="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/group-4-4.png"
          category="Food and Drink"
          time="5:12 pm"
          description="Makan Steak"
          amount="-156.000"
        />
        <ExpenseItem 
          icon="https://dashboard.codeparrot.ai/api/image/Z9Bt0ed_tb-16vI0/group-4-5.png"
          category="Entertainment"
          time="5:12 pm"
          description="Nonton Bioskop"
          amount="-35.200"
        />
      </div>
    </div>
  );
};

export default MainContent;
