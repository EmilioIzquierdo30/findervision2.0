import React, { useState, useRef } from 'react';

const Catalogo = ({ plantas }) => {
  const [indice, setIndice] = useState(0);
  const listaRef = useRef(null);

  const handleFlechaIzquierda = () => {
    if (indice > 0) {
      setIndice(indice - 1);
      listaRef.current.scrollLeft -= 350;
    }
  };

  const handleFlechaDerecha = () => {
    if (indice < plantas.length - 1) {
      setIndice(indice + 1);
      listaRef.current.scrollLeft += 350;
    }
  };

  return (
    <div className="catalogo">
      <h1>Catálogo de plantas</h1>
      <div className="flechas">
        <button className="flecha izquierda" onClick={handleFlechaIzquierda}>
          &#60;
        </button>
        <button className="flecha derecha" onClick={handleFlechaDerecha}>
          &#62 ;
        </button>
      </div>
      <ul ref={listaRef}>
        {plantas.map((planta, index) => (
          <li key={index}>
            <img src={planta.imagen} alt={planta.nombre} />
            <h2>{planta.nombre}</h2>
            <p>{planta.descripcion}</p>
            {/* Aquí puedes agregar más información sobre la planta */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogo;