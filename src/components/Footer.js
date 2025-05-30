// src/components/Footer.js
import React, { useEffect, useState } from 'react';

const ADMIN_EMAIL = 'ayrtonarc@gmail.com'; // Cambia por tu correo si es necesario

function isAdmin() {
  // Puedes cambiar esta lógica por algo más seguro si tienes autenticación
  // Aquí solo revisamos si hay un localStorage con tu correo (simulación simple)
  return localStorage.getItem('adminEmail') === ADMIN_EMAIL;
}

const Footer = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    let visitCount = parseInt(localStorage.getItem('visitCounter') || '0', 10);
    visitCount += 1;
    localStorage.setItem('visitCounter', visitCount);
    setVisits(visitCount);
  }, []);

  return (
    <footer className="bg-dark text-white text-center p-3 mt-auto">
      <div className="container">
        <p>&copy; 2025 Creado con React💻 y ☕ por Ayrton.</p>
        {isAdmin() && (
          <div style={{ fontSize: '0.85rem', color: '#b0b0b0', marginTop: '0.5rem', letterSpacing: '1px' }}>
            <i className="bi bi-eye me-1"></i>
            Contador de visitas: <span style={{ fontWeight: 'bold', color: '#12b878' }}>{visits}</span>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
