// ListaPlantas.jsx
import React from 'react';
import Planta from './Planta';
import './ListaPlantas.css'; // Importa los estilos específicos para la lista de plantas

const ListaPlantas = ({ plantas }) => {
  return (
    <div className="lista-plantas">
      {plantas.map((planta, index) => (
        <Planta
          key={index}
          nombre={planta.nombre}
          categoria={planta.categoria}
          color={planta.color}
          imagen={planta.imagen}
        />
      ))}
    </div>
  );
};

export default ListaPlantas;
