// src/pages/Services.js
import React from 'react';

const services = [
  {
    title: 'Contenido para Redes Sociales (IA)',
    description: 'Generación de imágenes, textos y videos para redes sociales utilizando inteligencia artificial. Ideal para marketing digital y presencia online.',
    icon: 'bi-instagram',
  },
  {
    title: 'Marketplace con Tookans.com',
    description: 'Te ayudo a crear tu tienda o marketplace en Tookans.com para que puedas vender productos o servicios fácilmente en línea.',
    icon: 'bi-bag',
  },
];

const Services = () => (
  <div className="container mt-4">
    <h1 className="mb-4 text-center">Servicios</h1>
    <p className="lead text-center mb-5">
      Ofrezco servicios profesionales en desarrollo web, inteligencia artificial y consultoría tecnológica. ¡Contáctame para llevar tu proyecto al siguiente nivel!
    </p>
    <div className="row">
      {services.map((service, idx) => (
        <div className="col-md-6 mb-4" key={idx}>
          <div className="about-card h-100">
            <div className="about-card-body text-center">
              <i className={`bi ${service.icon} mb-3`} style={{ fontSize: '2.5rem', color: '#12b878' }}></i>
              <h3 className="about-card-title">{service.title}</h3>
              <p className="about-card-text">{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
