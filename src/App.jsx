import React, { useState } from 'react'; // Importa React y el hook useState para gestionar el estado
import ListaPlantas from './ListaPlantas'; // Importa el componente ListaPlantas
import './App.css'; // Importa los estilos generales de la aplicación

// Define el componente principal 'App'
const App = () => {
  // Estados del componente usando el hook useState
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(''); // Guarda la categoría seleccionada
  const [plantaSeleccionada, setPlantaSeleccionada] = useState(null); // Guarda la planta seleccionada para mostrar en el modal
  const [searchTerm, setSearchTerm] = useState(''); // Guarda el término de búsqueda del input
  const [imagenAmpliada, setImagenAmpliada] = useState(false); // Controla si la imagen del modal está ampliada

  // Array de objetos que contiene información de las plantas
  const plantas = [
    {
      nombre: 'Manzanilla',
      categoria: 'Sedante O Relajante',
      imagen: '',
      descripcion: 'La manzanilla es conocida por sus propiedades sedantes...',
      beneficios: 'Calma la ansiedad, alivia trastornos digestivos y mejora el sueño.',
      recetario: 'Infusión: Añadir 1 cucharada de flores secas de manzanilla a una taza de agua hirviendo. Dejar reposar durante 5-10 minutos.',
      precauciones: 'No debe consumirse en exceso durante el embarazo. Puede causar reacciones alérgicas en personas sensibles a las plantas de la familia Asteraceae.'
    },
    {
      nombre: 'Arnica',
      categoria: 'Cicatrizante',
      imagen: '',
      descripcion: 'El árnica es una planta cicatrizante...',
      beneficios: 'Promueve la cicatrización de heridas y reduce la inflamación.',
      recetario: 'Ungüento: Aplicar crema de árnica sobre la zona afectada 2-3 veces al día.',
      precauciones: 'No aplicar sobre heridas abiertas. Puede causar irritación en pieles sensibles.'
    },
    {
      nombre: 'Sabila',
      categoria: 'Cicatrizante',
      imagen: '',
      descripcion: 'El árnica es una planta cicatrizante...',
      beneficios: 'Promueve la cicatrización de heridas y reduce la inflamación.',
      recetario: 'Ungüento: Aplicar crema de árnica sobre la zona afectada 2-3 veces al día.',
      precauciones: 'No aplicar sobre heridas abiertas. Puede causar irritación en pieles sensibles.'
    },
    {
      nombre: 'Jengibre',
      categoria: 'Cicatrizante',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxam72Ho4tUYnEo7QdoSF0LAQwGVemTFt2xg&s',
      descripcion: 'El árnica es una planta cicatrizante...',
      beneficios: 'Promueve la cicatrización de heridas y reduce la inflamación.',
      recetario: 'Ungüento: Aplicar crema de árnica sobre la zona afectada 2-3 veces al día.',
      precauciones: 'No aplicar sobre heridas abiertas. Puede causar irritación en pieles sensibles.'
    },
    // Agrega más plantas según sea necesario
  ];

  // Función que establece la planta seleccionada para mostrar en el modal
  const seleccionarPlanta = (planta) => {
    setPlantaSeleccionada(planta);
  };
  // Función para cerrar el modal
  const cerrarModal = () => {
    setPlantaSeleccionada(null); // Resetea la planta seleccionada a 'null'
  };
  // Actualiza el estado del término de búsqueda cuando el usuario escribe en el input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Actualiza el estado del término de búsqueda
  };

  // Filtra las plantas según la categoría seleccionada y el término de búsqueda
  const plantasFiltradas = plantas.filter(planta => 
    (categoriaSeleccionada ? planta.categoria === categoriaSeleccionada : true) && // Filtra por categoría si se selecciona una
    (searchTerm ? planta.nombre.toLowerCase().includes(searchTerm.toLowerCase()) : true) // Filtra por búsqueda si hay un término
  );

  // Retorna el JSX del componente App
  return (
    <div className="app">
      <header className="header"> {/* Encabezado de la página */}
        <img alt="Logo de Findervision" src="https://imgur.com/a/nwIWchf" width="80" height="40" /> {/* Logo de la app */}
        <nav className="nav-links"> {/* Enlaces de navegación */}
          <a href="#">Inicio</a> {/* Enlace a Inicio */}
        </nav>
        <div className="search"> {/* Input de búsqueda */}
          <input
            placeholder="Buscar plantas..." // Placeholder del input
            type="text" // Tipo de input
            value={searchTerm} // Valor del input controlado por el estado
            onChange={handleSearchChange} // Evento de cambio para capturar la búsqueda
          />
          <i className="fas fa-search"></i> {/* Icono de búsqueda */}
        </div>
        <div className="icons"> {/* Íconos adicionales */}
          <i className="far fa-heart"></i> {/* Ícono de favorito */}
          <i className="fas fa-shopping-bag"></i> {/* Ícono de carrito de compras */}
          <a href="#">Mi Cuenta</a> {/* Enlace a la cuenta del usuario */}
        </div>
      </header>

      <main className="main">{/* Contenido principal */}
        <aside className="sidebar">{/* Barra lateral con filtros de categorías */}
          <a href="#" onClick={() => setCategoriaSeleccionada('')}>Mostrar Todas</a>{/* Resetea la categoría */}
          <a href="#" onClick={() => setCategoriaSeleccionada('Adaptogénicas')}>Adaptogénicas</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Analgésicas')}>Analgésicas</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Anticancerígenas')}>Anticancerígenas</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Antidiabéticas')}>Antidiabéticas</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Antiespasmódicas')}>Antiespasmódicas</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Antiinflamatorias')}>Antiinflamatorias</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Antimicrobianas')}>Antimicrobianas</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Antioxidantes')}>Antioxidantes</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Cardiotónicas')}>Cardiotónicas</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Cicatrizante')}>Cicatrizante</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Diuréticas')}>Diuréticas</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Digestivas')}>Digestivas</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Expectorantes')}>Expectorantes</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Hepatoprotectoras')}>Hepatoprotectoras</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Inmunoestimulantes')}>Inmunoestimulantes</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Neuroprotectoras')}>Neuroprotectoras</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Sedante O Relajante')}>Sedantes O Relajantes</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Tónicas')}>Tónicas</a>
        </aside>

        <section className="content"> {/* Sección principal del contenido */}
          <h1>Catálogo De Plantas Medicinales</h1> {/* Título */}
          {/* Renderiza la lista de plantas filtradas */}
          <ListaPlantas plantas={plantasFiltradas} seleccionarPlanta={seleccionarPlanta} />
        </section>

        {plantaSeleccionada && ( // Si hay una planta seleccionada, muestra el modal
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={cerrarModal}>&times;</span> {/* Botón para cerrar el modal */}
            <h2>{plantaSeleccionada.nombre}</h2> {/* Nombre de la planta */}
            <img
              src={plantaSeleccionada.imagen} // Muestra la imagen de la planta
              alt={plantaSeleccionada.nombre}
              className={`modal-image ${imagenAmpliada ? 'ampliada' : ''}`} // Aplica una clase extra si la imagen está ampliada
              onClick={() => setImagenAmpliada(!imagenAmpliada)} // Alterna el estado de ampliación de la imagen
            />
            
            <p><strong>Descripción: </strong>{plantaSeleccionada.descripcion}</p> {/* Muestra la descripción */}
            
            <h3 className="section-title">Beneficios</h3> {/* Sección de beneficios */}
            <p>{plantaSeleccionada.beneficios}</p>
            
            <h3 className="section-title">Recetario</h3> {/* Sección de recetario */}
            <p>{plantaSeleccionada.recetario}</p>
            
            <h3 className="section-title">Precauciones</h3> {/* Sección de precauciones */}
            <p>{plantaSeleccionada.precauciones}</p>
          </div>
        </div>
      )}

      </main>
    </div>
  );
};

export default App; // Exporta el componente App