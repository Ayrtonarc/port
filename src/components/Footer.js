// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__eyebrow">{t('footer.eyebrow')}</p>
          <p className="site-footer__text">{t('footer.text')}</p>
        </div>

        <div className="site-footer__links" aria-label="Footer navigation">
          <Link to="/projects">{t('footer.link_projects')}</Link>
          <Link to="/services">{t('footer.link_services')}</Link>
          <Link to="/contact">{t('footer.link_contact')}</Link>
        </div>

        <p className="site-footer__meta">© {year} Ayrton Santos.</p>
      </div>
    </footer>
  );
};

export default Footer;
