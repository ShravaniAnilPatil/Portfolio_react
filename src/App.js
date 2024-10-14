import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './App.css';
import project3 from './images/cake.png'; 
import project4 from './images/travel.png';

function App() {
  const projects = [
    { id: 3, title: "The Cake World", description: "The Cake World", image: project3 },
    { id: 4, title: "Travel Buddy", description: "Travel Buddy", image: project4 },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects projects={projects} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
