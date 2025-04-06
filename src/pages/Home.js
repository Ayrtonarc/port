import React from 'react';
import './Home.css'; // Asegúrate de crear e importar este archivo CSS

const Home = () => {
  const skills = [
    {
      id: 1,
      title: 'Desarrollo Web',
      items: [
        { text: 'Node.js', icon: 'bi-node-plus' },
        { text: 'Express.js', icon: 'bi-box-arrow-in-right' },
        { text: 'GraphQL', icon: 'bi-graph-up' },
        { text: 'Apollo Server', icon: 'bi-cloud-arrow-up' },
        { text: 'Sequelize ORM', icon: 'bi-database' },
        { text: 'PostgreSQL', icon: 'bi-server' },
        { text: 'Git y GitHub', icon: 'bi-git' },
        { text: 'Metodologías Ágiles (Scrum)', icon: 'bi-people' },
      ],
    },
    {
      id: 2,
      title: 'Inteligencia Artificial',
      items: [
        { text: 'Deep Learning con PyTorch', icon: 'bi-cpu' },
        { text: 'Procesamiento de imágenes médicas (MRI)', icon: 'bi-image' },
        { text: 'Diseño de datasets personalizados', icon: 'bi-collection' },
        { text: 'Preprocesamiento de datos clínicos (CDR)', icon: 'bi-file-earmark-medical' },
        { text: 'Evaluación con métricas clínicas', icon: 'bi-bar-chart' },
        { text: 'Automatización de logs con pandas', icon: 'bi-file-earmark-spreadsheet' },
        { text: 'Entrenamiento en GPU con CUDA', icon: 'bi-gpu-card' },
      ],
    },
  ];

  return (
    <div className="container mt-4">
      <div className="text-center">
        <h1 className="my-4 glitch" data-text="Bienvenido a mi Portafolio">
          Bienvenido a mi Portafolio
        </h1>
        <p className="lead">
          Soy un desarrollador apasionado por la tecnología y la innovación.
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-center">Habilidades y Tecnologías</h2>
        <div className="row">
          {skills.map((skill) => (
            <div key={skill.id} className="col-md-6 mb-4">
              <div className="skill-card">
                <div className="skill-card-body">
                  <h3 className="skill-card-title text-center">{skill.title}</h3>
                  <ul className="list-unstyled text-center mt-3">
                    {skill.items.map((item, index) => (
                      <li key={index} className="mb-2">
                        <i className={`bi ${item.icon} me-2`}></i> {/* Ícono */}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
