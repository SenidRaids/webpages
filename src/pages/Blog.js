import React from 'react';
import '../Styles/Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <header>
        <h1>Latest Blog Posts</h1>
      </header>
      <section className="posts">
        <article className="post">
          <h2>5 Tips to Improve Your React Skills</h2>
          <p>
            React is a powerful library for building user interfaces, but mastering it takes time and practice. Here are five tips to help you level up your React skills:
            <ul>
              <li>Understand the fundamentals: Make sure you have a solid grasp of JavaScript and ES6 features.</li>
              <li>Practice with small projects: Build simple applications to get hands-on experience.</li>
              <li>Read the official documentation: React's documentation is a valuable resource for learning and troubleshooting.</li>
              <li>Explore React hooks: Learn how to use hooks for managing state and side effects in functional components.</li>
              <li>Stay up to date: React is continuously evolving, so keep an eye on the latest updates and best practices.</li>
            </ul>
          </p>
          <a href="/blog/react-tips" className="read-more">Read More</a>
        </article>
        <article className="post">
          <h2>Understanding the MERN Stack: A Beginner's Guide</h2>
          <p>
            The MERN stack (MongoDB, Express.js, React, and Node.js) is a popular technology stack for building full-stack web applications. Here's a brief overview of each component:
            <ul>
              <li><strong>MongoDB:</strong> A NoSQL database that stores data in flexible, JSON-like documents.</li>
              <li><strong>Express.js:</strong> A minimal web application framework for Node.js, making it easier to handle HTTP requests and responses.</li>
              <li><strong>React:</strong> A JavaScript library for building user interfaces, allowing you to create reusable components.</li>
              <li><strong>Node.js:</strong> A JavaScript runtime that enables server-side scripting and the creation of scalable network applications.</li>
            </ul>
            By combining these technologies, you can build powerful and scalable web applications with a unified JavaScript codebase.
          </p>
          <a href="/blog/mern-guide" className="read-more">Read More</a>
        </article>
        <article className="post">
          <h2>The Importance of Responsive Design in Web Development</h2>
          <p>
            Responsive design ensures that your website looks good and functions well on all devices, from desktops to smartphones. Key principles of responsive design include:
            <ul>
              <li><strong>Fluid Grids:</strong> Use relative units like percentages instead of fixed units like pixels for layout elements.</li>
              <li><strong>Flexible Images:</strong> Ensure images resize appropriately by using CSS techniques like `max-width: 100%`.</li>
              <li><strong>Media Queries:</strong> Apply different styles based on device characteristics like screen width, resolution, and orientation.</li>
            </ul>
            Implementing responsive design improves user experience and accessibility, making your website more inclusive and user-friendly.
          </p>
          <a href="/blog/responsive-design" className="read-more">Read More</a>
        </article>
      </section>
    </div>
  );
};

export default Blog;
