// VentanaCatalogo.js
import React from 'react';

const VentanaCatalogo = ({ planta }) => {
  return (
    <div>
      <h1>{planta.nombre}</h1>
      <p>{planta.descripcion}</p>
      {/* Aquí puedes agregar más información sobre la planta */}
    </div>
  );
};

export default VentanaCatalogo;