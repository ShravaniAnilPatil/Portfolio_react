import React from 'react';
import '../css/Experience.css'; 

function Experience({ experiences }) {
  const handleCardClick = (title) => {
    alert(`You clicked on ${title}!`);
  };

  return (
    <div className="experience-section">
      <h1>My Experience</h1>
      <div className="experience-container">
        {experiences.map((experience) => (
          <div
            className="experience-card"
            key={experience.id}
            onClick={() => handleCardClick(experience.title)}
          >
            <h2>{experience.title}</h2>
            <p>{experience.company}</p>
            <span>{experience.date}</span>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
