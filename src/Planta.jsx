import React from 'react';
import './index.js';

const Planta = ({
  nombre,
  descripcion,
  imagen,
  ingredientes = [],  // Aseguramos que ingredientes sea un array por defecto
  instrucciones = '',
  beneficios = '',
  precauciones = ''
}) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <img src={imagen} alt={nombre} />

      {/* Mostrar la lista de ingredientes solo si hay ingredientes */}
      {ingredientes.length > 0 && (
        <>
          <h3>Ingredientes:</h3>
          <ul>
            {ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </>
      )}

      {/* Mostrar instrucciones solo si no están vacías */}
      {instrucciones && (
        <>
          <h3>Instrucciones:</h3>
          <p>{instrucciones}</p>
        </>
      )}

      {/* Mostrar beneficios solo si no están vacíos */}
      {beneficios && (
        <>
          <h3>Beneficios:</h3>
          <p>{beneficios}</p>
        </>
      )}

      {/* Mostrar precauciones solo si no están vacías */}
      {precauciones && (
        <>
          <h3>Precauciones:</h3>
          <p>{precauciones}</p>
        </>
      )}
    </div>
  );
};

export default Planta;
