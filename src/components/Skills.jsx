import React from "react";
import '../css/Skills.css';

function Skills() {
  const skills = [
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "Express", icon: "fas fa-server" },
    { name: "Git", icon: "fab fa-git" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "PostgreSQL", icon: "fas fa-database" }
  ];

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            <i className={skill.icon}></i>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
