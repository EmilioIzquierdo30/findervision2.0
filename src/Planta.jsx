import React, { useState } from "react";

const Planta = ({ planta }) => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

  const toggleDetalles = () => setMostrarDetalles(!mostrarDetalles);
  const toggleImagen = () => setImagenAmpliada(!imagenAmpliada);

  return (
    <>
      {/* Tarjeta inicial */}
      <div className="planta">
        <h2>{planta.nombre}</h2>
        <img
          src={planta.imagen}
          alt={planta.nombre}
          onClick={toggleDetalles}
          style={{ cursor: "pointer" }}
        />
        <p>{planta.descripcion}</p>
        <button className="favorito-boton">Agregar a Favoritos</button>
      </div>

      {/* Modal con detalles */}
      {mostrarDetalles && (
        <div className="modal-overlay" onClick={toggleDetalles}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={toggleDetalles}>
              &times;
            </span>
            <h2>{planta.nombre}</h2>
            {/* Imagen con opción de ampliación */}
            <img
              src={planta.imagen}
              alt={planta.nombre}
              className={imagenAmpliada ? "modal-img ampliada" : "modal-img"}
              onClick={toggleImagen}
            />
            <div className="modal-content">
              <div className="modal-section">
                <h3>Categoría:</h3>
                <p>{planta.categoria}</p>
              </div>
              <div className="modal-section">
                <h3>Descripción:</h3>
                <p>{planta.descripcion}</p>
              </div>
              <div className="modal-section">
                <h3>Beneficios:</h3>
                <p>{planta.beneficios}</p>
              </div>
              <div className="modal-section">
                <h3>Receta:</h3>
                {planta.recetas.map((receta, index) => (
                  <div key={index} className="receta">
                    <h4>{receta.titulo}</h4>
                    <p><strong>Descripción:</strong> {receta.descripcion}</p>
                    <p><strong>Ingredientes:</strong> {receta.ingredientes}</p>
                    <p><strong>Instrucciones:</strong> {receta.instrucciones}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Planta;
