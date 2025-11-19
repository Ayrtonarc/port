// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, url, icon }) => {
  const renderIcon = (type) => {
    switch (type) {
      case 'vision':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 5C7 5 3.3 8.1 1.5 12c1.8 3.9 5.5 7 10.5 7s8.7-3.1 10.5-7C20.7 8.1 17 5 12 5z" fill="currentColor" opacity="0.08" />
            <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.1" />
          </svg>
        );
      case 'fraud':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="3" y="7" width="18" height="10" rx="2" fill="currentColor" opacity="0.06" />
            <path d="M7 11h6v2H7z" fill="currentColor" opacity="0.12" />
            <circle cx="17" cy="12" r="1.75" fill="currentColor" opacity="0.12" />
          </svg>
        );
      case 'traffic':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="9" y="3" width="6" height="4" rx="1" fill="currentColor" opacity="0.08" />
            <rect x="7" y="9" width="10" height="6" rx="1" fill="currentColor" opacity="0.06" />
            <circle cx="10.5" cy="17" r="1.2" fill="currentColor" opacity="0.12" />
            <circle cx="13.5" cy="17" r="1.2" fill="currentColor" opacity="0.12" />
          </svg>
        );
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.08" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.08" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.08" />
          </svg>
        );
    }
  };

  return (
    <div className="project-card" style={{padding: '1rem', borderRadius: 8, background: 'var(--card)', minHeight: 160}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '.5rem'}}>
        {renderIcon(icon)}
        <h5 style={{margin: 0}}>{title}</h5>
      </div>
      <p style={{marginBottom: '.75rem', color: 'var(--muted)'}}>{description}</p>
      {url ? (
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
        </a>
      ) : (
        <span className="muted" aria-hidden="true">Próximamente</span>
      )}
    </div>
  );
};

export default ProjectCard;