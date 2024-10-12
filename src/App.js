import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './App.css';
import girl from './images/girl-removebg-preview.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="hero-section">
        <div className="hero-content">
          <h1>I'm a Full Stack Developer</h1>
          <p>I have a passion for building web applications using modern technologies like React, Node.js, and MongoDB.</p>
          <a href="#about" className="cta-btn">About Me</a>
        </div>
        <img src={girl} alt="Developer" className="hero-image" />
      </header>
      <main>
       
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
       
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
