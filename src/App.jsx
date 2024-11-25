import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ListaPlantas from './ListaPlantas';
import './App.css';
import logo from './logo-findervision.jpg'; // Importa el logo

const App = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [plantaSeleccionada, setPlantaSeleccionada] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [imagenAmpliada, setImagenAmpliada] = useState(false);

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

  // Filtrado de plantas por categoría y búsqueda
  const plantasFiltradas = plantas.filter((planta) =>
    (categoriaSeleccionada ? planta.categoria === categoriaSeleccionada : true) &&
    (searchTerm ? planta.nombre.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  // Funciones
  const seleccionarPlanta = (planta) => {
    setPlantaSeleccionada(planta);
    setImagenAmpliada(false); // Reiniciar estado de la imagen
  };

  const cerrarModal = () => setPlantaSeleccionada(null);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo de Findervision" />
        </div>
        <nav className="nav-links">
          <button onClick={(e) => e.preventDefault()}>Inicio</button>
        </nav>
        <div className="search">
          <input
            type="text"
            placeholder="Buscar plantas..."
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Campo de búsqueda"
          />
          <i className="fas fa-search" role="img" aria-label="Buscar"></i>
        </div>
        <div className="icons">
          <button onClick={(e) => e.preventDefault()}>Mi Cuenta</button>
        </div>
      </header>

      <main className="main">
        <Sidebar setCategoriaSeleccionada={setCategoriaSeleccionada} />
        <section className="content">
          <h1>Plantas Medicinales</h1>
          <ListaPlantas plantas={plantasFiltradas} seleccionarPlanta={seleccionarPlanta} />
        </section>
      </main>

      {plantaSeleccionada && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={cerrarModal}>&times;</span>
            <h2>{plantaSeleccionada.nombre}</h2>
            <img
              src={plantaSeleccionada.imagen}
              alt={plantaSeleccionada.nombre}
              className={`modal-image ${imagenAmpliada ? 'ampliada' : ''}`}
              onClick={() => setImagenAmpliada(!imagenAmpliada)}
            />
            <p>
              <strong>Descripción:</strong> {plantaSeleccionada.descripcion}
            </p>
            <h3 className="section-title">Beneficios</h3>
            <p>{plantaSeleccionada.beneficios}</p>
            <h3 className="section-title">Recetario</h3>
            <p>{plantaSeleccionada.recetario}</p>
            <h3 className="section-title">Precauciones</h3>
            <p>{plantaSeleccionada.precauciones}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;