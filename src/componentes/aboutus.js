import React from "react";
import estilos from './aboutus.module.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

function AboutUs() {
  return (
    <div className={estilos.aboutContainer}>
      <div className={estilos.overlay}>
        <h2 className={estilos.title}>Sobre Nosotros</h2>
        <p className={estilos.description}>
          En <strong>FinderVision</strong>, nuestro objetivo es hacer que la identificación de plantas medicinales sea fácil y accesible para todos. A través de nuestra herramienta, puedes subir fotos de plantas y obtener información sobre sus usos medicinales y beneficios para la salud.
        </p>
        <p className={estilos.description}>
          Creemos en el poder de la naturaleza para mejorar la vida de las personas, y trabajamos constantemente para expandir nuestra base de datos con más plantas y conocimientos. Nuestro equipo está formado por expertos en botánica y tecnología, comprometidos con brindar una experiencia precisa y confiable para nuestros usuarios.
        </p>
        <p className={estilos.description}>
          Únete a nosotros en este viaje hacia un mundo más saludable y natural. ¡Descubre el poder de las plantas medicinales hoy mismo!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
