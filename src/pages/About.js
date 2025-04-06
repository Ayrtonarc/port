// src/pages/About.js
import React from 'react';
import myPhoto from '../assets/images/foto.jpeg'; // Asegúrate de que la imagen esté en esta ruta

const About = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Sobre Mí</h1>
      <div className="row">
        <div className="col-md-4">
          <img 
            src={myPhoto} 
            alt="Mi foto" 
            className="img-fluid rounded-circle mb-4" 
          />
        </div>
        <div className="col-md-8">
          <p>
            ¡Hola! Soy Ayrton, Ingeniero en Tecnologías de la Información y Comunicaciones (TICS).
          </p>
          <p>
            Comencé mi carrera trabajando en soporte técnico, lo que me permitió desarrollar sólidas habilidades en la resolución de problemas y en la atención a clientes.
          </p>
          <p>
            Posteriormente, me desempeñé como programador en Plaeto, especializándome en el desarrollo de soluciones back-end y la optimización de sistemas.
          </p>
          <p>
            Actualmente, curso un posgrado en Ciencias de la Computación, donde trabajo con redes neuronales para detectar el Alzheimer, combinando mi pasión por la tecnología con el objetivo de generar un impacto positivo.
          </p>
        </div>
      </div>
      <h2 className="mt-4">Habilidades y Tecnologías</h2>
      <ul className="list-unstyled">
        <li>Soporte Técnico</li>
        <li>Desarrollo de Software Back-End</li>
        <li>Node.js y Express.js</li>
        <li>Gestión de Bases de Datos (SQL y NoSQL)</li>
        <li>Redes Neuronales e Inteligencia Artificial</li>
        {/* Agrega más habilidades relevantes según tu experiencia */}
      </ul>
    </div>
  );
};

export default About;

