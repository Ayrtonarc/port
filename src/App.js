import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Services from './pages/Services';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirige rutas no encontradas */}
          </Routes>
          <Footer />
        </Router>
        {}
      </header>
    </div>
  );
}

export default App;
