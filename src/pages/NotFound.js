import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <main className="page-shell" style={{ textAlign: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <span className="eyebrow">404</span>
      <h1 className="page-title" style={{ marginTop: '1rem' }}>{t('not_found.title')}</h1>
      <p className="page-lead" style={{ margin: '0.75rem auto 2rem', maxWidth: '40ch' }}>
        {t('not_found.message')}
      </p>
      <Link to="/" className="btn btn-primary">{t('not_found.back_home')}</Link>
    </main>
  );
};

export default NotFound;
