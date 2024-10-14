import React from 'react';
import './app.css';
import Navbar from './componentes/navbar.js'; 
import Main from './paginas/Main.js'; 
import AboutUs from './componentes/aboutus.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login.js'; // Este es el import que enlaza el archivo
import Catalogo from './paginas/catalogo.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plants" element={<Catalogo />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
