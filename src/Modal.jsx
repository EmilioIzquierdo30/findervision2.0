import React from "react";

const Modal = ({ planta, onClose }) => {
    if (!planta) return null; // Si no hay planta seleccionada, no renderizar nada

    const modalClase = planta.esPeligrosa ? 'modal peligrosa' : 'modal';

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className={modalClase} onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <h2 className="modal-title">{planta.nombre}</h2>
                    <p className="modal-description">
                        <strong>Descripción:</strong> {planta.descripcion}
                    </p>
                    <button onClick={onClose} className="button-advertencia">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;