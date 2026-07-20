// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/images/foto.jpeg';

const About = () => {
  const technical = [
    'Python y PyTorch',
    'Node.js, Express y GraphQL',
    'PostgreSQL y Sequelize',
    'Docker y Linux',
    'Pipelines de validación y despliegue',
  ];

  const principles = [
    'Pensamiento estructurado y resolución de problemas.',
    'Comunicación clara entre negocio, diseño y desarrollo.',
    'Interés por la trazabilidad y la mantenibilidad del código.',
    'Capacidad para moverme entre soporte, producto y backend.',
  ];

  const timeline = [
    {
      period: '2026 — Presente',
      title: 'Doctorado en Ciencias de la Computación',
      detail: 'Investigación doctoral',
      description: 'Investigación avanzada en ciencias de la computación con foco en inteligencia artificial y sistemas clínicos.',
    },
    {
      period: '2026 — Presente',
      title: 'IT Support Hospitalario',
      detail: 'Soporte técnico y colaboración internacional',
      description: 'Soporte IT a un hospital con herramientas de diagnóstico y gestión. Colaboración con un equipo internacional para el cálculo de métricas clínicas y operativas.',
    },
    {
      period: '2023 — 2025',
      title: 'Posgrado',
      detail: 'Investigación en detección de Alzheimer',
      description: 'Desarrollo de redes neuronales y pipelines de validación para proyectos clínicos.',
    },
    {
      period: '2022',
      title: 'Plaeto',
      detail: 'Desarrollador back-end',
      description: 'Optimización de sistemas, despliegues y monitorización.',
    },
    {
      period: '2016 — 2022',
      title: 'Soporte técnico',
      detail: 'Técnico de campo y atención al cliente',
      description: 'Resolución de incidencias, mantenimiento y soporte de infraestructuras.',
    },
  ];

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">Perfil</span>
        <h1 className="page-title">Ingeniería orientada a producto, investigación aplicada y ejecución sobria.</h1>
        <p className="page-lead">
          Mi perfil combina inteligencia artificial, backend y experiencia operativa. Me interesa construir sistemas que se puedan usar, mantener y escalar sin ruido innecesario.
        </p>
      </header>

      <section className="content-split content-split--about">
        <aside className="panel panel--pad profile-card">
          <img src={myPhoto} alt="Retrato de Ayrton Santos" className="profile-card__image" loading="lazy" />

          <div className="metric-grid metric-grid--compact">
            <div className="metric-card">
              <strong>+3</strong>
              <span>años mezclando IA, backend y soporte</span>
            </div>
            <div className="metric-card">
              <strong>10+</strong>
              <span>proyectos académicos y aplicados</span>
            </div>
            <div className="metric-card">
              <strong>End-to-end</strong>
              <span>de la idea al despliegue</span>
            </div>
          </div>
        </aside>

        <section className="panel panel--pad">
          <p className="panel-kicker">Resumen</p>
          <p className="content-block">
            Soy ingeniero en TICs con foco en inteligencia artificial y sistemas web. Diseño modelos y servicios preparados para producción con atención por la calidad, la legibilidad y la trazabilidad.
          </p>
          <p className="content-block">
            Vengo de una mezcla útil: investigación aplicada, desarrollo backend y años de soporte técnico. Eso me permite aterrizar soluciones que no sólo funcionan en demo, sino también en operación real.
          </p>

          <div className="tag-list">
            {technical.map((item) => (
              <span key={item} className="tag">{item}</span>
            ))}
          </div>

          <div className="inline-actions">
            <Link className="btn btn-primary" to="/contact">Contactar</Link>
            <Link className="btn btn-secondary" to="/projects">Ver proyectos</Link>
          </div>
        </section>
      </section>

      <section className="section-block">
        <div className="detail-grid">
          <article className="panel panel--pad">
            <p className="panel-kicker">Forma de trabajo</p>
            <ul className="bullet-list">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Experiencia</span>
            <h2 className="section-title">Cronología reciente</h2>
          </div>
        </div>

        <ol className="timeline-list">
          {timeline.map((item) => (
            <li key={item.period} className="timeline-item panel panel--pad">
              <p className="timeline-item__period">{item.period}</p>
              <h3 className="timeline-item__title">{item.title}</h3>
              <p className="timeline-item__detail">{item.detail}</p>
              <p className="timeline-item__description">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

    </main>
  );
};

export default About;

