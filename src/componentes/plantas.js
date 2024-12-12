import React from 'react';

const Planta = ({ nombre, descripcion, ingredientes, instrucciones, beneficios, precauciones, imagen }) => {
  return (
    <div className="planta-card">
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} style={{ width: '200px', height: 'auto' }} />
      <p>{descripcion}</p>
      <h3>Ingredientes:</h3>
      <p>{ingredientes || 'No disponible'}</p>
      <h3>Instrucciones:</h3>
      <p>{instrucciones || 'No disponible'}</p>
      <h3>Beneficios:</h3>
      <ul>
        {beneficios.length > 0 ? beneficios.map((beneficio, index) => <li key={index}>{beneficio}</li>) : <li>No disponible</li>}
      </ul>
      <h3>Precauciones:</h3>
      <ul>
        {precauciones.length > 0 ? precauciones.map((precaucion, index) => <li key={index}>{precaucion}</li>) : <li>No disponible</li>}
      </ul>
    </div>
  );
};

export default Planta;
