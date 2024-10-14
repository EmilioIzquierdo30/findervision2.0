// Catalogo.jsx
import React from 'react';
import Planta from './Planta';
import './Catalogo.css'; 

const Catalogo = ({ plantas }) => {
  return (
    <div className="catalogo">
      <h1>Catálogo De Plantas</h1>
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
