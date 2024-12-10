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
        <div className={`${plantaClase} contenedor-planta`}>
            {/* Contenedor principal de la planta con clase CSS dinámica. */}
            <h2 className="titulo-planta">{planta.nombre}</h2>
            {/* Muestra el nombre de la planta con estilo. */}

            {planta.imagen && (
                // Verifica si la planta tiene una imagen antes de renderizarla.
                <img src={planta.imagen} alt={planta.nombre} className="planta-imagen" />
                // Muestra la imagen de la planta con una clase CSS para su estilo.
            )}

            <div className="informacion">
                <h3 className="subtitulo">Descripción:</h3>
                <p className="descripcion">{planta.descripcion}</p>
                {/* Muestra la descripción de la planta. */}

                <h3 className="subtitulo">Beneficios:</h3>
                <p className="beneficios">{planta.beneficios}</p>
                {/* Muestra los beneficios de la planta si están disponibles. */}

                {planta.recetas && planta.recetas.length > 0 && (
                    <>
                        <h3 className="subtitulo">Recetario:</h3>
                        <ul className="recetario">
                            {planta.recetas.map((receta, index) => (
                                <li key={index}>
                                    <h4>{receta.titulo}</h4>
                                    <p><strong>Descripción:</strong> {receta.descripcion}</p>
                                    <p><strong>Ingredientes:</strong> {receta.ingredientes}</p>
                                    <p><strong>Instrucciones:</strong> {receta.instrucciones}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>

            <div className="acciones">
                <button onClick={() => toggleFavorito(planta.id)}>
                    {isFavorito ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                </button>
            </div>
        </div>
    );
};

export default Planta;
// Exporta el componente para ser utilizado en otros archivos.
