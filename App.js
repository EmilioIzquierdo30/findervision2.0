// App.js
import React from 'react';
import Catalogo from './Catalogo';

const plantas = [
  {
    nombre: 'Planta 1',
    descripcion: 'Esta es la planta 1',
    imagen: 'https://example.com/planta1.jpg',
  },
  {
    nombre: 'Planta 2',
    descripcion: 'Esta es la planta 2',
    imagen: 'https://example.com/planta2.jpg',
  },
  // ...
];

const App = () => {
  return (
    <div>
      <Catalogo plantas={plantas} />
    </div>
  );
};

export default App;