import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Importa QRCodeCanvas

const Donate = () => {
  const btcWalletAddress = 'tu-direccion-de-wallet-bitso'; // Reemplaza con tu dirección de Bitso

  return (
    <div className="container mt-4 text-center">
      <h1 className="mb-4">Apoya mi trabajo</h1>
      <p className="lead">
        Prueba transferencia cripto.
      </p>
      <div className="mt-4">
        <QRCodeCanvas value={btcWalletAddress} size={200} /> {/* Usa QRCodeCanvas */}
      </div>
      <p className="mt-3">
        <strong>Dirección de Wallet:</strong>
        <br />
        <code>{btcWalletAddress}</code>
      </p>
    </div>
  );
};

export default Donate;