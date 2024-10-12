import React from 'react';
import estilos from './slider.module.css'; // Asegúrate de tener los estilos correctos

function Slider({ imagenes }) {
  // Variables y Estados
  const [imagenActual, setImagenActual] = React.useState(0);
  const cantidad = imagenes?.length;

  // Return prematuro para evitar errores
  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <div className={estilos.sliderContainer}>
      <button onClick={anteriorImagen}>←</button>
      
      {imagenes.map((imagen, index) => {
        return (
          <div
            className={
              imagenActual === index
                ? `${estilos.slide} ${estilos.active}`
                : estilos.slide
            }
            key={index}
          >
            {imagenActual === index && (
              <div className={estilos.slideContent}>
                <img src={imagen.url} alt={imagen.nombre} className={estilos.image} />
                
                <div className={estilos.textSection}>
                  <h2>{imagen.nombre}</h2>
                  <p>{imagen.descripcion}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
      
      <button onClick={siguienteImagen}>→</button>
    </div>
  );
}

export default Slider;
