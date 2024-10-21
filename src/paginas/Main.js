import React from 'react';
import '../App.css';
import Slider from '../componentes/slider';

function Main() {
  const mockImagenes = [
    {
      url: "https://i0.wp.com/revistamariaorsini.com/wp-content/uploads/2018/10/epazoteft.jpg?fit=948%2C622&ssl=1",
      nombre: "Epazote",
      descripcion: "El epazote es una planta utilizada en la gastronomía mexicana, conocida por sus propiedades medicinales y su sabor distintivo."
    },
    {
      url: "https://imag.bonviveur.com/algunas-hojas-de-hierbabuena.jpg",
      nombre: "Hierbabuena",
      descripcion: "La hierbabuena es una hierba aromática utilizada en muchas culturas para dar sabor a platillos y bebidas, así como por sus propiedades digestivas."
    },
    {
      url: "https://imag.bonviveur.com/corte-transversal-de-una-papaya.webp",
      nombre: "Papaya",
      descripcion: "La papaya es una fruta tropical rica en vitaminas y enzimas que ayudan a la digestión."
    }
  ];

  return (
    <div className="main-container">
      <div className="content-section">
        <h1 className="main-title">Identifica plantas medicinales y sus beneficios!</h1>
        
        {/* Sección de Call-to-Action (CTA) */}
        <div className="cta-section">
          <h2>¡Prueba nuestra herramienta ahora!</h2>
          <button className="cta-button">Comienza Gratis</button>
        </div>
      </div>

      <div className="plant-identify-container">
        <h1>Identifica plantas al instante con una foto</h1>
        <p>Haz una foto para identificar la planta al instante, obteniendo información rápida sobre los remedios caseros de ella, tratamientos, cuidados, usos, etc.</p>
          <img src="./logo.jpeg" alt="Imagen planta en teléfono" />
          <br />
          <button className="cta-button">Descarga la aplicación gratis</button>
          <div className="alert">
            <img src="https://img.icons8.com/color/16/000000/warning-shield.png" alt="Icono advertencia" />
            ¿Es esta planta buena para un remedio para la toz?
          </div>
      </div>

      <Slider imagenes={mockImagenes} />
    </div>
  );
}

export default Main;