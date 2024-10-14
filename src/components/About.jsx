import React from 'react';
import '../css/About.css';
import girl from '../images/girl-removebg-preview.png'

function About() {
  return (
    <div className="about-container">
     <header className="hero-section">
          <div className="hero-content">
            <h1>I'm a Full Stack Developer</h1>
            <p>I have a passion for building web applications using modern technologies like React, Node.js, and MongoDB.</p>
            <a href="/about" className="cta-btn">About Me</a>
          </div>
          <img src={girl} alt="Developer" className="hero-image" />
        </header>
    </div>
  );
}

export default About;
