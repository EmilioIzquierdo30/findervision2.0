import React from 'react';

const Planta = ({ planta, toggleFavorito, isFavorito }) => {
    const plantaClase = planta.esPeligrosa ? 'planta peligrosa' : 'planta';

    return (
        <div className={plantaClase}>
            {planta.imagen && (
                <img src={planta.imagen} alt={planta.nombre} className="planta-imagen" />
            )}
            <h2>{planta.nombre}</h2>
            <p>{planta.descripcion}</p>
            <button onClick={() => toggleFavorito(planta.id)}>
                {isFavorito ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
            </button>
        </div>
    );
};

export default Planta;
