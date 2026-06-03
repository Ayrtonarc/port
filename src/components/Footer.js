// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__eyebrow">Disponible para colaboraciones selectas</p>
          <p className="site-footer__text">IA aplicada, backend y diseño de producto con criterio técnico.</p>
        </div>

        <div className="site-footer__links" aria-label="Footer navigation">
          <Link to="/projects">Proyectos</Link>
          <Link to="/services">Servicios</Link>
          <Link to="/contact">Contacto</Link>
        </div>

        <p className="site-footer__meta">© {year} Ayrton Santos.</p>
      </div>
    </footer>
  );
};

export default Footer;
