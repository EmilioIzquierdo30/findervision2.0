import React from 'react';
import './Planta.css'; // Importa los estilos específicos para el componente Planta

const Planta = ({ nombre, categoria, imagen, seleccionarPlanta }) => {
  const defaultImage = "URL_de_imagen_por_defecto"; // Imagen por defecto si no hay imagen

  return (
    <div className="planta" onClick={seleccionarPlanta}>
      <img src={imagen || defaultImage} alt={nombre} className="planta-imagen" />
      <div className="planta-info">
        <div className="planta-nombre">{nombre}</div>
        <div className="planta-categoria">{categoria}</div>
      </div>
    </div>
  );
};

export default Planta;
