// src/components/ProjectCard.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ title, description, url, icon, category, stack, result }) => {
  const { t } = useTranslation();

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
      case 'social':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.06" />
            <circle cx="9.5" cy="9.5" r="1.8" fill="currentColor" opacity="0.12" />
            <circle cx="14.5" cy="9.5" r="1.8" fill="currentColor" opacity="0.12" />
            <path d="M7.5 15c.8 1.3 2.5 2.2 4.5 2.2s3.7-.9 4.5-2.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" />
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
      <article className="project-card panel panel--pad">
        <div className="project-card__head">
          <div className="project-card__icon" aria-hidden="true">
            {renderIcon(icon)}
          </div>
          {category && <p className="project-card__eyebrow">{category}</p>}
      </div>

        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__text">{description}</p>

        {(stack || result) && (
          <div className="project-card__details">
            {stack && <p><strong>{t('project_card.stack_label')}</strong> {stack}</p>}
            {result && <p><strong>{t('project_card.value_label')}</strong> {result}</p>}
          </div>
        )}

      {url ? (
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('project_card.open_project')}
        </a>
      ) : (
        <span className="muted" aria-hidden="true">{t('project_card.coming_soon')}</span>
      )}
    </article>
  );
};

export default ProjectCard;