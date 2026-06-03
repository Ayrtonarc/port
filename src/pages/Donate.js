import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const Donate = () => {
  const btcWalletAddress = 'tu-direccion-de-wallet-bitso';

  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">Apoyo</span>
        <h1 className="page-title">Si quieres apoyar el proyecto, aquí puedes hacerlo.</h1>
        <p className="page-lead">
          Esta sección está pensada como un punto simple de donación. Puedes reemplazar la wallet por la definitiva cuando quieras activarla públicamente.
        </p>
      </header>

      <section className="content-split content-split--donate">
        <div className="panel panel--pad qr-panel">
          <QRCodeCanvas value={btcWalletAddress} size={220} />
          <p className="qr-panel__caption">Escanea el código o copia la dirección manualmente.</p>
        </div>

        <div className="panel panel--pad">
          <p className="panel-kicker">Wallet</p>
          <h2 className="section-title">Dirección configurada actualmente</h2>
          <p className="page-lead">Aún tienes un placeholder. Cuando la reemplaces por la wallet final, esta página ya quedará presentable.</p>
          <div className="code-chip">{btcWalletAddress}</div>
        </div>
      </section>
    </main>
  );
};

export default Donate;