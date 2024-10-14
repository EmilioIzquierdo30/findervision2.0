// Planta.jsx
import React from 'react';
import './Planta.css'; 

const Planta = ({
  nombre,
  descripcion,
  imagen,
  ingredientes = [],
  instrucciones = '',
  beneficios = '',
  precauciones = ''
}) => {
  return (
    <div className="planta">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <img src={imagen} alt={nombre} />

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

      {instrucciones && (
        <>
          <h3>Instrucciones:</h3>
          <p>{instrucciones}</p>
        </>
      )}

      {beneficios && (
        <>
          <h3>Beneficios:</h3>
          <p>{beneficios}</p>
        </>
      )}

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
