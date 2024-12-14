import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Íconos de hamburguesa y cierre

const Sidebar = ({ setCategoriaSeleccionada }) => {
    const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar el menú

    const categorias = [
        'Adaptogénicas', 'Analgésicas', 'Anticancerígenas', 'Antidiabéticas',
        'Antiespasmódicas', 'Antiinflamatorias', 'Antimicrobianas', 'Antioxidantes',
        'Cardiotónicas', 'Cicatrizante', 'Diuréticas', 'Digestivas', 'Expectorantes',
        'Hepatoprotectoras', 'Inmunoestimulantes', 'Neuroprotectoras', 'Sedante O Relajante',
        'Tónicas', 'Abortiva', 'Altamente Tóxica', 'Alucinógena', 'Antinutriente',
        'Cardiotóxica', 'Carcinogénica', 'Citotóxica', 'Convulsiva', 'Depresora Del Sistema Nervioso'
    ];

    const toggleMenu = () => setIsOpen(!isOpen); // Alterna el estado del menú

    const seleccionarCategoria = (categoria) => {
        setCategoriaSeleccionada(categoria === 'Mostrar Todas' ? '' : categoria);
        setIsOpen(false); // Cierra el menú después de seleccionar una categoría
    };

    return (
        <div className="sidebar-container">
            {/* Botón de hamburguesa */}
            <button className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Menú lateral */}
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button onClick={() => seleccionarCategoria('')}>
                    Mostrar Todas
                </button>
                {categorias.map((categoria) => (
                    <button
                        key={categoria}
                        onClick={() => seleccionarCategoria(categoria)}
                    >
                        {categoria}
                    </button>
                ))}
            </aside>
        </div>
    );
};

export default Sidebar;