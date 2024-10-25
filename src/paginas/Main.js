import React from 'react';
import styles from '../App.module.css'; 
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
    <div className={styles.mainContainer}>
      <div className={styles.contentSection}>
        <h1 className={styles.mainTitle}>Identifica plantas medicinales y sus beneficios!</h1>
        
        {/* Sección de Call-to-Action (CTA) */}
        <div className={styles.ctaSection}>
          <h2>¡Prueba nuestra herramienta ahora!</h2>
          <button className={styles.ctaButton}>Comienza Gratis</button>
        </div>
      </div>

      {/* Componente de Identificación de Plantas */}
      <div className={styles.plantIdentifyContainer}>
        <h1 className={styles.mainTitle}>Identifica plantas al instante con una foto</h1>
        <p>Haz una foto para identificar la planta al instante, obteniendo información rápida sobre los remedios caseros de ella, tratamientos, cuidados, usos, etc.</p>
        <img src="/logo.jpeg" alt="Imagen planta en teléfono" className={styles.plantImage} />
        <button className={styles.ctaButton}>Descarga la aplicación gratis</button>
        <div className={styles.alert}>
          <img src="https://img.icons8.com/color/16/000000/warning-shield.png" alt="Icono advertencia" />
          ¿Es esta planta <strong>tóxica para mascotas</strong> o no?
        </div>
      </div>

      <Slider imagenes={mockImagenes} />
    </div>
  );
}

export default Main;
