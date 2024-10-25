import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Importa el CSS Module

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FinderVision</div>

      <div 
        className={`${styles.menuIcon} ${isOpen ? styles.menuIconActive : ''}`} 
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksActive : ''}`}>
        <li><Link to="/" className={styles.navButton}>Inicio</Link></li>
        <li><Link to="/login" className={styles.navButton}>Iniciar Sesión</Link></li>
        <li><Link to="/plants" className={styles.navButton}>Plantas</Link></li>
        <li><Link to="/about" className={styles.navButton}>Sobre Nosotros</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
