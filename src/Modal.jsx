import React from 'react';

const Modal = ({ planta, onClose }) => {
    const modalClase = planta.esPeligrosa ? 'modal peligrosa' : 'modal';

    return (
        <div className={modalClase}>
            <div className="modal-content">
                <h2>{planta.nombre}</h2>
                <p><strong>Descripción:</strong> {planta.descripcion}</p>
                <h3 className="section-title">Beneficios</h3>
                <p>{planta.beneficios}</p>
                <h3 className="section-title">Recetario</h3>
                <p>{planta.recetario}</p>
                <h3 className="section-title">Precauciones</h3>
                <p>{planta.precauciones}</p>
                <button onClick={onClose} className="button-advertencia">Cerrar</button>
            </div>
        </div>
    );
};

export default Modal;
