// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import myPhoto from '../assets/images/foto.jpeg';

const About = () => {
  const { t } = useTranslation();

  const technical = t('about.tech_tags', { returnObjects: true });
  const principles = t('about.principles', { returnObjects: true });

  const timeline = [
    {
      period: t('about.timeline_1_period'),
      title: t('about.timeline_1_title'),
      detail: t('about.timeline_1_detail'),
      description: t('about.timeline_1_desc'),
    },
    {
      period: t('about.timeline_2_period'),
      title: t('about.timeline_2_title'),
      detail: t('about.timeline_2_detail'),
      description: t('about.timeline_2_desc'),
    },
    {
      period: t('about.timeline_3_period'),
      title: t('about.timeline_3_title'),
      detail: t('about.timeline_3_detail'),
      description: t('about.timeline_3_desc'),
    },
    {
      period: t('about.timeline_4_period'),
      title: t('about.timeline_4_title'),
      detail: t('about.timeline_4_detail'),
      description: t('about.timeline_4_desc'),
    },
    {
      period: t('about.timeline_5_period'),
      title: t('about.timeline_5_title'),
      detail: t('about.timeline_5_detail'),
      description: t('about.timeline_5_desc'),
    },
  ];

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">{t('about.eyebrow')}</span>
        <h1 className="page-title">{t('about.title')}</h1>
        <p className="page-lead">{t('about.lead')}</p>
      </header>

      <Reveal as="section" className="content-split content-split--about">
        <aside className="panel panel--pad profile-card">
          <img src={myPhoto} alt="Retrato de Ayrton Santos" className="profile-card__image" loading="lazy" />

          <div className="metric-grid metric-grid--compact">
            <div className="metric-card">
              <strong>{t('about.metric_1_value')}</strong>
              <span>{t('about.metric_1_label')}</span>
            </div>
            <div className="metric-card">
              <strong>{t('about.metric_2_value')}</strong>
              <span>{t('about.metric_2_label')}</span>
            </div>
            <div className="metric-card">
              <strong>{t('about.metric_3_value')}</strong>
              <span>{t('about.metric_3_label')}</span>
            </div>
          </div>
        </aside>

        <section className="panel panel--pad">
          <p className="panel-kicker">{t('about.resume_kicker')}</p>
          <p className="content-block">{t('about.resume_1')}</p>
          <p className="content-block">{t('about.resume_2')}</p>

          <div className="tag-list">
            {technical.map((item) => (
              <span key={item} className="tag">{item}</span>
            ))}
          </div>

          <div className="inline-actions">
            <Link className="btn btn-primary" to="/contact">{t('about.contact_btn')}</Link>
            <Link className="btn btn-secondary" to="/projects">{t('about.projects_btn')}</Link>
          </div>
        </section>
      </Reveal>

      <Reveal as="section" className="section-block">
        <div className="detail-grid">
          <article className="panel panel--pad">
            <p className="panel-kicker">{t('about.principles_kicker')}</p>
            <ul className="bullet-list">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </Reveal>

      <Reveal as="section" className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('about.timeline_eyebrow')}</span>
            <h2 className="section-title">{t('about.timeline_title')}</h2>
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
      </Reveal>

    </main>
  );
};

export default About;

