// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Clasificador de huevos de gallina quebrados',
      description: 'Modelo de aprendizaje profundo para clasificar huevos dañados mediante visión por computadora.',
      url: 'https://colab.research.google.com/drive/1Rf2tYcdXEOAkMZA-PZ8eL40jFOctSfhv?usp=sharing#scrollTo=K2q7uDw5tOTA',
      icon: 'vision',
      category: 'Computer Vision',
      stack: 'PyTorch · CNN · Curación de datos',
      result: 'Acelera inspección visual en escenarios controlados.',
    },
    {
      id: 2,
      title: 'Detección de fraudes en tarjetas de crédito',
      description: 'Sistema basado en machine learning para identificar transacciones fraudulentas en tiempo real.',
      url: 'https://colab.research.google.com/drive/1oj1xRZqEOqW0yT6iwctvKR_n6SYrn8BG?usp=sharing',
      icon: 'fraud',
      category: 'Risk Analytics',
      stack: 'Python · Clasificación supervisada · Métricas',
      result: 'Priorización de eventos anómalos con mejor lectura de riesgo.',
    },
    {
      id: 3,
      title: 'Detección de señales de tránsito',
      description: 'Modelo de clasificación de señales de tránsito utilizando redes neuronales convolucionales.',
      url: 'https://colab.research.google.com/drive/1z3fXWqwhhKVYUEGnFbrywEIokPxOucFl?usp=sharing',
      icon: 'traffic',
      category: 'Perception',
      stack: 'CNN · Clasificación multicategoría · Validación',
      result: 'Base sólida para sistemas de asistencia visual.',
    },
  ];

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">Portafolio</span>
        <h1 className="page-title">Proyectos donde la técnica se conecta con un caso de uso concreto.</h1>
        <p className="page-lead">
          Selección breve de trabajo en machine learning, visión por computadora y sistemas de apoyo a decisiones. Cada proyecto busca resolver un problema específico sin adornos innecesarios.
        </p>
      </header>

      <section className="metric-grid">
        <article className="metric-card panel panel--pad">
          <strong>3</strong>
          <span>casos visibles y documentados</span>
        </article>
        <article className="metric-card panel panel--pad">
          <strong>IA aplicada</strong>
          <span>clasificación, detección y scoring</span>
        </article>
        <article className="metric-card panel panel--pad">
          <strong>Entregables claros</strong>
          <span>código reproducible y foco en utilidad</span>
        </article>
      </section>

      <section className="section-block">
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;

