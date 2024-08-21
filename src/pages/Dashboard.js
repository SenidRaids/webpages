import React from 'react';
import '../Styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      <section className="stats">
        <div className="stat-card">Total Users: 50</div>
        <div className="stat-card">Total Sales: $2000</div>
      </section>
      <section className="actions">
        <button>Manage Users</button>
        <button>Manage Products</button>
      </section>
    </div>
  );
};

export default Dashboard;
