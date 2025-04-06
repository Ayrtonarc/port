// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;