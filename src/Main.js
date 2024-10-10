import React from 'react';
import './App.css'; // Asegúrate de agregar el archivo de estilo

function Main() {
  return (
    <div className="main-container">
      <div className="content-section">
        <h1 className="main-title">Identifica plantas medicinales.</h1>

        <div className="try-it-section">
          <p>Prueba ahora:</p>
          <div className="bottom-section">
            <button className="upload-button">Subir Foto</button>
          </div>
        </div>

        <div className="login-section">
          <p>Inicia sesión para obtener más identificaciones y evaluación de salud</p>
          <button className="login-button">Iniciar Sesion</button>
          <button className="login-button">Registrarse</button>
        </div>
      </div>

      <div className="logo-section">
        <img src="/logo.jpeg" alt="FinderVision" className="logo" />
      </div>
    </div>
  );
}

export default Main;
