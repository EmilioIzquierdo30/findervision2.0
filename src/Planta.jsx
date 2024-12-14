import React, { useState } from "react";

const Planta = ({ planta }) => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  const handleToggleDetalles = () => setMostrarDetalles(!mostrarDetalles);
  const handleToggleImagen = () => setImagenAmpliada(!imagenAmpliada);

  // Desestructuramos las propiedades del objeto planta para un acceso más limpio
  const { nombre, imagen, categoria, descripcion, beneficios, recetas } = planta;

  return (
    <>
      {/* Tarjeta inicial */}
      <div className="planta">
        <h2>{nombre}</h2>
        <img
          src={imagen}
          alt={`Imagen de ${nombre}`}
          onClick={handleToggleDetalles}
          style={{ cursor: "pointer" }}
        />
        <p>{descripcion}</p>
      </div>

      {/* Modal con detalles */}
      {mostrarDetalles && (
        <div className="modal-overlay" onClick={handleToggleDetalles}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()} // Prevenir que el clic cierre el modal
          >
            <span
              className="close"
              onClick={handleToggleDetalles}
              aria-label="Cerrar"
            >
              &times;
            </span>
            <h2>{nombre}</h2>

            {/* Imagen con opción de ampliación */}
            <img
              src={imagen}
              alt={`Imagen ampliada de ${nombre}`}
              className={imagenAmpliada ? "modal-img ampliada" : "modal-img"}
              onClick={handleToggleImagen}
              style={{ cursor: "zoom-in" }}
            />

            {/* Contenido del modal */}
            <div className="modal-content">
              <div className="modal-section">
                <h3>Categoría:</h3>
                <p>{categoria}</p>
              </div>
              <div className="modal-section">
                <h3>Descripción:</h3>
                <p>{descripcion}</p>
              </div>
              <div className="modal-section">
                <h3>Beneficios:</h3>
                <p>{beneficios}</p>
              </div>
              <div className="modal-section">
                <h3>Recetas:</h3>
                {recetas && recetas.length > 0 ? (
                  recetas.map((receta, index) => (
                    <div key={index} className="receta">
                      <h4>{receta.titulo}</h4>
                      <p>
                        <strong>Descripción:</strong> {receta.descripcion}
                      </p>
                      <p>
                        <strong>Ingredientes:</strong> {receta.ingredientes}
                      </p>
                      <p>
                        <strong>Instrucciones:</strong> {receta.instrucciones}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No hay recetas disponibles para esta planta.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Planta;
