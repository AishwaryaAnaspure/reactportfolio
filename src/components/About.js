import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        I grew up in Aurangabad, Maharashtra, where my curiosity for technology began. I pursued a B.Tech in Computer Science and Engineering from Marathwada Institute of Technology, After a Diploma in Computer Science and Engineering from MGM's Polytechnic. My passion for frontend development led me to complete an extensive HTML, CSS, JavaScript, and React course with Masai School, sponsored by KSFI. I'm always eager to learn and grow as a developer.
      </p>
      <h2>Education</h2>
      <ul>
      <li>Extensive HTML, CSS, JavaScript & React course with Masai School (sponsored by KSFI)(Sept 2024 - Feb 2025)</li>
        <li>B.Tech in Computer Science & Engineering, Marathwada Institute of Technology (2018-2021)</li>
        <li>Diploma in Computer Science and Engineering, MGM's Polytechnic (2015-2018)</li>
      </ul>
      <h2>Certifications</h2>
      <ul>
        <li>UI/UX Design Bootcamp with upGrad (4 months)</li>
      </ul>
      <h2>Soft Skills</h2>
      <div className="skill-bar">
        <span>Communication</span>
        <div className="bar"><div className="level" style={{ width: '90%' }}></div></div>
      </div>
      <div className="skill-bar">
        <span>Teamwork</span>
        <div className="bar"><div className="level" style={{ width: '85%' }}></div></div>
      </div>
      <div className="skill-bar">
        <span>Problem-Solving</span>
        <div className="bar"><div className="level" style={{ width: '95%' }}></div></div>
      </div>
      <div className="skill-bar">
        <span>Adaptability</span>
        <div className="bar"><div className="level" style={{ width: '80%' }}></div></div>
      </div>
      <div className="skill-bar">
        <span>Time Management</span>
        <div className="bar"><div className="level" style={{ width: '85%' }}></div></div>
      </div>
    </div>
  );
};

export default About;