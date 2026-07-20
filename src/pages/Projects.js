// src/pages/Projects.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('projects.project_1_title'),
      description: t('projects.project_1_desc'),
      url: 'https://colab.research.google.com/drive/1Rf2tYcdXEOAkMZA-PZ8eL40jFOctSfhv?usp=sharing#scrollTo=K2q7uDw5tOTA',
      icon: 'vision',
      category: 'Computer Vision',
      stack: t('projects.project_1_stack'),
      result: t('projects.project_1_result'),
    },
    {
      id: 2,
      title: t('projects.project_2_title'),
      description: t('projects.project_2_desc'),
      url: 'https://colab.research.google.com/drive/1oj1xRZqEOqW0yT6iwctvKR_n6SYrn8BG?usp=sharing',
      icon: 'fraud',
      category: 'Risk Analytics',
      stack: t('projects.project_2_stack'),
      result: t('projects.project_2_result'),
    },
    {
      id: 3,
      title: t('projects.project_3_title'),
      description: t('projects.project_3_desc'),
      url: 'https://colab.research.google.com/drive/1z3fXWqwhhKVYUEGnFbrywEIokPxOucFl?usp=sharing',
      icon: 'traffic',
      category: 'Perception',
      stack: t('projects.project_3_stack'),
      result: t('projects.project_3_result'),
    },
    {
      id: 4,
      title: t('projects.project_4_title'),
      description: t('projects.project_4_desc'),
      url: 'https://neeucom.com',
      icon: 'social',
      category: 'Full Stack',
      stack: t('projects.project_4_stack'),
      result: t('projects.project_4_result'),
    },
  ];

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">{t('projects.eyebrow')}</span>
        <h1 className="page-title">{t('projects.title')}</h1>
        <p className="page-lead">{t('projects.lead')}</p>
      </header>

      <Reveal as="section" className="metric-grid">
        <article className="metric-card panel panel--pad">
          <strong>{t('projects.metric_1_value')}</strong>
          <span>{t('projects.metric_1_label')}</span>
        </article>
        <article className="metric-card panel panel--pad">
          <strong>{t('projects.metric_2_value')}</strong>
          <span>{t('projects.metric_2_label')}</span>
        </article>
        <article className="metric-card panel panel--pad">
          <strong>{t('projects.metric_3_value')}</strong>
          <span>{t('projects.metric_3_label')}</span>
        </article>
      </Reveal>

      <Reveal as="section" className="section-block">
        <div className="card-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('projects.publications_eyebrow')}</span>
            <h2 className="section-title">{t('projects.publications_title')}</h2>
          </div>
        </div>

        <div className="panel panel--pad">
          <ol className="publication-list">
            <li>{t('projects.publication_1')}</li>
          </ol>
        </div>
      </Reveal>
    </main>
  );
};

export default Projects;

