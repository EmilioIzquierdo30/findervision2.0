import React from 'react';
import './navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FinderVision</div>
      <ul className="nav-links">
        <li><button className="nav-button">Inicio</button></li>
        <li><button className="nav-button">Iniciar Sesión</button></li>
        <li><button className="nav-button">Plantas</button></li>
        <li><button className="nav-button">Sobre Nosotros</button></li>
      </ul>
    </nav>
  );
}

export default Navbar; // Exporta el componente Navbar
