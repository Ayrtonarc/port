// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-4">
      <h1>Contacto</h1>
      {/* <p>
        Envíame un correo a: <a href="mailto:correo@ejemplo.com">correo@ejemplo.com</a>
      </p> */}
      <p>Sígueme en mis redes sociales:</p>
      <ul className="list-unstyled">
        <li>
          <a href="https://github.com/ayrtonarc" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ayrton-santosa" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ayrton.super/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://medium.com/@ayrtonsantosc" target="_blank" rel="noopener noreferrer">
            Medium
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

