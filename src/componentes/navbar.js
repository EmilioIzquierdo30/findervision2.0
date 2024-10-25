import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">FinderVision</div>

      <div className={`menu-icon ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

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
