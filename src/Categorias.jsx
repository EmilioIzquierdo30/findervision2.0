// Importar las dependencias necesarias de React
import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado
import Catalogo from './Catalogo'; // Importa el componente Catalogo
import Modal from 'react-modal'; // Importa el componente Modal para mostrar ventanas emergentes

// Configurar el elemento raíz para el modal (accesibilidad)
Modal.setAppElement('#root'); // Especifica el elemento que se considera la raíz para el modal

// Definición del componente funcional Categorias
const Categorias = ({ plantas }) => {
  // Obtener categorías únicas de las plantas utilizando un Set
  const categorias = [...new Set(plantas.map(planta => planta.categoria))];

  // Estado para la categoría seleccionada y si el modal está abierto
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null); // Inicializa como null
  const [modalAbierto, setModalAbierto] = useState(false); // Inicializa como false

  // Función para abrir el modal con la categoría seleccionada
  const abrirModal = (categoria) => {
    setCategoriaSeleccionada(categoria); // Actualiza la categoría seleccionada
    setModalAbierto(true); // Abre el modal
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setCategoriaSeleccionada(null); // Resetea la categoría seleccionada
    setModalAbierto(false); // Cierra el modal
  };

  // Filtrar plantas por categoría seleccionada
  const plantasFiltradas = categoriaSeleccionada
    ? plantas.filter(planta => planta.categoria === categoriaSeleccionada) // Filtra las plantas
    : []; // Si no hay categoría seleccionada, retorna un array vacío

  // Renderizado del componente
  return (
    <div>
      <h1>Catálogo de Plantas</h1> {/* Título del catálogo */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}> {/* Contenedor flexible para los botones */}
        {categorias.map((categoria, index) => ( // Mapea las categorías para crear botones
          <button key={index} onClick={() => abrirModal(categoria)}> {/* Botón para abrir el modal con la categoría correspondiente */}
            {categoria} {/* Nombre de la categoría */}
          </button>
        ))}
      </div>

      {/* Componente Modal para mostrar la lista de plantas filtradas */}
      <Modal
        isOpen={modalAbierto} // Propiedad que controla si el modal está abierto
        onRequestClose={cerrarModal} // Función para cerrar el modal
        contentLabel="Catálogo de Plantas" // Etiqueta accesible para el modal
        style={{
          content: {
            top: '50%', // Posiciona el contenido en el medio de la ventana
            left: '50%', // Posiciona el contenido en el medio de la ventana
            right: 'auto', // Sin ajustes en el lado derecho
            bottom: 'auto', // Sin ajustes en el lado inferior
            marginRight: '-50%', // Ajusta el margen para centrar el modal
            transform: 'translate(-50%, -50%)', // Centra el modal en la pantalla
            maxHeight: '80vh', // Altura máxima del modal al 80% de la ventana
            overflowY: 'auto' // Permite desplazamiento vertical si el contenido es mayor que la altura máxima
          }
        }}
      >
        <h2>{categoriaSeleccionada}</h2> {/* Muestra la categoría seleccionada */}
        <button onClick={cerrarModal} style={{ float: 'right' }}>Cerrar</button> {/* Botón para cerrar el modal */}
        <Catalogo plantas={plantasFiltradas} /> {/* Componente Catalogo que recibe las plantas filtradas */}
      </Modal>
    </div>
  );
};

// Exportar el componente Categorias para usarlo en otros archivos
export default Categorias;
