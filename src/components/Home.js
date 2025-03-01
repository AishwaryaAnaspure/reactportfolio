import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from './profile.jpg';
import project1Image from './project1.jpg';
import project2Image from './project2.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home container">
      <div className="intro">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <div className="intro-text">
          <h1>Hi, I'm Aishwarya Milind Anaspure</h1>
          <p className="intro-role">Frontend Developer (React)</p>

          <p className="intro-description">
            A passionate Frontend Developer specializing in React.js, with expertise in JavaScript, HTML, and CSS. I create responsive, user-friendly interfaces and integrate with RESTful APIs. Always eager to learn and adapt to new technologies.
          </p>
          <a href="/resume.pdf" download className="download-resume">Download Resume</a>
        </div>
        <div className="tech-stack">
          <h2>Tech Stack</h2>
          <div className="tech-stack-images">
            <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML5" />
            <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" />
            <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" />
            <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
            <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" />
            <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" />
          </div>
        </div>
      </div>
      <div className="project-preview">
        <h2>Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <Link to="/projects">
              <img src={project1Image} alt="Quiz App" className="project-image" />
            </Link>
            <h3><Link to="/projects">Quiz App</Link></h3>
            <p>A dynamic quiz application built with React.</p>
          </div>
          <div className="project-card">
            <Link to="/projects">
              <img src={project2Image} alt="Bookstore Management" className="project-image" />
            </Link>
            <h3><Link to="/projects">Bookstore Management</Link></h3>
            <p>A CRUD application for managing books and authors.</p>
          </div>
        </div>
        <Link to="/projects" className="view-more-button">View More →</Link>
      </div>
    </div>
  );
};

export default Home;