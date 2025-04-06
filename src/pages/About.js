// src/pages/About.js
import React from 'react';
import myPhoto from '../assets/images/foto.jpeg'; // Asegúrate de que la imagen esté en esta ruta

const About = () => {
  const softSkills = [
    { id: 1, text: 'Resolución de problemas', icon: 'bi-lightbulb' },
    { id: 2, text: 'Trabajo en equipo', icon: 'bi-people' },
    { id: 3, text: 'Comunicación efectiva', icon: 'bi-chat-dots' },
    { id: 4, text: 'Adaptabilidad', icon: 'bi-arrow-repeat' },
    { id: 5, text: 'Pensamiento crítico', icon: 'bi-search' },
    { id: 6, text: 'Gestión del tiempo', icon: 'bi-clock' },
    { id: 7, text: 'Liderazgo', icon: 'bi-award' },
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Sobre Mí</h1>

      {/* Introducción */}
      <div className="about-card mb-4">
        <div className="about-card-body text-center">
          <img 
            src={myPhoto} 
            alt="Mi foto" 
            className="img-fluid rounded-circle mb-4 shadow-lg" 
            style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
          />
          <h2 className="about-card-title">Introducción</h2>
          <p className="about-card-text">
            ¡Hola! Soy Ayrton, Ingeniero en Tecnologías de la Información y Comunicaciones (TICS).
          </p>
          <p className="about-card-text">
            Actualmente curso un posgrado en Ciencias de la Computación, donde trabajo con redes neuronales para detectar el Alzheimer, combinando mi pasión por la tecnología con el objetivo de generar un impacto positivo.
          </p>
        </div>
      </div>

      {/* Experiencia */}
      <div className="about-card mb-4">
        <div className="about-card-body">
          <h2 className="about-card-title">Experiencia</h2>
          <p className="about-card-text">
            Comencé mi carrera trabajando en soporte técnico, lo que me permitió desarrollar sólidas habilidades en la resolución de problemas y en la atención a clientes.
          </p>
          <p className="about-card-text">
            Posteriormente, me desempeñé como programador en Plaeto, especializándome en el desarrollo de soluciones back-end y la optimización de sistemas.
          </p>
        </div>
      </div>

      {/* Habilidades Blandas */}
      <div className="about-card">
        <div className="about-card-body">
          <h2 className="about-card-title">Habilidades Blandas</h2>
          <ul className="list-unstyled">
            {softSkills.map((skill) => (
              <li key={skill.id} className="mb-2">
                <i className={`bi ${skill.icon} me-2`}></i> {/* Ícono */}
                {skill.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

