import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ProjectCard from '../components/ProjectCard';
import heroImg from '../assets/images/concord.png';

const Home = () => {
  const focusAreas = [
    {
      title: 'IA aplicada',
      description: 'Del prototipo al entorno real: visión por computadora, clasificación y evaluación con trazabilidad.',
    },
    {
      title: 'Backend robusto',
      description: 'APIs, bases de datos y servicios pensados para mantenerse claros, versionables y escalables.',
    },
    {
      title: 'Producto utilizable',
      description: 'Interfaces sobrias, decisiones de UX pragmáticas y foco en que el sistema sirva a usuarios reales.',
    },
  ];

  const skills = [
    {
      id: 1,
      title: 'Inteligencia Artificial',
      items: [
        'Deep Learning con PyTorch',
        'Procesamiento de imágenes médicas (MRI)',
        'Diseño de datasets personalizados',
        'Preprocesamiento de datos clínicos (CDR)',
        'Evaluación con métricas clínicas',
        'Automatización de logs con pandas',
        'Entrenamiento en GPU con CUDA',
      ],
    },
    {
      id: 2,
      title: 'Desarrollo Web',
      items: [
        'Node.js y Express',
        'GraphQL y Apollo Server',
        'Sequelize ORM y PostgreSQL',
        'Git y GitHub',
        'Docker y entornos Linux',
        'Metodologías ágiles',
        'Mantenimiento y observabilidad',
        'Arquitecturas orientadas a servicio',
      ],
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Clasificador de huevos quebrados',
      description: 'Modelo visual para distinguir daño físico con foco en inferencia clara y dataset curado.',
      url: 'https://colab.research.google.com/drive/1Rf2tYcdXEOAkMZA-PZ8eL40jFOctSfhv?usp=sharing#scrollTo=K2q7uDw5tOTA',
      icon: 'vision',
      category: 'Computer Vision',
      stack: 'PyTorch · CNN · Dataset propio',
      result: 'Clasificación útil para escenarios de inspección rápida.',
    },
    {
      id: 2,
      title: 'Detección de fraude en tarjetas',
      description: 'Pipeline de machine learning para evaluar transacciones con criterio de riesgo y priorización.',
      url: 'https://colab.research.google.com/drive/1oj1xRZqEOqW0yT6iwctvKR_n6SYrn8BG?usp=sharing',
      icon: 'fraud',
      category: 'Machine Learning',
      stack: 'Python · Scikit-learn · Feature engineering',
      result: 'Mejora la lectura de patrones anómalos en tiempo real.',
    },
  ];

  const serviceHighlights = [
    'Diseño y construcción de MVPs técnicos',
    'Automatización y optimización de flujos de datos',
    'Integración de modelos de IA a productos reales',
    'Soporte técnico, mantenimiento y mejora continua',
  ];

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="page-shell home-hero__grid">
          <div className="home-hero__copy">
            <span className="eyebrow">Ayrton Santos · AI Engineer · Backend Developer</span>
            <h1 className="page-title home-hero__title">Construyo experiencias digitales sobrias y sistemas listos para el mundo real.</h1>
            <p className="page-lead home-hero__lead">
              Trabajo entre inteligencia artificial, backend y UX funcional para convertir ideas técnicas en productos claros, mantenibles y útiles.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">Hablemos</Link>
              <Link className="btn btn-secondary" to="/projects">Ver proyectos</Link>
            </div>

            <div className="hero-stat-grid">
              <article className="hero-stat panel panel--pad">
                <span className="hero-stat__label">Especialidad</span>
                <strong>IA + backend</strong>
              </article>
              <article className="hero-stat panel panel--pad">
                <span className="hero-stat__label">Enfoque</span>
                <strong>Claridad y rigor</strong>
              </article>
              <article className="hero-stat panel panel--pad">
                <span className="hero-stat__label">Modo de trabajo</span>
                <strong>Producto + producción</strong>
              </article>
            </div>
          </div>

          <div className="home-hero__visual panel">
            <div className="home-hero__image-wrap">
              <img src={heroImg} alt="Proyecto visual de portada" className="home-hero__image" loading="lazy" />
            </div>
            <div className="home-hero__note">
              <span className="home-hero__note-label">Ahora mismo</span>
              <p>Explorando visión computacional, productos basados en IA y experiencias web más limpias y mantenibles.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Qué aporto</span>
            <h2 className="section-title">Tres líneas de trabajo bien aterrizadas</h2>
          </div>
          <p className="section-caption">La idea no es sólo construir algo bonito, sino algo que funcione, escale y se entienda.</p>
        </div>

        <div className="feature-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="feature-card panel panel--pad">
              <p className="panel-kicker">{area.title}</p>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Capacidades</span>
            <h2 className="section-title">Habilidades que ya están listas para producción</h2>
          </div>
        </div>

        <div className="expertise-grid">
            {skills.map((skill) => (
              <article key={skill.id} className="skill-panel panel panel--pad">
                <p className="panel-kicker">{skill.title}</p>
                <ul className="bullet-list skill-panel__list">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
        </div>
      </section>

      <section className="page-shell section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Trabajo seleccionado</span>
            <h2 className="section-title">Casos que mezclan datos, producto y criterio técnico</h2>
          </div>
          <Link to="/projects" className="btn btn-secondary">Ver todos</Link>
        </div>

        <div className="card-grid home-project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section className="page-shell section-block">
        <div className="cta-band panel panel--pad">
          <div>
            <span className="eyebrow">Servicios</span>
            <h2 className="section-title">Acompaño desde el diagnóstico técnico hasta la entrega funcional.</h2>
            <ul className="bullet-list cta-band__list">
              {serviceHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="cta-band__actions">
            <Link className="btn btn-primary" to="/services">Explorar servicios</Link>
            <Link className="btn btn-secondary" to="/about">Conocer perfil</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
