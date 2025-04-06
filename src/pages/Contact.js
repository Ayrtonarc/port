import React from 'react';

const Contact = () => {
  const contactMethods = [
    {
      id: 1,
      title: 'Correo Electrónico',
      description: 'Envíame un correo para consultas o colaboraciones.',
      link: 'mailto:correo@ejemplo.com',
      linkText: 'correo@ejemplo.com',
      icon: 'bi-envelope', // Ícono de correo
    },
    {
      id: 2,
      title: 'GitHub',
      description: 'Explora mis proyectos y contribuciones.',
      link: 'https://github.com/ayrtonarc',
      linkText: 'GitHub',
      icon: 'bi-github', // Ícono de GitHub
    },
    {
      id: 3,
      title: 'LinkedIn',
      description: 'Conéctate conmigo en LinkedIn.',
      link: 'https://www.linkedin.com/in/ayrton-santosa',
      linkText: 'LinkedIn',
      icon: 'bi-linkedin', // Ícono de LinkedIn
    },
    {
      id: 4,
      title: 'Instagram',
      description: 'Sígueme en Instagram para contenido personal y profesional.',
      link: 'https://www.instagram.com/ayrton.super/',
      linkText: 'Instagram',
      icon: 'bi-instagram', // Ícono de Instagram
    },
    {
      id: 5,
      title: 'Medium',
      description: 'Lee mis artículos sobre tecnología y desarrollo.',
      link: 'https://medium.com/@ayrtonsantosc',
      linkText: 'Medium',
      icon: 'bi-journal-text', // Ícono de Medium
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Contacto</h1>
      <div className="row">
        {contactMethods.map((method) => (
          <div key={method.id} className="col-md-6 mb-4">
            <div className="contact-card">
              <div className="contact-card-body">
                <h5 className="contact-card-title">
                  <i className={`bi ${method.icon} me-2`}></i> {/* Ícono */}
                  {method.title}
                </h5>
                <p className="contact-card-text">{method.description}</p>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  {method.linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

