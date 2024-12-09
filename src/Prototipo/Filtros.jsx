// Filtros.jsx
import React, { useState } from 'react';
// Importa React y el hook `useState` para manejar estados en el componente.

const Filtros = ({ onFilterChange }) => {
    // Define el componente `Filtros` que recibe la prop `onFilterChange`:
    // - `onFilterChange`: función para actualizar los filtros aplicados.

    const [categoria, setCategoria] = useState('');
    // Estado para manejar la categoría seleccionada.

    const [propiedad, setPropiedad] = useState('');
    // Estado para manejar la propiedad seleccionada.

    const handleCategoriaChange = (e) => {
        // Función que maneja el cambio de la categoría seleccionada.
        setCategoria(e.target.value);
        // Actualiza el estado de la categoría.

        onFilterChange({ categoria: e.target.value, propiedad });
        // Llama a la función `onFilterChange` para aplicar los nuevos filtros.
    };

    const handlePropiedadChange = (e) => {
        // Función que maneja el cambio de la propiedad seleccionada.
        setPropiedad(e.target.value);
        // Actualiza el estado de la propiedad.

        onFilterChange({ categoria, propiedad: e.target.value });
        // Llama a la función `onFilterChange` para aplicar los nuevos filtros.
    };

    return (
        // Renderiza el componente de filtros.
        <div className="filtros">
            {/* Contenedor principal de los filtros. */}

            <select onChange={handleCategoriaChange} value={categoria}>
                {/* Menú desplegable para seleccionar una categoría. */}
                <option value="">Categoría</option>
                {/* Opción predeterminada que muestra "Categoría". */}
                <option value="medicinal">Medicinal</option>
                {/* Opción para seleccionar plantas medicinales. */}
                <option value="peligrosa">Peligrosa</option>
                {/* Opción para seleccionar plantas peligrosas. */}
            </select>

            <select onChange={handlePropiedadChange} value={propiedad}>
                {/* Menú desplegable para seleccionar una propiedad. */}
                <option value="">Propiedad</option>
                {/* Opción predeterminada que muestra "Propiedad". */}
                <option value="antiinflamatoria">Antiinflamatoria</option>
                {/* Opción para seleccionar plantas con propiedades antiinflamatorias. */}
                <option value="toxicidad">Tóxica</option>
                {/* Opción para seleccionar plantas con propiedades tóxicas. */}
            </select>
        </div>
    );
};

export default Filtros;
// Exporta el componente para ser utilizado en otros archivos.
