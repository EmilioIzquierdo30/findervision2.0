import React from 'react';
import './App.css';
import Navbar from './componentes/navbar.js'; 
import Main from './Main'; 
import Slider from './componentes/slider.js';

function App() {
  
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
  ]
  
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Slider imagenes={mockImagenes}/>
    </div>
  );
}



export default App;
