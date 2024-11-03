import React from 'react'; // Importa la biblioteca React para poder usar componentes de React
import './Planta.css'; // Importa los estilos específicos desde el archivo CSS 'Planta.css' para el componente Planta

// Define el componente funcional 'Planta' que recibe 'nombre', 'categoria', 'imagen' y 'seleccionarPlanta' como propiedades (props)
const Planta = ({ nombre, categoria, imagen, seleccionarPlanta }) => {
  
  // Define una variable para la imagen por defecto, utilizada si no se proporciona una imagen específica
  const defaultImage = "URL_de_imagen_por_defecto"; 

  // Retorna la estructura del componente JSX
  return (
    // 'div' principal con la clase 'planta', y un evento onClick que ejecuta la función 'seleccionarPlanta' al hacer clic en la planta
    <div className="planta" onClick={seleccionarPlanta}> 
      
      {/* Muestra la imagen de la planta. Si no se proporciona una imagen, utiliza la imagen por defecto */}
      <img src={imagen || defaultImage} alt={nombre} className="planta-imagen" />
      
      {/* 'div' que contiene la información de la planta */}
      <div className="planta-info">
        
        {/* Muestra el nombre de la planta dentro de un 'div' con la clase 'planta-nombre' */}
        <div className="planta-nombre">{nombre}</div>
        
        {/* Muestra la categoría de la planta dentro de un 'div' con la clase 'planta-categoria' */}
        <div className="planta-categoria">{categoria}</div>
      </div>
    </div>
  );
};

// Exporta el componente 'Planta' para que pueda ser utilizado en otros archivos
export default Planta;