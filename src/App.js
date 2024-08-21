import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Portfolio from './pages/Portfolio';
import Ecommerce from './pages/Ecommerce';
import Login from './pages/Login';
import Blog from './pages/Blog';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
 
 
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/portfolio" element={ <Portfolio/>} />
        <Route path="/shop" element={ <Ecommerce/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/blog" element={ <Blog/>} />
        <Route path="/dashboard" element={ <Dashboard/>} />
      </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
