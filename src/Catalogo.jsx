import React, { useState } from 'react';
import Filtros from './Archivos jsx/Filtros';

// Componente Modal para mostrar detalles de la planta
const Modal = ({ planta, onClose }) => (
    <div className="modal">
        <div className="modal-content">
            <h2>{planta.nombre}</h2>
            <p>{planta.descripcion}</p>
            <div className="section-title">Propiedades Medicinales</div>
            <p>{planta.propiedades}</p>
            <div className="section-title">Efectos Secundarios</div>
            <p>{planta.efectos}</p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    </div>
);

const Catalogo = ({ plantas }) => {
    const [filtros, setFiltros] = useState({ categoria: '', propiedad: '' });
    const [search, setSearch] = useState(''); // Agregar estado de búsqueda
    const [favoritos, setFavoritos] = useState([]);
    const [selectedPlanta, setSelectedPlanta] = useState(null); // Para manejar el modal de detalles

    // Función para actualizar filtros
    const handleFilterChange = (newFilters) => setFiltros(newFilters);

    // Función para alternar favoritos
    const toggleFavorito = (id) => {
        setFavoritos((prev) =>
            prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
        );
    };

    // Plantas filtradas por categoría, propiedad, y búsqueda
    const filteredPlantas = plantas.filter(planta =>
        (!filtros.categoria || planta.categoria === filtros.categoria) &&
        (!filtros.propiedad || planta.propiedades.includes(filtros.propiedad)) &&
        planta.nombre.toLowerCase().includes(search.toLowerCase())
    );

    // Función para abrir modal de detalles de planta
    const openModal = (planta) => setSelectedPlanta(planta);

    // Función para cerrar el modal
    const closeModal = () => setSelectedPlanta(null);

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar planta..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-bar"
            />
            <Filtros onFilterChange={handleFilterChange} />
            <div className="lista-plantas">
                {filteredPlantas.map(planta => (
                    <div className="planta" key={planta.id} onClick={() => openModal(planta)}>
                        <h2>{planta.nombre}</h2>
                        <button onClick={(e) => {
                            e.stopPropagation(); // Prevenir que abra el modal
                            toggleFavorito(planta.id);
                        }}>
                            {favoritos.includes(planta.id) ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                        </button>
                    </div>
                ))}
            </div>

            {selectedPlanta && (
                <Modal planta={selectedPlanta} onClose={closeModal} />
            )}
        </div>
    );
};

export default Catalogo;
