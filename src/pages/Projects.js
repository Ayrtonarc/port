// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Proyecto 1', 
      description: 'Clasificador de huevos de gallina quebrados', 
      url: 'https://colab.research.google.com/drive/1Rf2tYcdXEOAkMZA-PZ8eL40jFOctSfhv?usp=sharing#scrollTo=K2q7uDw5tOTA' 
    },
    { 
      id: 2, 
      title: 'Proyecto 2', 
      description: 'Deteccion de fraudes en tarjetas de credito.', 
      url: 'https://colab.research.google.com/drive/1oj1xRZqEOqW0yT6iwctvKR_n6SYrn8BG?usp=sharing' 
    },
    { 
      id: 3, 
      title: 'Proyecto 3', 
      description: 'Deteccion de senales de transito', 
      url: 'https://colab.research.google.com/drive/1z3fXWqwhhKVYUEGnFbrywEIokPxOucFl?usp=sharing' 
    },
    { 
      id: 4, 
      title: 'Proyecto 4', 
      description: 'Descripción del proyecto 2.', 
      url: 'https://github.com/tuusuario/proyecto2' 
    },
    { 
      id: 5, 
      title: 'Proyecto 1', 
      description: 'Clasificador de huevos de gallina quebrados', 
      url: 'https://colab.research.google.com/drive/1Rf2tYcdXEOAkMZA-PZ8eL40jFOctSfhv?usp=sharing#scrollTo=K2q7uDw5tOTA' 
    },
    { 
      id: 6, 
      title: 'Proyecto 2', 
      description: 'Descripción del proyecto 2.', 
      url: 'https://github.com/tuusuario/proyecto2' 
    },
    { 
      id: 7, 
      title: 'Proyecto 3', 
      description: 'Descripción del proyecto 2.', 
      url: 'https://github.com/tuusuario/proyecto2' 
    },
    { 
      id: 8, 
      title: 'Proyecto 4', 
      description: 'Descripción del proyecto 2.', 
      url: 'https://github.com/tuusuario/proyecto2' 
    },

    // Agrega más proyectos según sea necesario
  ];

  return (
    <div className="container mt-4">
      <h1>Proyectos</h1>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6">
            <ProjectCard 
              title={project.title} 
              description={project.description} 
              url={project.url} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

