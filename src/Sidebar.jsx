import React from 'react';

const Sidebar = ({ setCategoriaSeleccionada }) => {
    const categorias = [
        'Adaptogénicas', 'Analgésicas', 'Anticancerígenas', 'Antidiabéticas',
        'Antiespasmódicas', 'Antiinflamatorias', 'Antimicrobianas', 'Antioxidantes',
        'Cardiotónicas', 'Cicatrizante', 'Diuréticas', 'Digestivas', 'Expectorantes',
        'Hepatoprotectoras', 'Inmunoestimulantes', 'Neuroprotectoras', 'Sedante O Relajante',
        'Tónicas', 'Abortiva', 'Altamente Tóxica', 'Alucinógena', 'Antinutriente',
        'Cardiotóxica', 'Carcinogénica', 'Citotóxica', 'Convulsiva', 'Depresora Del Sistema Nervioso'
    ];

    return (
            <aside className="sidebar">
        <button onClick={() => setCategoriaSeleccionada('')}>Mostrar Todas</button>
        {categorias.map((categoria) => (
            <button key={categoria} onClick={() => setCategoriaSeleccionada(categoria)}>
                {categoria}
            </button>
        ))}
    </aside>
    );
};

export default Sidebar;
