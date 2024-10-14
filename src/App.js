import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import './App.css';
import project3 from './images/cake.png'; 
import project4 from './images/travel.png';

function App() {
  const projects = [
    { id: 3, title: "The Cake World", description: "The Cake World", image: project3 },
    { id: 4, title: "Travel Buddy", description: "Travel Buddy", image: project4 },
  ];
  const experiences = [
    {
      id: 1,
      title: 'Junior Business Analyst',
      company: 'Amdocs',
      date: 'Oct 2024 - Present',
      description: 'gather and analyze business requirements to design effective solutions while collaborating with stakeholders.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'IVP solutions',
      date: 'August 2023 - June 2024',
      description: 'Assisted in organizing events and managing logistics.',
    },
    {
      id: 3,
      title: 'Public Relations Officer',
      company: 'Quset IT',
      date: 'August 2022 - June 2023',
      description: 'Coordinating operations and managing events for the college council.',
    },
    {
      id: 4,
      title: 'Junior Operations Officer',
      company: 'CSI VESIT',
      date: 'August 2021 - June 2022',
      description: 'Assisted in organizing events and managing logistics.',
    },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<About name="Shravani Patil" />} /> 
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path ="/experience" element={<Experience experiences={experiences}/>}/>        
          </Routes>
      </div>
    </Router>
  );
}

export default App;
