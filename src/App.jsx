import React, { useState } from 'react';
import ListaPlantas from './ListaPlantas';
import './App.css'; // Importa los estilos generales de la aplicación

const App = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [plantaSeleccionada, setPlantaSeleccionada] = useState(null);

  const plantas = [
    {
      nombre: 'Manzanilla',
      categoria: 'Sedante O Relajante',
      imagen: 'URL_de_la_imagen_1',
      descripcion: 'La manzanilla es conocida por sus propiedades sedantes...',
    },
    {
      nombre: 'Arnica',
      categoria: 'Cicatrizante',
      imagen: 'URL_de_la_imagen_2',
      descripcion: 'El árnica es una planta cicatrizante...',
    },
    {
      nombre: 'Sabila',
      categoria: 'Planta de Interior',
      imagen: 'URL_de_la_imagen_3',
      descripcion: 'La sábila se utiliza como planta de interior...',
    },
    {
      nombre: 'Jengibre',
      categoria: 'Planta de Interior',
      imagen: 'URL_de_la_imagen_4',
      descripcion: 'El jengibre tiene propiedades medicinales...',
    },
    // Agrega más plantas según sea necesario
  ];

  const plantasFiltradas = plantas.filter(planta => 
    categoriaSeleccionada ? planta.categoria === categoriaSeleccionada : true
  );

  const seleccionarPlanta = (planta) => {
    setPlantaSeleccionada(planta);
  };

  const cerrarModal = () => {
    setPlantaSeleccionada(null);
  };

  return (
    <div className="app">
      <header className="header">
        <img alt="Logo de Plantas" src="URL_de_la_imagen_del_logo" width="10" height="10" />
        <img alt="Catálogo de Plantas" src="URL_de_la_imagen_del_catalogo" width="40" height="40" />
        <nav className="nav-links">
          <a href="#">Inicio</a>
        </nav>
        <div className="search">
          <input placeholder="Buscar plantas..." type="text" />
          <i className="fas fa-search"></i>
        </div>
        <div className="icons">
          <i className="far fa-heart"></i>
          <i className="fas fa-shopping-bag"></i>
          <a href="#">Mi Cuenta</a>
        </div>
      </header>

      <main className="main">
        <aside className="sidebar">
          <a href="#" onClick={() => setCategoriaSeleccionada('Sedante O Relajante')}>Sedantes O Relajantes</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Cicatrizante')}>Cicatrizantes</a>
          <a href="#" onClick={() => setCategoriaSeleccionada('Planta de Interior')}>Plantas de Interior</a>
          {/* Agrega más categorías según sea necesario */}
        </aside>

        <section className="content">
          <h1>Catálogo De Plantas Medicinales</h1>
          <ListaPlantas plantas={plantasFiltradas} seleccionarPlanta={seleccionarPlanta} />
        </section>

        {plantaSeleccionada && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={cerrarModal}>&times;</span>
              <h2>{plantaSeleccionada.nombre}</h2>
              <img src={plantaSeleccionada.imagen} alt={plantaSeleccionada.nombre} />
              <p>{plantaSeleccionada.descripcion}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
