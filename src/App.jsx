import React, { useState } from 'react';
// Importa React y el hook useState para manejar estados en el componente.
import Sidebar from './Sidebar';
// Importa el componente Sidebar para mostrar categorías de plantas.
import ListaPlantas from './ListaPlantas';
// Importa el componente ListaPlantas para mostrar las plantas filtradas.
import './App.css';
// Importa los estilos CSS para la aplicación.
import logo from './logo-findervision.jpg';
// Importa el logo que se usará en la cabecera.

const App = () => {
  // Define el componente principal de la aplicación.
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  // Estado para manejar la categoría seleccionada.
  const [plantaSeleccionada, setPlantaSeleccionada] = useState(null);
  // Estado para manejar la planta seleccionada en el modal.
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para manejar el término de búsqueda ingresado por el usuario.
  const [imagenAmpliada, setImagenAmpliada] = useState(false);
  // Estado para determinar si la imagen en el modal está ampliada.
  
  // Lista de plantas
  const plantas = [
    {
      nombre: 'Manzanilla',
      categoria: 'Sedante O Relajante',
      imagen: 'https://media.admagazine.com/photos/6486ce9afa2d32627ec10acf/master/pass/manzanilla-para-plantas.jpg',
      descripcion: 'La manzanilla es conocida por sus propiedades sedantes...',
      beneficios: 'Calma la ansiedad, alivia trastornos digestivos y mejora el sueño.',
      recetario: 'Infusión: Añadir 1 cucharada de flores secas de manzanilla a una taza de agua hirviendo. Dejar reposar durante 5-10 minutos.',
      precauciones: 'No debe consumirse en exceso durante el embarazo. Puede causar reacciones alérgicas en personas sensibles a las plantas de la familia Asteraceae.',
    },
    {
      nombre: 'Arnica',
      categoria: 'Cicatrizante',
      imagen: 'https://jardin.inecol.mx/images/PLANTA_MES/arnica1.jpg',
      descripcion: 'El árnica es una planta cicatrizante...',
      beneficios: 'Promueve la cicatrización de heridas y reduce la inflamación.',
      recetario: 'Ungüento: Aplicar crema de árnica sobre la zona afectada 2-3 veces al día.',
      precauciones: 'No aplicar sobre heridas abiertas. Puede causar irritación en pieles sensibles.',
    },
  ];
  // Define una lista de plantas con sus datos, como nombre, categoría, imagen y detalles adicionales.

  // Filtrado de plantas por categoría y búsqueda
  const plantasFiltradas = plantas.filter((planta) =>
    (categoriaSeleccionada ? planta.categoria === categoriaSeleccionada : true) &&
    (searchTerm ? planta.nombre.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );
  // Filtra las plantas según la categoría seleccionada y el término de búsqueda ingresado.

  // Funciones
  const seleccionarPlanta = (planta) => {
    setPlantaSeleccionada(planta);
    setImagenAmpliada(false); // Reinicia el estado de ampliación de la imagen.
  };
  // Maneja la selección de una planta para mostrarla en el modal.

  const cerrarModal = () => setPlantaSeleccionada(null);
  // Cierra el modal al establecer la planta seleccionada como null.

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  // Actualiza el estado del término de búsqueda según lo ingresado por el usuario.

  return (
    <div className="app">
      {/* Contenedor principal de la aplicación. */}
      
      <header className="header">
        {/* Encabezado de la aplicación. */}
        <div className="logo">
          <img src={logo} alt="Logo de Findervision" />
          {/* Muestra el logo de la aplicación. */}
        </div>
        <nav className="nav-links">
          <button onClick={(e) => e.preventDefault()}>Inicio</button>
          {/* Botón de navegación que no realiza ninguna acción en este caso. */}
        </nav>
        <div className="search">
          {/* Campo de búsqueda */}
          <input
            type="text"
            placeholder="Buscar plantas..."
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Campo de búsqueda"
          />
          <i className="fas fa-search" role="img" aria-label="Buscar"></i>
          {/* Icono de búsqueda */}
        </div>
        <div className="icons">
          <button onClick={(e) => e.preventDefault()}>Mi Cuenta</button>
          {/* Botón de cuenta de usuario, actualmente inactivo. */}
        </div>
      </header>

      <main className="main">
        {/* Área principal de la aplicación */}
        <Sidebar setCategoriaSeleccionada={setCategoriaSeleccionada} />
        {/* Componente Sidebar para seleccionar categorías */}
        <section className="content">
          <h1>Plantas Medicinales</h1>
          <ListaPlantas plantas={plantasFiltradas} seleccionarPlanta={seleccionarPlanta} />
          {/* Componente ListaPlantas para mostrar la lista de plantas filtradas */}
        </section>
      </main>

      {plantaSeleccionada && (
        <div className="modal">
          {/* Modal que aparece cuando se selecciona una planta */}
          <div className="modal-content">
            <span className="close" onClick={cerrarModal}>&times;</span>
            {/* Botón para cerrar el modal */}
            <h2>{plantaSeleccionada.nombre}</h2>
            <img
              src={plantaSeleccionada.imagen}
              alt={plantaSeleccionada.nombre}
              className={`modal-image ${imagenAmpliada ? 'ampliada' : ''}`}
              onClick={() => setImagenAmpliada(!imagenAmpliada)}
              // Alterna el estado para ampliar o reducir la imagen al hacer clic.
            />
            <p>
              <strong>Descripción:</strong> {plantaSeleccionada.descripcion}
              {/* Muestra la descripción de la planta. */}
            </p>
            <h3 className="section-title">Beneficios</h3>
            <p>{plantaSeleccionada.beneficios}</p>
            {/* Muestra los beneficios de la planta. */}
            <h3 className="section-title">Recetario</h3>
            <p>{plantaSeleccionada.recetario}</p>
            {/* Muestra el recetario para preparar la planta. */}
            <h3 className="section-title">Precauciones</h3>
            <p>{plantaSeleccionada.precauciones}</p>
            {/* Muestra las precauciones asociadas a la planta. */}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
// Exporta el componente para ser usado en otros archivos.