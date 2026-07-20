import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Donate = lazy(() => import('./pages/Donate'));
const Services = lazy(() => import('./pages/Services'));

function App() {
  return (
    <Router>
      <div className="app-shell">
          <Navbar />
          <div className="app-content">
            <Suspense fallback={<div className="page-shell" style={{ paddingTop: '4rem', textAlign: 'center', color: 'var(--muted)' }}>Cargando…</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
