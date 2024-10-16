// Planta.jsx
import React from 'react';
import './Planta.css'; // Importa los estilos específicos para el componente Planta

const Planta = ({ nombre, categoria, color, imagen }) => {
  return (
    <div className="planta">
      <img src={imagen} alt={nombre} className="planta-imagen" />
      <div className="planta-info">
        <div className="planta-titulo">Popular</div>
        <div className="planta-nombre">{nombre}</div>
        <div className="planta-categoria">{categoria}</div>
        <div className="planta-color">{color}</div>
      </div>
    </div>
  );
};

export default Planta;
