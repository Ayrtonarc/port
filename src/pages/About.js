// src/pages/About.js
import React from 'react';
import myPhoto from '../assets/images/foto.jpeg'; // keep or replace with your preferred image

const About = () => {
  const technical = [
    'Python, PyTorch',
    'Node.js, Express',
    'GraphQL, Apollo',
    'PostgreSQL, Sequelize',
    'Docker, Linux',
  ];

  const softSkills = [
    'Resolución de problemas',
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Adaptabilidad',
  ];

  return (
    <main className="container mt-4">
      <header className="mb-4">
        <h1 className="section-title text-center">Sobre mí</h1>
      </header>

      <section className="about-grid mb-5" style={{display: 'grid', gridTemplateColumns: '200px 1fr', gap: '1.25rem', alignItems: 'start'}}>
        <div className="about-media text-center">
          <img
            src={myPhoto}
            alt="Foto"
            style={{width: 160, height: 160, objectFit: 'cover', borderRadius: '999px'}}
          />
        </div>

        <div className="about-body">
          <p className="lead" style={{marginBottom: '0.75rem'}}>
            Soy Ayrton — ingeniero en TICS con foco en inteligencia artificial y sistemas web. Diseño modelos y servicios preparados para producción con cuidado por la calidad y la trazabilidad.
          </p>

          <div style={{display: 'flex', gap: '1rem', marginTop: '0.75rem', marginBottom: '1rem'}}>
            <div>
              <strong>+3</strong>
              <div className="muted">Años experiencia</div>
            </div>
            <div>
              <strong>10+</strong>
              <div className="muted">Proyectos</div>
            </div>
            <div>
              <strong>Producción</strong>
              <div className="muted">Deploys y mantenimiento</div>
            </div>
          </div>

          <p style={{marginTop: 0}}>Mi trabajo mezcla investigación aplicada con buenas prácticas de ingeniería: reproducibilidad, pipelines y observabilidad.</p>

          <div style={{marginTop: '1rem', display: 'flex', gap: '0.6rem'}}>
            <a className="btn btn-primary" href="#/contact">Contactar</a>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="section-subtitle">Habilidades técnicas</h2>
        <ul className="list-inline" style={{paddingLeft: 0, marginTop: '.5rem'}}>
          {technical.map((t, i) => (
            <li key={i} className="list-inline-item" style={{marginRight: '0.75rem', color: 'var(--muted)'}}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="section-subtitle">Habilidades blandas</h2>
        <ul style={{marginTop: '.5rem'}}>
          {softSkills.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="section-subtitle">Experiencia</h2>
        <ul className="timeline" style={{listStyle: 'none', paddingLeft: 0, marginTop: '.75rem', borderLeft: '2px solid rgba(0,0,0,0.06)'}}>
          <li style={{position: 'relative', padding: '0.6rem 0 0.6rem 1rem'}}>
            <span style={{position: 'absolute', left: -10, top: '0.9rem', width: 12, height: 12, background: 'var(--text)', borderRadius: '50%'}} aria-hidden="true" />
            <div style={{fontWeight: 700}}>2023 — 2025</div>
            <div><strong>Posgrado</strong> — investigación en detección de Alzheimer</div>
            <div className="muted">Desarrollo de redes neuronales y pipelines de validación para proyectos clínicos.</div>
          </li>

          <li style={{position: 'relative', padding: '0.6rem 0 0.6rem 1rem'}}>
            <span style={{position: 'absolute', left: -10, top: '0.9rem', width: 12, height: 12, background: 'var(--text)', borderRadius: '50%'}} aria-hidden="true" />
            <div style={{fontWeight: 700}}>2022</div>
            <div><strong>Plaeto</strong> — desarrollador back-end</div>
            <div className="muted">Optimización de sistemas, despliegues y monitorización.</div>
          </li>

          <li style={{position: 'relative', padding: '0.6rem 0 0.6rem 1rem'}}>
            <span style={{position: 'absolute', left: -10, top: '0.9rem', width: 12, height: 12, background: 'var(--text)', borderRadius: '50%'}} aria-hidden="true" />
            <div style={{fontWeight: 700}}>2016 — 2022</div>
            <div><strong>Soporte técnico</strong> — técnico de campo y atención al cliente</div>
            <div className="muted">Resolución de incidencias, mantenimiento y soporte de infraestructuras.</div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default About;

