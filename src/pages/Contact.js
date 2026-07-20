import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';

const Contact = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      id: 1,
      title: t('contact.method_1_title'),
      description: t('contact.method_1_desc'),
      link: 'mailto:ayrtonarc@gmail.com',
      linkText: 'ayrtonarc@gmail.com',
      label: t('contact.method_1_label'),
    },
    {
      id: 2,
      title: t('contact.method_2_title'),
      description: t('contact.method_2_desc'),
      link: 'https://github.com/ayrtonarc',
      linkText: 'GitHub',
      label: t('contact.method_2_label'),
    },
    {
      id: 3,
      title: t('contact.method_3_title'),
      description: t('contact.method_3_desc'),
      link: 'https://www.linkedin.com/in/ayrton-santosa',
      linkText: 'LinkedIn',
      label: t('contact.method_3_label'),
    },
    {
      id: 5,
      title: t('contact.method_4_title'),
      description: t('contact.method_4_desc'),
      link: 'https://medium.com/@ayrtonsantosc',
      linkText: 'Medium',
      label: t('contact.method_4_label'),
    },
  ];

  const asideItems = t('contact.aside_items', { returnObjects: true });

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">{t('contact.eyebrow')}</span>
        <h1 className="page-title">{t('contact.title')}</h1>
        <p className="page-lead">{t('contact.lead')}</p>
      </header>

      <Reveal as="section" className="contact-layout">
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
          <p className="panel-kicker">{t('contact.aside_kicker')}</p>
          <ul className="bullet-list">
            {asideItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <a className="btn btn-primary" href="mailto:ayrtonarc@gmail.com">{t('contact.send_email')}</a>
        </aside>
      </Reveal>
    </main>
  );
};

export default Contact;

