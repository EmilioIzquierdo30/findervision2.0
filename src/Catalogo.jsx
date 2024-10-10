// Catalogo.jsx
import React from 'react';
import Planta from './Planta';

const Catalogo = ({ plantas }) => {
  return (
    <div>
      <h1>Catálogo de plantas</h1>
      <ul>
        {plantas.map((planta, index) => (
          <li key={index}>
            <Planta
              nombre={planta.nombre}
              descripcion={planta.descripcion}
              ingredientes={planta.ingredientes}
              instrucciones={planta.instrucciones}
              beneficios={planta.beneficios}
              precauciones={planta.precauciones}
              imagen={planta.imagen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogo;