import React from 'react';
// Importa React para definir el componente funcional.

import Planta from './Planta';
// Importa el componente `Planta` para renderizar cada planta individual.

const ListaPlantas = ({ plantas, seleccionarPlanta, toggleFavorito }) => {
    // Define el componente `ListaPlantas` que recibe las props:
    // - `plantas`: lista de objetos de plantas a mostrar.
    // - `seleccionarPlanta`: función para manejar la selección de una planta.
    // - `toggleFavorito`: función para alternar el estado de favorito de una planta.

    return (
        // Renderiza la lista de plantas.
        <div className="lista-plantas">
            {/* Contenedor principal para la lista de plantas. */}

            {plantas.map((planta, index) => (
                // Itera sobre la lista de plantas para renderizar cada una.
                <div key={index} onClick={() => seleccionarPlanta(planta)}>
                    {/* Cada planta se envuelve en un `div` que llama a `seleccionarPlanta` al hacer clic. */}
                    <Planta planta={planta} onToggleFavorito={toggleFavorito} />
                    {/* Renderiza el componente `Planta` pasando los datos de la planta y la función para alternar favoritos. */}
                </div>
            ))}
        </div>
    );
};

export default ListaPlantas;
// Exporta el componente para ser utilizado en otros archivos.