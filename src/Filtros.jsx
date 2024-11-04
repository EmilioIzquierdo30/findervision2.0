// Filtros.jsx
import React, { useState } from 'react';

const Filtros = ({ onFilterChange }) => {
    const [categoria, setCategoria] = useState('');
    const [propiedad, setPropiedad] = useState('');

    const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
        onFilterChange({ categoria: e.target.value, propiedad });
    };

    const handlePropiedadChange = (e) => {
        setPropiedad(e.target.value);
        onFilterChange({ categoria, propiedad: e.target.value });
    };

    return (
        <div className="filtros">
            <select onChange={handleCategoriaChange} value={categoria}>
                <option value="">Categoría</option>
                <option value="medicinal">Medicinal</option>
                <option value="peligrosa">Peligrosa</option>
            </select>
            <select onChange={handlePropiedadChange} value={propiedad}>
                <option value="">Propiedad</option>
                <option value="antiinflamatoria">Antiinflamatoria</option>
                <option value="toxicidad">Tóxica</option>
            </select>
        </div>
    );
};

export default Filtros;
