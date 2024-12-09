import React from 'react';
// Importa React para definir el componente.

const Sidebar = ({ setCategoriaSeleccionada }) => {
    // Define el componente Sidebar que recibe una función `setCategoriaSeleccionada`
    // como prop para actualizar la categoría seleccionada.

    const categorias = [
        'Adaptogénicas', 'Analgésicas', 'Anticancerígenas', 'Antidiabéticas',
        'Antiespasmódicas', 'Antiinflamatorias', 'Antimicrobianas', 'Antioxidantes',
        'Cardiotónicas', 'Cicatrizante', 'Diuréticas', 'Digestivas', 'Expectorantes',
        'Hepatoprotectoras', 'Inmunoestimulantes', 'Neuroprotectoras', 'Sedante O Relajante',
        'Tónicas', 'Abortiva', 'Altamente Tóxica', 'Alucinógena', 'Antinutriente',
        'Cardiotóxica', 'Carcinogénica', 'Citotóxica', 'Convulsiva', 'Depresora Del Sistema Nervioso'
    ];
    // Define una lista de categorías disponibles para filtrar plantas.

    return (
        // Devuelve el contenido del componente Sidebar.
        <aside className="sidebar">
            {/* Contenedor del Sidebar con una clase CSS para estilos. */}

            <button onClick={() => setCategoriaSeleccionada('')}>
                Mostrar Todas
            </button>
            {/* Botón que limpia la categoría seleccionada y muestra todas las plantas. */}

            {categorias.map((categoria) => (
                // Itera sobre la lista de categorías para generar un botón por cada una.
                <button
                    key={categoria}
                    // Usa el nombre de la categoría como clave única.
                    onClick={() => setCategoriaSeleccionada(categoria)}
                    // Llama a `setCategoriaSeleccionada` con la categoría actual al hacer clic.
                >
                    {categoria}
                    {/* Muestra el nombre de la categoría en el botón. */}
                </button>
            ))}
        </aside>
    );
};

export default Sidebar;
// Exporta el componente Sidebar para ser utilizado en otros archivos.