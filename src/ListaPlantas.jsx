import React from 'react';
import Planta from './Planta';
import './ListaPlantas.css'; // Importa los estilos específicos para la lista de plantas

const ListaPlantas = ({ plantas, seleccionarPlanta }) => {
  return (
    <div className="lista-plantas">
      {plantas.map((planta, index) => (
        <Planta
          key={index}
          nombre={planta.nombre}
          categoria={planta.categoria}
          imagen={planta.imagen}
          seleccionarPlanta={() => seleccionarPlanta(planta)}
        />
      ))}
    </div>
  );
};

export default ListaPlantas;
