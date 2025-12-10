import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link to="/" className="site-nav__brand"></Link>
        <nav className="site-nav__links" aria-label="Main navigation">
          <Link to="/" className="site-nav__link">Inicio</Link>
          <Link to="/about" className="site-nav__link">Sobre mí</Link>
          <Link to="/projects" className="site-nav__link">Proyectos</Link>
          <Link to="/services" className="site-nav__link">Servicios</Link>
          <Link to="/contact" className="site-nav__link">Contacto</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

