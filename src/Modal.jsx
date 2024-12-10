import React from 'react';
import './Modal.css'; // Asegúrate de tener el archivo CSS correctamente enlazado

const Modal = ({ planta, onClose }) => {
    if (!planta) return null; // Si no hay planta seleccionada, no renderizar nada

    const modalClase = planta.esPeligrosa ? 'modal peligrosa' : 'modal';

    return (
        <div className="modal-overlay">
            <div className={modalClase}>
                <div className="modal-content">
                    <h2 className="modal-title">{planta.nombre}</h2>
                    {planta.imagen && (
                        <img
                            src={planta.imagen}
                            alt={planta.nombre}
                            className="modal-image"
                        />
                    )}
                    <p className="modal-description">
                        <strong>Descripción:</strong> {planta.descripcion}
                    </p>

                    {planta.beneficios && (
                        <>
                            <h3 className="section-title">Beneficios</h3>
                            <p>{planta.beneficios}</p>
                        </>
                    )}

                    {planta.recetario && (
                        <>
                            <h3 className="section-title">Recetario</h3>
                            <p>{planta.recetario}</p>
                        </>
                    )}

                    {planta.precauciones && (
                        <>
                            <h3 className="section-title">Precauciones</h3>
                            <p>{planta.precauciones}</p>
                        </>
                    )}

                    <button onClick={onClose} className="button-advertencia">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
