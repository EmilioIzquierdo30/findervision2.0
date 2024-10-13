// Catalogo.js
import React from 'react';
import Button from './Button';

const Catalogo = ({ plantas }) => {
  const handleButtonClick = (planta) => {
    // Aquí puedes agregar la logica para redirigir a la ventana correspondiente
    console.log(`Se seleccionó la planta: ${planta.nombre}`);
  };

  return (
    <div>
      {plantas.map((planta, index) => (
        <Button key={index} planta={planta} onClick={handleButtonClick} />
      ))}
    </div>
  );
};

export default Catalogo;