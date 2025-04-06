// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, url }) => {
  return (
    <div className="project-card"> {/* Usamos la clase definida en App.css */}
      <h5>{title}</h5> {/* Título estilizado con .project-card h5 */}
      <p>{description}</p> {/* Descripción estilizada con .project-card p */}
      {url && (
        <a 
          href={url} 
          className="btn" /* Botón estilizado con .project-card a */
          target="_blank" 
          rel="noopener noreferrer"
        >
          Ver Proyecto
        </a>
      )}
    </div>
  );
};

export default ProjectCard;