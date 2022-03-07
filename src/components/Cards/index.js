import React from 'react';

import projectsDB from './projectsDB';



import "./styles.css"

function Cards() {
  return (
    <div className="container-card">
      {projectsDB.map(project => (
      <div className="card">
        <div className="image">
          <img src={project.background} alt={project.title} />
        </div>
        <div className="texto">
          <h3>{project.title}:</h3>
          <p>{project.description}</p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Cards;