// src/pages/Services.js
import React from 'react';

const services = [
  {
    title: 'Desarrollo técnico para productos basados en IA',
    description: 'Aterrizo ideas con machine learning o visión computacional en soluciones que puedan desplegarse y mantenerse sin fricción.',
    deliverables: [
      'Diseño técnico inicial y validación de alcance',
      'Prototipos funcionales y pruebas de concepto',
      'Integración con backend o flujos existentes',
    ],
  },
  {
    title: 'Mantenimiento de equipos de cómputo',
    description: 'Diagnóstico, reparación, actualización y soporte para equipos con enfoque preventivo y continuidad operativa.',
    deliverables: [
      'Mantenimiento preventivo y correctivo',
      'Optimización de rendimiento y respaldos',
      'Soporte remoto o presencial según necesidad',
    ],
  },
  {
    title: 'Backend y APIs para productos en crecimiento',
    description: 'Diseño servicios, bases de datos y APIs pensados para que el producto evolucione sin perder orden.',
    deliverables: [
      'Arquitectura backend y endpoints',
      'Persistencia de datos y modelado inicial',
      'Monitoreo básico y mejora continua',
    ],
  },
];

const Services = () => (
  <main className="page-shell">
    <header className="page-header">
      <span className="eyebrow">Servicios</span>
      <h1 className="page-title">Soporte técnico y desarrollo con una lógica simple: resolver bien antes que prometer de más.</h1>
      <p className="page-lead">
        Trabajo con equipos, productos o ideas que necesitan criterio de ingeniería, orden en la ejecución y una experiencia final más pulida.
      </p>
    </header>

    <section className="services-grid-ui">
      {services.map((service) => (
        <article key={service.title} className="service-panel panel panel--pad">
          <p className="panel-kicker">Servicio</p>
          <h2 className="service-panel__title">{service.title}</h2>
          <p className="service-panel__description">{service.description}</p>
          <ul className="bullet-list service-panel__list">
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  </main>
);

export default Services;
