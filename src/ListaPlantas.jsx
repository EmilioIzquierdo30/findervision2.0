import React from 'react';
import Planta from './Planta';

const ListaPlantas = ({ plantas, seleccionarPlanta, toggleFavorito }) => {
    return (
        <div className="lista-plantas">
            {plantas.map((planta, index) => (
                <div key={index} onClick={() => seleccionarPlanta(planta)}>
                    <Planta planta={planta} onToggleFavorito={toggleFavorito} />
                </div>
            ))}
        </div>
    );
};

export default ListaPlantas;
