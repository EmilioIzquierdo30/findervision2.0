import React from 'react';
// Importa React para definir el componente funcional.

const Modal = ({ planta, onClose }) => {
    // Define el componente `Modal` que recibe las props:
    // - `planta`: objeto con la información de la planta seleccionada.
    // - `onClose`: función para cerrar el modal.

    const modalClase = planta.esPeligrosa ? 'modal peligrosa' : 'modal';
    // Define una clase CSS dinámica según si la planta es peligrosa o no.

    return (
        // Renderiza el modal.
        <div className={modalClase}>
            {/* Contenedor principal del modal con clase CSS dinámica. */}
            <div className="modal-content">
                {/* Contenedor del contenido del modal. */}

                <h2>{planta.nombre}</h2>
                {/* Muestra el nombre de la planta. */}

                <p><strong>Descripción:</strong> {planta.descripcion}</p>
                {/* Muestra la descripción de la planta con un texto destacado. */}

                <h3 className="section-title">Beneficios</h3>
                {/* Título para la sección de beneficios. */}
                <p>{planta.beneficios}</p>
                {/* Muestra los beneficios de la planta. */}

                <h3 className="section-title">Recetario</h3>
                {/* Título para la sección del recetario. */}
                <p>{planta.recetario}</p>
                {/* Muestra el recetario asociado a la planta. */}

                <h3 className="section-title">Precauciones</h3>
                {/* Título para la sección de precauciones. */}
                <p>{planta.precauciones}</p>
                {/* Muestra las precauciones relacionadas con la planta. */}

                <button onClick={onClose} className="button-advertencia">
                    {/* Botón que llama a la función `onClose` para cerrar el modal. */}
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Modal;
// Exporta el componente para ser utilizado en otros archivos.