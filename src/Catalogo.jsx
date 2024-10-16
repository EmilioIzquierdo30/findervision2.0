//Catalogo
// Importar las dependencias necesarias de React
import React from 'react'; // Importa React para utilizar componentes y funcionalidades
import Planta from './Planta'; // Importa el componente Planta para mostrar la información de cada planta
import './Catalogo.css'; // Importa los estilos CSS específicos para el componente Catalogo

// Definición del componente funcional Catalogo
const Catalogo = ({ plantas }) => { // El componente recibe un prop 'plantas', que es un array de objetos
  // Renderizado del componente
  return (
    <div className="catalogo"> {/* Contenedor principal del catálogo de plantas */}
      <h1>Catálogo De Plantas</h1> {/* Título principal del catálogo */}
      <ul> {/* Lista no ordenada para mostrar las plantas */}
        {plantas.map((planta, index) => ( // Mapea cada planta en el array 'plantas'
          <li key={index}> {/* Cada planta se renderiza como un elemento de lista */}
            <Planta // Llama al componente Planta y pasa las propiedades necesarias
              nombre={planta.nombre} // Nombre de la planta
              descripcion={planta.descripcion} // Descripción de la planta
              ingredientes={planta.ingredientes} // Ingredientes asociados con la planta
              instrucciones={planta.instrucciones} // Instrucciones de uso de la planta
              beneficios={planta.beneficios} // Beneficios de la planta
              precauciones={planta.precauciones} // Precauciones a tener en cuenta al usar la planta
              imagen={planta.imagen} // URL de la imagen de la planta
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exportar el componente Catalogo para usarlo en otros archivos
export default Catalogo;
