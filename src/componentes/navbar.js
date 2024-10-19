
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './navbar.css'; 

function Navbar() {
  // useState para manejar el estado del menú (abierto o cerrado)
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">FinderVision</div>

      {/* Icono de menú hamburguesa */}
      <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Enlaces de navegación */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" className="nav-button">Inicio</Link></li>
        <li><Link to="/login" className="nav-button">Iniciar Sesión</Link></li>
        <li><Link to="/plants" className="nav-button">Plantas</Link></li>
        <li><Link to="/about" className="nav-button">Sobre Nosotros</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

