import React, { useState } from 'react';
import ListaPlantas from './ListaPlantas';
import './App.css'; // Importa los estilos generales de la aplicación

const App = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [plantaSeleccionada, setPlantaSeleccionada] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

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

  // Filtra por categoría y término de búsqueda
  const plantasFiltradas = plantas.filter(planta => 
    (categoriaSeleccionada ? planta.categoria === categoriaSeleccionada : true) &&
    (searchTerm ? planta.nombre.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  const seleccionarPlanta = (planta) => {
    setPlantaSeleccionada(planta);
  };

  const cerrarModal = () => {
    setPlantaSeleccionada(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Actualiza el estado con el valor del input
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
          <input
            placeholder="Buscar plantas..."
            type="text"
            value={searchTerm}
            onChange={handleSearchChange} // Controlador para la búsqueda
          />
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
