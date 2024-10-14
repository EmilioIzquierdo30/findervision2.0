
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FinderVision</div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-button">Inicio</Link></li> {/* Cambia button por Link */}
        <li><Link to="/login" className="nav-button">Iniciar Sesión</Link></li>
        <li><Link to="/plants" className="nav-button">Plantas</Link></li>
        <li><Link to="/about" className="nav-button">Sobre Nosotros</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

