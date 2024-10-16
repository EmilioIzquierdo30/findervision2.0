// App.jsx
import React from 'react';
import ListaPlantas from './ListaPlantas';
import './App.css'; // Importa los estilos generales de la aplicación

const App = () => {
  const plantas = [
    {
      nombre: 'Monstera Deliciosa',
      categoria: 'Planta de Interior',
      color: 'Verde',
      imagen: 'https://via.placeholder.com/200x200', // Reemplaza con la URL de la imagen real
    },
    {
      nombre: 'Ficus Lyrata',
      categoria: 'Planta de Interior',
      color: 'Verde Oscuro',
      imagen: 'https://via.placeholder.com/200x200',
    },
    {
      nombre: 'Sansevieria Trifasciata',
      categoria: 'Planta de Interior',
      color: 'Verde y Amarillo',
      imagen: 'https://via.placeholder.com/200x200',
    },
    // Agrega más plantas según sea necesario
  ];

  return (
    <div className="app">
      <header className="header">
        {/* Repite el contenido del encabezado adaptado al HTML proporcionado */}
        <img alt="Logo de Plantas" src="https://via.placeholder.com/40" width="40" height="40" />
        <img alt="Catálogo de Plantas" src="https://via.placeholder.com/160x40" width="160" height="40" />
        <nav className="nav-links">
          <a href="#">Inicio</a>
          <a href="#">Suculentas</a>
          <a href="#">Plantas de Interior</a>
          <a href="#">Plantas de Exterior</a>
          <a href="#">Ofertas</a>
          <a href="#">Contacto</a>
        </nav>
        <div className="search">
          <input placeholder="Buscar plantas..." type="text" />
          <i className="fas fa-search"></i>
        </div>
        <div className="icons">
          <i className="far fa-heart"></i>
          <i className="fas fa-shopping-bag"></i>
          <a href="#">Mi Cuenta</a>
          <a href="#">Carrito</a>
        </div>
      </header>
      <main className="main">
        <aside className="sidebar">
          <a href="#">Todas las Plantas</a>
          <a href="#">Suculentas</a>
          <a href="#">Plantas de Interior</a>
          <a href="#">Plantas de Exterior</a>
          <a href="#">Herramientas</a>
          <a href="#">Macetas</a>
          <a href="#">Fertilizantes</a>
          <a href="#">Iluminación</a>
          <a href="#">Decoración</a>
          <a href="#">Accesorios</a>
        </aside>
        <section className="content">
          <h1>Plantas de Interior (150)</h1>
          <ListaPlantas plantas={plantas} />
        </section>
      </main>
    </div>
  );
};

export default App;
