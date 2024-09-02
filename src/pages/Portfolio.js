 
import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Age Calculator',
      description: 'A tool that calculates age based on the provided date of birth.',
      link: 'Age Calculator',
    },
    {
      title: 'Arithmetic Calculator',
      description: 'A basic calculator that performs arithmetic operations like addition, subtraction, multiplication, and division.',
      link: '/arithmetic-calculator',
    },
    {
      title: 'BMI Calculator',
      description: 'A calculator that computes Body Mass Index (BMI) based on height and weight inputs.',
      link: '/bmi-calculator',
    },
  ];

  return (
    <motion.div 
      className="portfolio-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header>
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My Portfolio
        </motion.h1>
      </header>
      <section className="projects">
        <motion.h2
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Projects
        </motion.h2>
        <motion.div 
          className="project-cards"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">View Project</a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
