import React from 'react';
import './App.css'; 

function Main() {
  return (
    <div className="main-container">
      <div className="content-section">
        <h1 className="main-title">Identifica plantas medicinales y sus beneficios!</h1>
        
        {/* Sección de Call-to-Action (CTA) */}
        <div className="cta-section">
          <h2>¡Prueba nuestra herramienta ahora!</h2>
          <button className="cta-button">Comienza Gratis</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
