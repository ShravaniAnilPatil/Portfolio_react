import React from "react";
import '../css/Skills.css';

function Skills() {
  const skills = ["React", "Node.js", "JavaScript", "HTML", "CSS", "MongoDB", "Express", "Git", "Docker", "PostgreSQL"];

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
