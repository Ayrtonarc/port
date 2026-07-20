import React from 'react';
import { useTranslation } from 'react-i18next';
import { QRCodeCanvas } from 'qrcode.react';
import Reveal from '../components/Reveal';

const Donate = () => {
  const { t } = useTranslation();
  const btcWalletAddress = 'tu-direccion-de-wallet-bitso';

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">{t('donate.eyebrow')}</span>
        <h1 className="page-title">{t('donate.title')}</h1>
        <p className="page-lead">{t('donate.lead')}</p>
      </header>

      <Reveal as="section" className="content-split content-split--donate">
        <div className="panel panel--pad qr-panel">
          <QRCodeCanvas value={btcWalletAddress} size={220} />
          <p className="qr-panel__caption">{t('donate.qr_caption')}</p>
        </div>

        <div className="panel panel--pad">
          <p className="panel-kicker">{t('donate.wallet_kicker')}</p>
          <h2 className="section-title">{t('donate.wallet_title')}</h2>
          <p className="page-lead">{t('donate.wallet_desc')}</p>
          <div className="code-chip">{btcWalletAddress}</div>
        </div>
      </Reveal>
    </main>
  );
};

export default Donate;