import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    { to: '/', label: 'Inicio', end: true },
    { to: '/about', label: 'Sobre mí' },
    { to: '/projects', label: 'Proyectos' },
    { to: '/services', label: 'Servicios' },
  ];

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link to="/" className="site-nav__brand" aria-label="Ir al inicio">
          <span className="site-nav__brand-mark">PORTFOLIO</span>
          <span className="site-nav__brand-name">Ayrton Santos</span>
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

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `site-nav__cta${isActive ? ' is-active' : ''}`
            }
          >
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

