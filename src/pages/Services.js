// src/pages/Services.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.service_1_title'),
      description: t('services.service_1_desc'),
      deliverables: t('services.service_1_items', { returnObjects: true }),
    },
    {
      title: t('services.service_2_title'),
      description: t('services.service_2_desc'),
      deliverables: t('services.service_2_items', { returnObjects: true }),
    },
    {
      title: t('services.service_3_title'),
      description: t('services.service_3_desc'),
      deliverables: t('services.service_3_items', { returnObjects: true }),
    },
  ];

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">{t('services.eyebrow')}</span>
        <h1 className="page-title">{t('services.title')}</h1>
        <p className="page-lead">{t('services.lead')}</p>
      </header>

      <Reveal as="section" className="services-grid-ui">
        {services.map((service) => (
          <article key={service.title} className="service-panel panel panel--pad">
            <p className="panel-kicker">{t('services.service_kicker')}</p>
            <h2 className="service-panel__title">{service.title}</h2>
            <p className="service-panel__description">{service.description}</p>
            <ul className="bullet-list service-panel__list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </Reveal>
    </main>
  );
};

export default Services;
