import React from 'react';
import '../Styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Age Calculator',
      description: 'A tool that calculates age based on the provided date of birth.',
      link: '/age-calculator',
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
    <div className="portfolio-page">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
