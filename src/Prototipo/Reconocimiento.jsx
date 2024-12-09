import React from 'react';
// Importa React para definir el componente funcional.

const Planta = ({ planta, toggleFavorito, isFavorito }) => {
    // Define el componente `Planta` que recibe las props:
    // - `planta`: objeto con la información de la planta.
    // - `toggleFavorito`: función para alternar el estado de favorito.
    // - `isFavorito`: booleano que indica si la planta está en favoritos.

    const plantaClase = planta.esPeligrosa ? 'planta peligrosa' : 'planta';
    // Define una clase CSS dinámica según si la planta es peligrosa o no.

    return (
        // Renderiza la interfaz de usuario para mostrar una planta.
        <div className={plantaClase}>
            {/* Contenedor principal de la planta con clase CSS dinámica. */}

            {planta.imagen && (
                // Verifica si la planta tiene una imagen antes de renderizarla.
                <img src={planta.imagen} alt={planta.nombre} className="planta-imagen" />
                // Muestra la imagen de la planta con una clase CSS para su estilo.
            )}

            <h2>{planta.nombre}</h2>
            {/* Muestra el nombre de la planta. */}

            <p>{planta.descripcion}</p>
            {/* Muestra la descripción de la planta. */}

            <button onClick={() => toggleFavorito(planta.id)}>
                {/* Botón que llama a `toggleFavorito` con el ID de la planta para alternar su estado de favorito. */}
                {isFavorito ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                {/* Muestra texto dinámico según si la planta está en favoritos o no. */}
            </button>
        </div>
    );
};

export default Planta;
// Exporta el componente para ser utilizado en otros archivos.