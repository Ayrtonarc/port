import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      id: 1,
      title: 'Correo electrónico',
      description: 'Para colaboraciones, propuestas de producto o consultas técnicas concretas.',
      link: 'mailto:ayrtonarc@gmail.com',
      linkText: 'ayrtonarc@gmail.com',
      label: 'Directo',
    },
    {
      id: 2,
      title: 'GitHub',
      description: 'Código, experimentos y avances públicos.',
      link: 'https://github.com/ayrtonarc',
      linkText: 'GitHub',
      label: 'Repositorios',
    },
    {
      id: 3,
      title: 'LinkedIn',
      description: 'Perfil profesional y contacto de networking.',
      link: 'https://www.linkedin.com/in/ayrton-santosa',
      linkText: 'LinkedIn',
      label: 'Networking',
    },
    {
      id: 5,
      title: 'Medium',
      description: 'Artículos y notas sobre tecnología, producto y desarrollo.',
      link: 'https://medium.com/@ayrtonsantosc',
      linkText: 'Medium',
      label: 'Escritura',
    },
  ];

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">Contacto</span>
        <h1 className="page-title">Si el proyecto requiere criterio técnico y ejecución limpia, conversemos.</h1>
        <p className="page-lead">
          Estoy disponible para colaboraciones en IA aplicada, backend, optimización de productos y acompañamiento técnico.
        </p>
      </header>

      <section className="contact-layout">
        <div className="contact-grid">
          {contactMethods.map((method) => (
            <article key={method.id} className="contact-method panel panel--pad">
              <p className="contact-method__label">{method.label}</p>
              <h2 className="contact-method__title">{method.title}</h2>
              <p className="contact-method__text">{method.description}</p>
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {method.linkText}
              </a>
            </article>
          ))}
        </div>

        <aside className="panel panel--pad contact-aside">
          <p className="panel-kicker">Forma de colaboración</p>
          <ul className="bullet-list">
            <li>Diagnóstico técnico inicial y definición de alcance.</li>
            <li>Propuestas orientadas a valor, no a complejidad gratuita.</li>
            <li>Comunicación clara sobre tiempos, riesgos y siguientes pasos.</li>
          </ul>

          <a className="btn btn-primary" href="mailto:ayrtonarc@gmail.com">Enviar correo</a>
        </aside>
      </section>
    </main>
  );
};

export default Contact;

