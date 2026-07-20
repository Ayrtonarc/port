import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const nav = document.querySelector('.site-nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLanguage = () => {
    const next = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(next);
    localStorage.setItem('lang', next);
  };

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/services', label: t('nav.services') },
  ];

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link to="/" className="site-nav__brand" aria-label={t('nav.home')}>
          <span className="site-nav__brand-mark">{t('nav.brand')}</span>
          <span className="site-nav__brand-name">{t('nav.name')}</span>
        </Link>

        <nav className="site-nav__links" aria-label="Main navigation">
          <div className="site-nav__primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `site-nav__link${isActive ? ' is-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            className="lang-switcher"
            onClick={toggleLanguage}
            aria-label={t('nav.language')}
            title={i18n.language === 'es' ? 'English' : 'Español'}
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `site-nav__cta${isActive ? ' is-active' : ''}`
            }
          >
            {t('nav.contact')}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

