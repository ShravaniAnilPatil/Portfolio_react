// import React from "react";
// import '../css/Projects.css';
// // import project1 from '../images/image.png';
// // import project2 from '../images/weather.png';
// import project3 from '../images/cake.png';
// import project4 from '../images/travel.png';

// function Projects() {
//   const projects = [
//     { id: 3, title: "Project Three", description: "This is project three description", image: project3 },
//     { id: 4, title: "Project Four", description: "This is project four description", image: project4 },
//   ];

//   return (
//     <div className="projects-container">
//       <h1>My Projects</h1>
//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div key={project.id} className="project-card">
//             <img src={project.image} alt={project.title} />
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;


import React from "react";
import '../css/Projects.css';

function Projects({ projects }) {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
