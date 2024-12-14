import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para la validación de props.
import Planta from './Planta'; // Importa el componente `Planta`.

const ListaPlantas = ({ plantas, seleccionarPlanta, toggleFavorito }) => {
    return (
        <div className="lista-plantas">
            {/* Itera sobre la lista de plantas y renderiza cada una */}
            {plantas.map((planta) => (
                <div
                    key={planta.id || planta.nombre} // Usa un identificador único como `key`.
                    className="planta-container"
                    onClick={() => seleccionarPlanta(planta)} // Llama a `seleccionarPlanta` al hacer clic.
                >
                    <Planta
                        planta={planta} // Pasa los datos de la planta.
                        onToggleFavorito={() => toggleFavorito(planta)} // Llama a `toggleFavorito` al hacer clic en favoritos.
                    />
                </div>
            ))}
        </div>
    );
};

// Validación de las props usando PropTypes
ListaPlantas.propTypes = {
    plantas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            nombre: PropTypes.string.isRequired,
            categoria: PropTypes.string,
            descripcion: PropTypes.string,
            imagen: PropTypes.string,
        })
    ).isRequired,
    seleccionarPlanta: PropTypes.func.isRequired,
    toggleFavorito: PropTypes.func.isRequired,
};

export default ListaPlantas;