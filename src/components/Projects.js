import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-card">
        <h2>Quiz App</h2>
        <p><strong>Description:</strong> Developed a dynamic quiz application using React to test users' knowledge on various topics.</p>
        <p><strong>Tech Stack:</strong> JavaScript, React, Git, Node.js, HTML5, CSS3, Responsive Web Design.</p>
        <div className="project-buttons">
          <a href="https://github.com/AishwaryaAnaspure/QuizApp" target="_blank" rel="noopener noreferrer" className="github-button">GitHub Repo</a>
          <a href="https://quiz-app.com" target="_blank" rel="noopener noreferrer" className="live-button">Live Project</a>
        </div>
      </div>
      <div className="project-card">
        <h2>Bookstore Management Application</h2>
        <p><strong>Description:</strong> Developed a bookstore management application using React, enabling CRUD operations for books and authors.</p>
        <p><strong>Tech Stack:</strong> React, JavaScript, HTML5, CSS3, Responsive Web Design, Git.</p>
        <div className="project-buttons">
          <a href="https://github.com/AishwaryaAnaspure/BookStoreManagement" target="_blank" rel="noopener noreferrer" className="github-button">GitHub Repo</a>
          <a href="https://bookstore-app.com" target="_blank" rel="noopener noreferrer" className="live-button">Live Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;