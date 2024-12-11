import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => <h1>Página de Inicio</h1>;
const About = () => <h1>Sobre Nosotros</h1>;

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
