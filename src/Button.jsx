// Button.js
import React from 'react';

const Button = ({ planta, onClick }) => {
  return (
    <button onClick={() => onClick(planta)}>
      {planta.nombre}
    </button>
  );
};

export default Button;