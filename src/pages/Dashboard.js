import React, { useEffect, useState } from 'react';
import '../Styles/Dashboard.css';

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Load the logged-in user's data from localStorage when the component mounts
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    // Remove logged-in user data from localStorage
    localStorage.removeItem('loggedInUser');
    
    // Optionally redirect to login page
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="dashboard-page">
      <header>
        <h1>Admin Dashboard</h1>
        {loggedInUser && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </header>
      
      <section className="user-info">
        {loggedInUser ? (
          <>
            <h2>Welcome, {loggedInUser.username}</h2>
            <p>Email: {loggedInUser.email}</p>
          </>
        ) : (
          <p>No user is currently logged in.</p>
        )}
      </section>
      
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

