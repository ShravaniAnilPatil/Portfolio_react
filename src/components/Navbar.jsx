import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css"; // Import your CSS styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SP</div>
      <ul className="nav-links">
        <li><a href="#about">Home</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

