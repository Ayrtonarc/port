import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Home.css';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import heroImg from '../assets/images/concord.png';

const Home = () => {
  const { t } = useTranslation();

  const focusAreas = [
    {
      title: t('home.focus_1_title'),
      description: t('home.focus_1_desc'),
    },
    {
      title: t('home.focus_2_title'),
      description: t('home.focus_2_desc'),
    },
    {
      title: t('home.focus_3_title'),
      description: t('home.focus_3_desc'),
    },
  ];

  const skills = [
    {
      id: 1,
      title: t('home.skills_1_title'),
      items: t('home.skills_1_items', { returnObjects: true }),
    },
    {
      id: 2,
      title: t('home.skills_2_title'),
      items: t('home.skills_2_items', { returnObjects: true }),
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: t('home.featured_1_title'),
      description: t('home.featured_1_desc'),
      url: 'https://colab.research.google.com/drive/1Rf2tYcdXEOAkMZA-PZ8eL40jFOctSfhv?usp=sharing#scrollTo=K2q7uDw5tOTA',
      icon: 'vision',
      category: 'Computer Vision',
      stack: t('home.featured_1_stack'),
      result: t('home.featured_1_result'),
    },
    {
      id: 2,
      title: t('home.featured_2_title'),
      description: t('home.featured_2_desc'),
      url: 'https://colab.research.google.com/drive/1oj1xRZqEOqW0yT6iwctvKR_n6SYrn8BG?usp=sharing',
      icon: 'fraud',
      category: 'Machine Learning',
      stack: t('home.featured_2_stack'),
      result: t('home.featured_2_result'),
    },
    {
      id: 3,
      title: t('home.featured_3_title'),
      description: t('home.featured_3_desc'),
      url: 'https://neeucom.com',
      icon: 'social',
      category: 'Full Stack',
      stack: t('home.featured_3_stack'),
      result: t('home.featured_3_result'),
    },
  ];

  const serviceHighlights = t('home.services_list', { returnObjects: true });

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="page-shell home-hero__grid">
          <div className="home-hero__copy">
            <span className="eyebrow">{t('home.eyebrow')}</span>
            <h1 className="page-title home-hero__title">{t('home.title')}</h1>
            <p className="page-lead home-hero__lead">{t('home.lead')}</p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">{t('home.cta_contact')}</Link>
              <Link className="btn btn-secondary" to="/projects">{t('home.cta_projects')}</Link>
            </div>

            <div className="hero-stat-grid">
              <article className="hero-stat panel panel--pad">
                <span className="hero-stat__label">{t('home.stat_1_label')}</span>
                <strong>{t('home.stat_1_value')}</strong>
              </article>
              <article className="hero-stat panel panel--pad">
                <span className="hero-stat__label">{t('home.stat_2_label')}</span>
                <strong>{t('home.stat_2_value')}</strong>
              </article>
              <article className="hero-stat panel panel--pad">
                <span className="hero-stat__label">{t('home.stat_3_label')}</span>
                <strong>{t('home.stat_3_value')}</strong>
              </article>
            </div>
          </div>

          <div className="home-hero__visual panel">
            <div className="home-hero__image-wrap">
              <img src={heroImg} alt="Proyecto visual de portada" className="home-hero__image" loading="lazy" />
            </div>
            <div className="home-hero__note">
              <span className="home-hero__note-label">{t('home.now_label')}</span>
              <p>{t('home.now_text')}</p>
            </div>
          </div>
        </div>
      </section>

      <Reveal as="section" className="page-shell section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('home.focus_heading')}</span>
            <h2 className="section-title">{t('home.focus_title')}</h2>
          </div>
          <p className="section-caption">{t('home.focus_caption')}</p>
        </div>

        <div className="feature-grid">
          {focusAreas.map((area) => (
            <article key={area.title} className="feature-card panel panel--pad">
              <p className="panel-kicker">{area.title}</p>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="page-shell section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('home.skills_eyebrow')}</span>
            <h2 className="section-title">{t('home.skills_title')}</h2>
          </div>
        </div>

        <div className="expertise-grid">
            {skills.map((skill) => (
              <article key={skill.id} className="skill-panel panel panel--pad">
                <p className="panel-kicker">{skill.title}</p>
                <ul className="bullet-list skill-panel__list">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
        </div>
      </Reveal>

      <Reveal as="section" className="page-shell section-block">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{t('home.projects_eyebrow')}</span>
            <h2 className="section-title">{t('home.projects_title')}</h2>
          </div>
          <Link to="/projects" className="btn btn-secondary">{t('home.projects_cta')}</Link>
        </div>

        <div className="card-grid home-project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="page-shell section-block">
        <div className="cta-band panel panel--pad">
          <div>
            <span className="eyebrow">{t('home.services_eyebrow')}</span>
            <h2 className="section-title">{t('home.services_title')}</h2>
            <ul className="bullet-list cta-band__list">
              {serviceHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="cta-band__actions">
            <Link className="btn btn-primary" to="/services">{t('home.services_cta')}</Link>
            <Link className="btn btn-secondary" to="/about">{t('home.about_cta')}</Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
};

export default Home;
