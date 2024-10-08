// Planta.js
import React from 'react';

const Planta = ({ nombre, descripcion, imagen }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <img src={imagen} alt={nombre} />
    </div>
  );
};

export default Planta;