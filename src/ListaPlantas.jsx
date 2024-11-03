import React from 'react'; // Importa la biblioteca React para poder usar componentes de React
import Planta from './Planta'; // Importa el componente 'Planta' para poder usarlo en este archivo
import './ListaPlantas.css'; // Importa los estilos específicos desde el archivo CSS 'ListaPlantas.css' para el componente ListaPlantas

// Define el componente funcional 'ListaPlantas', que recibe un array de 'plantas' y una función 'seleccionarPlanta' como props
const ListaPlantas = ({ plantas, seleccionarPlanta }) => {
  
  // Retorna la estructura del componente JSX
  return (
    // 'div' principal con la clase 'lista-plantas', que contiene la lista de plantas
    <div className="lista-plantas">
      
      {/* Mapea el array 'plantas' y genera un componente 'Planta' para cada elemento. 
          El índice del array (index) se usa como la clave única (key) de cada elemento en la lista */}
      {plantas.map((planta, index) => (
        
        // Renderiza el componente 'Planta' pasando los valores correspondientes de nombre, categoría e imagen
        <Planta
          key={index} // Asigna el índice como clave única para ayudar a React a identificar los elementos de la lista
          nombre={planta.nombre} // Pasa el nombre de la planta como prop al componente 'Planta'
          categoria={planta.categoria} // Pasa la categoría de la planta como prop al componente 'Planta'
          imagen={planta.imagen} // Pasa la imagen de la planta como prop al componente 'Planta'
          
          // Pasa una función 'seleccionarPlanta' como prop que se ejecutará cuando se haga clic en la planta.
          // La función llama a 'seleccionarPlanta' con el objeto 'planta' actual
          seleccionarPlanta={() => seleccionarPlanta(planta)}
        />
      ))}
    </div>
  );
};

// Exporta el componente 'ListaPlantas' para que pueda ser utilizado en otros archivos
export default ListaPlantas;