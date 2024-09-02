// import React from 'react';
// import '../Styles/LandingPage.css';

// const LandingPage = () => {
//     return (
//       <div className="landing-page">
//         <header className="hero-section">
//           <h1>Welcome to Your Next Big Idea</h1>
//           <p>Empowering your vision with seamless technology and innovation.</p>
//           <button className="cta-button">Get Started</button>
//         </header>
  
//         <section className="intro">
//           <h2>Why Choose Us?</h2>
//           <p>
//             We are committed to transforming your ideas into a reality. Our team of experts
//             works tirelessly to ensure you get the best experience with top-notch solutions
//             tailored just for you.
//           </p>
//         </section>
  
//         <section className="features">
//           <h2>What We Offer</h2>
//           <ul>
//             <li>🌐 Comprehensive Web Solutions</li>
//             <li>⚙️ Seamless Integration & Automation</li>
//             <li>📈 Data-Driven Insights & Analytics</li>
//             <li>💼 Expert Consultation & Support</li>
//             <li>🚀 Scalable and Reliable Performance</li>
//           </ul>
//         </section>
  
//         <section className="testimonials">
//           <h2>What Our Clients Say</h2>
//           <div className="testimonial-cards">
//             <div className="testimonial-card">
//               <p>"This team exceeded our expectations and delivered beyond what we could imagine."</p>
//               <h3>— Jane Doe, CEO of InnovateTech</h3>
//             </div>
//             <div className="testimonial-card">
//               <p>"The level of professionalism and attention to detail was extraordinary."</p>
//               <h3>— John Smith, Founder of GrowthHive</h3>
//             </div>
//           </div>
//         </section>
//       <footer>
//         <p>&copy; 2024 My Website</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;
import React from 'react';
import '../Styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="overlay">
          <h1>Unleash Your Next Big Idea</h1>
          <p>Empowering your vision with seamless technology and innovation.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <section className="intro">
        <h2>Why Choose Us?</h2>
        <p>
          We are committed to transforming your ideas into reality. Our team of experts works
          tirelessly to ensure you get the best experience with top-notch solutions tailored just for you.
        </p>
      </section>

      <section className="features">
        <h2>What We Offer</h2>
        <ul>
          <li>🌐 Comprehensive Web Solutions</li>
          <li>⚙️ Seamless Integration & Automation</li>
          <li>📈 Data-Driven Insights & Analytics</li>
          <li>💼 Expert Consultation & Support</li>
          <li>🚀 Scalable and Reliable Performance</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"This team exceeded our expectations and delivered beyond what we could imagine."</p>
            <h3>— Jane Doe, CEO of InnovateTech</h3>
          </div>
          <div className="testimonial-card">
            <p>"The level of professionalism and attention to detail was extraordinary."</p>
            <h3>— John Smith, Founder of GrowthHive</h3>
          </div>
        </div>
      </section>
      
      <footer>
        <p>&copy; 2024 My Website | Designed with passion.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
