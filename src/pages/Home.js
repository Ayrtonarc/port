import React from 'react';
import './Home.css'; // Asegúrate de crear e importar este archivo CSS
import ProjectCard from '../components/ProjectCard';
import heroImg from '../assets/images/concord.png';

const Home = () => {
  const skills = [
    {
      id: 1,
      title: 'Inteligencia Artificial',
      items: [
        { text: 'Deep Learning con PyTorch', icon: 'bi-cpu' },
        { text: 'Procesamiento de imágenes médicas (MRI)', icon: 'bi-image' },
        { text: 'Diseño de datasets personalizados', icon: 'bi-collection' },
        { text: 'Preprocesamiento de datos clínicos (CDR)', icon: 'bi-file-earmark-medical' },
        { text: 'Evaluación con métricas clínicas', icon: 'bi-bar-chart' },
        { text: 'Automatización de logs con pandas', icon: 'bi-file-earmark-spreadsheet' },
        { text: 'Entrenamiento en GPU con CUDA', icon: 'bi-gpu-card' },
      ],
    },
    {
      id: 2,
      title: 'Desarrollo Web',
      items: [
        { text: 'Node.js', icon: 'bi-node-plus' },
        { text: 'Express.js', icon: 'bi-box-arrow-in-right' },
        { text: 'GraphQL', icon: 'bi-graph-up' },
        { text: 'Apollo Server', icon: 'bi-cloud-arrow-up' },
        { text: 'Sequelize ORM', icon: 'bi-database' },
        { text: 'PostgreSQL', icon: 'bi-server' },
        { text: 'Git y GitHub', icon: 'bi-git' },
        { text: 'Metodologías Ágiles (Scrum)', icon: 'bi-people' },
      ],
    },
  ];

  return (
    <>
      <main>
        {/* Hero */}
        <header className="visual-hero" style={{backgroundImage: `url(${heroImg})`}}>
          <div className="visual-inner">
            <div className="visual-left-nav" aria-hidden="true">
              {/* <button className="nav-toggle">☰</button> */}
            </div>
            <div className="visual-center">
              <div className="hero-art" aria-hidden="true">
                {/* decorative image already in background */}
              </div>
            </div>
            <aside className="visual-side">
              {/* <span className="hero-pill">PORTAFOLIO</span> */}
              {/* <h1 className="hero-title">Ayrton — Ingeniería & Productos</h1> */}
              <p className="hero-copy">Diseño y desarrollo de productos con foco en inteligencia artificial, visión computacional y sistemas de producción.</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#/contact">Contactar</a>
                <a className="btn btn-ghost" href="#projects">Ver proyectos</a>
              </div>
            </aside>
          </div>
        </header>
        {/* Visual hero removed per request; simplified landing */}
        {/* Case-study removed per request */}

        {/* Sección 'Sobre mí' eliminada por solicitud */}

        <section id="habilidades" className="section container">
          <h2 className="section-title">Habilidades</h2>
          <div className="row">
            {skills.map((skill) => (
              <div key={skill.id} className="col-md-6 mb-4">
                <div className="skill-card">
                  <div className="skill-card-body">
                    <h4 className="skill-card-title">{skill.title}</h4>
                    <ul className="list-unstyled mt-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item.icon && <i className={`bi ${item.icon} me-2`} aria-hidden="true"></i>}
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="highlights" className="section container">
          <h2 className="section-title">Enfoque</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="service-card">
                <i className="bi bi-cpu" aria-hidden="true" style={{fontSize:'1.6rem'}}></i>
                <h4 style={{marginTop:'.5rem'}}>Machine Learning</h4>
                <p className="about-card-text">Modelado, visión por computadora y despliegues en producción.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <i className="bi bi-server" aria-hidden="true" style={{fontSize:'1.6rem'}}></i>
                <h4 style={{marginTop:'.5rem'}}>Back-end</h4>
                <p className="about-card-text">APIs, bases de datos y arquitecturas escalables.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <i className="bi bi-gear" aria-hidden="true" style={{fontSize:'1.6rem'}}></i>
                <h4 style={{marginTop:'.5rem'}}>Consultoría</h4>
                <p className="about-card-text">Estrategia técnica, optimización y mentoring.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section container">
          <h2 className="section-title text-center">Servicios</h2>
          <div className="services-grid">
            {/*
            <div className="service-card about-card">
              <div className="about-card-body">
                <i className="bi bi-instagram" style={{fontSize: '1.75rem'}}></i>
                <h4 className="about-card-title mt-2">Contenido para Redes Sociales (IA)</h4>
                <p className="about-card-text">Generación de imágenes, textos y videos para redes sociales utilizando inteligencia artificial. Ideal para marketing digital y presencia online.</p>
                <a href="#/services" className="btn btn-hero btn-ghost">Ver servicio</a>
              </div>
            </div>
            */}

            <div className="service-card about-card">
              <div className="about-card-body">
                <i className="bi bi-wrench" style={{fontSize: '1.75rem'}} aria-hidden="true"></i>
                <h4 className="about-card-title mt-2">Mantenimiento de equipos de cómputo</h4>
                <p className="about-card-text">Diagnóstico y reparación de hardware, limpieza y mantenimiento preventivo, reemplazo de componentes (HDD/SSD, RAM, fuentes), instalación y actualización de sistemas operativos y drivers, optimización de rendimiento, respaldo y recuperación de datos, y soporte remoto o presencial según necesidad.</p>
                <a href="#/services" className="btn btn-hero btn-ghost">Ver servicio</a>
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos section removed per request */}

        {/* Contact preview removed per request */}
      </main>
    </>
  );
};

export default Home;
