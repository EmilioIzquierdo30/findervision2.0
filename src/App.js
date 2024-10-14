import React from 'react';
import './App.css';
import Navbar from './componentes/navbar.js'; 
import Main from './paginas/Main.js'; 
import Slider from './componentes/slider.js';
import AboutUs from './componentes/aboutus.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login.js'; // Este es el import que enlaza el archivo

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plants" element={<Slider />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
