// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Proyecto 1', description: 'Descripción del proyecto 1.' },
    { id: 2, title: 'Proyecto 2', description: 'Descripción del proyecto 2.' },
    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="container mt-4">
      <h1>Proyectos</h1>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6">
            <ProjectCard title={project.title} description={project.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

