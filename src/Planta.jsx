import React from 'react';
import './Planta.css'; // Importa los estilos específicos para el componente Planta

const Planta = ({ nombre, categoria, imagen, seleccionarPlanta }) => {
  return (
    <div className="planta" onClick={seleccionarPlanta}>
      <img src={imagen} alt={nombre} className="planta-imagen" />
      <div className="planta-info">
        <div className="planta-nombre">{nombre}</div>
        <div className="planta-categoria">{categoria}</div>
      </div>
    </div>
  );
};

export default Planta;
