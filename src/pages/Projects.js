// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Clasificador de Huevos de Gallina Quebrados', 
      description: 'Modelo de aprendizaje profundo para clasificar huevos de gallina dañados utilizando visión por computadora.', 
      url: 'https://colab.research.google.com/drive/1Rf2tYcdXEOAkMZA-PZ8eL40jFOctSfhv?usp=sharing#scrollTo=K2q7uDw5tOTA' 
    },
    { 
      id: 2, 
      title: 'Detección de Fraudes en Tarjetas de Crédito', 
      description: 'Sistema basado en machine learning para identificar transacciones fraudulentas en tiempo real.', 
      url: 'https://colab.research.google.com/drive/1oj1xRZqEOqW0yT6iwctvKR_n6SYrn8BG?usp=sharing' 
    },
    { 
      id: 3, 
      title: 'Detección de Señales de Tránsito', 
      description: 'Modelo de clasificación de señales de tránsito utilizando redes neuronales convolucionales (CNN).', 
      url: 'https://colab.research.google.com/drive/1z3fXWqwhhKVYUEGnFbrywEIokPxOucFl?usp=sharing' 
    },
    { 
      id: 4, 
      title: 'Sistema de Gestión de Inventarios', 
      description: 'Aplicación web para gestionar inventarios utilizando Node.js, Express y PostgreSQL.', 
      url: 'https://github.com/tuusuario/proyecto-inventarios' 
    },
    { 
      id: 5, 
      title: 'Clasificación de Imágenes Médicas', 
      description: 'Proyecto de IA para clasificar imágenes médicas (MRI) y detectar anomalías.', 
      url: 'https://colab.research.google.com/drive/1Rf2tYcdXEOAkMZA-PZ8eL40jFOctSfhv?usp=sharing#scrollTo=K2q7uDw5tOTA' 
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Proyectos</h1>
      <p className="text-center lead">
        Aquí encontrarás una selección de proyectos que he desarrollado, utilizando tecnologías como Node.js, Express, PostgreSQL, y herramientas de inteligencia artificial.
      </p>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 mb-4">
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

