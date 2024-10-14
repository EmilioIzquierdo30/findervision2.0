// Importar las dependencias necesarias de React
import React from 'react'; // Importa React para usar componentes
import './Planta.css'; // Importa los estilos CSS específicos para el componente Planta

// Definición del componente funcional Planta
const Planta = ({
  nombre, // Propiedad para el nombre de la planta
  descripcion, // Propiedad para la descripción de la planta
  imagen, // Propiedad para la URL de la imagen de la planta
  ingredientes = [], // Propiedad para los ingredientes, inicializada como un array vacío
  instrucciones = '', // Propiedad para las instrucciones, inicializada como cadena vacía
  beneficios = '', // Propiedad para los beneficios, inicializada como cadena vacía
  precauciones = '' // Propiedad para las precauciones, inicializada como cadena vacía
}) => {
  // Renderizado del componente
  return (
    <div className="planta"> {/* Contenedor principal del componente */}
      <h2>{nombre}</h2> {/* Muestra el nombre de la planta como un encabezado de nivel 2 */}
      <p>{descripcion}</p> {/* Muestra la descripción de la planta en un párrafo */}
      <img src={imagen} alt={nombre} /> {/* Muestra la imagen de la planta con el atributo alt configurado con el nombre */}

      {ingredientes.length > 0 && ( // Verifica si hay ingredientes
        <> {/* Fragmento vacío para agrupar sin añadir un elemento extra al DOM */}
          <h3>Ingredientes:</h3> {/* Encabezado para la lista de ingredientes */}
          <ul> {/* Lista no ordenada para los ingredientes */}
            {ingredientes.map((ingrediente, index) => ( // Mapea los ingredientes para crear una lista
              <li key={index}>{ingrediente}</li> // Cada ingrediente se muestra en un elemento de lista
            ))}
          </ul>
        </>
      )}

      {instrucciones && ( // Verifica si hay instrucciones
        <> {/* Fragmento vacío para agrupar */}
          <h3>Instrucciones:</h3> {/* Encabezado para las instrucciones */}
          <p>{instrucciones}</p> {/* Muestra las instrucciones en un párrafo */}
        </>
      )}

      {beneficios && ( // Verifica si hay beneficios
        <> {/* Fragmento vacío para agrupar */}
          <h3>Beneficios:</h3> {/* Encabezado para los beneficios */}
          <p>{beneficios}</p> {/* Muestra los beneficios en un párrafo */}
        </>
      )}

      {precauciones && ( // Verifica si hay precauciones
        <> {/* Fragmento vacío para agrupar */}
          <h3>Precauciones:</h3> {/* Encabezado para las precauciones */}
          <p>{precauciones}</p> {/* Muestra las precauciones en un párrafo */}
        </>
      )}
    </div>
  );
};

// Exportar el componente Planta para usarlo en otros archivos
export default Planta;
