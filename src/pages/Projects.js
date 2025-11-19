// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Clasificador de Huevos de Gallina Quebrados', 
      description: 'Modelo de aprendizaje profundo para clasificar huevos de gallina dañados utilizando visión por computadora.', 
      url: 'https://colab.research.google.com/drive/1Rf2tYcdXEOAkMZA-PZ8eL40jFOctSfhv?usp=sharing#scrollTo=K2q7uDw5tOTA',
      icon: 'vision'
    },
    { 
      id: 2, 
      title: 'Detección de Fraudes en Tarjetas de Crédito', 
      description: 'Sistema basado en machine learning para identificar transacciones fraudulentas en tiempo real.', 
      url: 'https://colab.research.google.com/drive/1oj1xRZqEOqW0yT6iwctvKR_n6SYrn8BG?usp=sharing',
      icon: 'fraud'
    },
    { 
      id: 3, 
      title: 'Detección de Señales de Tránsito', 
      description: 'Modelo de clasificación de señales de tránsito utilizando redes neuronales convolucionales (CNN).', 
      url: 'https://colab.research.google.com/drive/1z3fXWqwhhKVYUEGnFbrywEIokPxOucFl?usp=sharing',
      icon: 'traffic'
    },
  ];

  return (
    <div className="container mt-4" style={{position: 'relative', overflow: 'visible'}}>
        {/* Decorative vectors (subtle, aria-hidden) */}
        <div aria-hidden="true" style={{position: 'absolute', right: -40, top: -40, width: 320, height: 320, pointerEvents: 'none', opacity: 0.06}}>
          <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#000" stopOpacity="0.08" />
                <stop offset="1" stopColor="#000" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="36" fill="url(#g1)" />
            <path d="M10 160 C 60 100, 140 220, 190 120" stroke="#000" strokeOpacity="0.04" strokeWidth="6" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="text-center mb-4">Proyectos</h1>
        <p className="text-center muted" style={{maxWidth: 720, margin: '0 auto 1.25rem'}}>
          Selección de proyectos relevantes. Para ver más detalles, contacta directamente.
        </p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((project) => (
          <div key={project.id} className="col">
            <ProjectCard 
              title={project.title} 
              description={project.description} 
              url={project.url} 
              icon={project.icon}
            />
          </div>
        ))}
      </div>

      <div aria-hidden="true" style={{position: 'absolute', left: -60, bottom: -40, width: 240, height: 240, pointerEvents: 'none', opacity: 0.05}}>
          <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#000" strokeOpacity="0.03" strokeWidth="8" />
            <g fill="#000" fillOpacity="0.03">
              <rect x="20" y="20" width="30" height="30" rx="6" />
              <rect x="150" y="150" width="20" height="20" rx="4" />
            </g>
          </svg>
        </div>
    </div>
  );
};

export default Projects;

