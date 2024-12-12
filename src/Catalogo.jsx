import React, { useState } from 'react';
// Importa React y el hook useState para manejar estados.
import Filtros from './Filtros';
// Importa el componente Filtros para manejar la selección de filtros.


// Componente Modal para mostrar detalles de la planta
const Modal = ({ planta, onClose }) => (
    // Define un componente Modal que recibe la planta seleccionada y una función para cerrarlo.
    <div className="modal">
        {/* Contenedor principal del modal */}
        <div className="modal-content">
            {/* Contenido del modal */}
            <h2>{planta.nombre}</h2>
            {/* Muestra el nombre de la planta */}
            <p>{planta.descripcion}</p>
            {/* Muestra la descripción de la planta */}
            <div className="section-title">Propiedades Medicinales</div>
            {/* Título para la sección de propiedades */}
            <p>{planta.propiedades}</p>
            {/* Muestra las propiedades medicinales de la planta */}
            <div className="section-title">Efectos Secundarios</div>
            {/* Título para la sección de efectos secundarios */}
            <p>{planta.efectos}</p>
            {/* Muestra los efectos secundarios de la planta */}
            <button onClick={onClose}>Cerrar</button>
            {/* Botón para cerrar el modal */}
        </div>
    </div>
);


const Catalogo = ({ plantas }) => {
    // Componente principal del catálogo que recibe una lista de plantas.

    const [filtros, setFiltros] = useState({ categoria: '', propiedad: '' });
    // Estado para manejar los filtros aplicados (categoría y propiedad).

    const [search, setSearch] = useState('');
    // Estado para manejar el término de búsqueda ingresado por el usuario.

    const [favoritos, setFavoritos] = useState([]);
    // Estado para manejar las plantas marcadas como favoritas.

    const [selectedPlanta, setSelectedPlanta] = useState(null);
    // Estado para manejar la planta seleccionada y mostrarla en el modal.

    // Función para actualizar filtros
    const handleFilterChange = (newFilters) => setFiltros(newFilters);
    // Actualiza los filtros cuando se seleccionan nuevas opciones en el componente Filtros.

    // Función para alternar favoritos
    const toggleFavorito = (id) => {
        // Alterna el estado de una planta entre favorita y no favorita.
        setFavoritos((prev) =>
            prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
            // Si la planta está en favoritos, la elimina. Si no, la agrega.
        );
    };

    // Plantas filtradas por categoría, propiedad, y búsqueda
    const filteredPlantas = plantas.filter(planta =>
        // Filtra las plantas según los filtros y el término de búsqueda.
        (!filtros.categoria || planta.categoria === filtros.categoria) &&
        (!filtros.propiedad || planta.propiedades.includes(filtros.propiedad)) &&
        planta.nombre.toLowerCase().includes(search.toLowerCase())
        // Aplica los filtros solo si están definidos y verifica si el nombre incluye el término de búsqueda.
    );

    // Función para abrir modal de detalles de planta
    const openModal = (planta) => setSelectedPlanta(planta);
    // Actualiza el estado de la planta seleccionada para abrir el modal.

    // Función para cerrar el modal
    const closeModal = () => setSelectedPlanta(null);
    // Establece el estado de la planta seleccionada como null para cerrar el modal.

    return (
        <div>
            {/* Contenedor principal del catálogo */}
            <input
                type="text"
                placeholder="Buscar planta..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-bar"
                // Campo de búsqueda que actualiza el estado `search` con cada cambio.
            />
            <Filtros onFilterChange={handleFilterChange} />
            {/* Componente Filtros que recibe la función para actualizar los filtros */}

            <div className="lista-plantas">
                {/* Contenedor para la lista de plantas */}
                {filteredPlantas.map(planta => (
                    // Mapea las plantas filtradas para mostrarlas.
                    <div className="planta" key={planta.id} onClick={() => openModal(planta)}>
                        {/* Contenedor para cada planta. Abre el modal al hacer clic. */}
                        <h2>{planta.nombre}</h2>
                        {/* Muestra el nombre de la planta */}
                        <button onClick={(e) => {
                            e.stopPropagation();
                            // Evita que se abra el modal al hacer clic en el botón.
                            toggleFavorito(planta.id);
                            // Alterna el estado de favorito para la planta seleccionada.
                        }}>
                            {favoritos.includes(planta.id) ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                            {/* Muestra texto dinámico según si la planta está en favoritos */}
                        </button>
                    </div>
                ))}
            </div>

            {selectedPlanta && (
                // Muestra el modal si hay una planta seleccionada.
                <Modal planta={selectedPlanta} onClose={closeModal} />
                // Pasa los datos de la planta seleccionada y la función para cerrar el modal.
            )}
        </div>
    );
};

export default Catalogo;
// Exporta el componente para su uso en otros archivos.