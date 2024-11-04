import React, { useState } from 'react';
import ListaPlantas from './ListaPlantas';
import './App.css';

// Componente principal 'App'
const App = () => {
    // Estados del componente
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [plantaSeleccionada, setPlantaSeleccionada] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [imagenAmpliada, setImagenAmpliada] = useState(false);

    // Datos de ejemplo para las plantas
    const plantas = [
        {
            nombre: 'Manzanilla',
            categoria: 'Sedante O Relajante',
            imagen: 'https://media.admagazine.com/photos/6486ce9afa2d32627ec10acf/master/pass/manzanilla-para-plantas.jpg',
            descripcion: 'La manzanilla es conocida por sus propiedades sedantes...',
            beneficios: 'Calma la ansiedad, alivia trastornos digestivos y mejora el sueño.',
            recetario: 'Infusión: Añadir 1 cucharada de flores secas de manzanilla a una taza de agua hirviendo. Dejar reposar durante 5-10 minutos.',
            precauciones: 'No debe consumirse en exceso durante el embarazo. Puede causar reacciones alérgicas en personas sensibles a las plantas de la familia Asteraceae.'
        },
        {
            nombre: 'Arnica',
            categoria: 'Cicatrizante',
            imagen: 'https://jardin.inecol.mx/images/PLANTA_MES/arnica1.jpg',
            descripcion: 'El árnica es una planta cicatrizante...',
            beneficios: 'Promueve la cicatrización de heridas y reduce la inflamación.',
            recetario: 'Ungüento: Aplicar crema de árnica sobre la zona afectada 2-3 veces al día.',
            precauciones: 'No aplicar sobre heridas abiertas. Puede causar irritación en pieles sensibles.'
        },
        {
          nombre: 'Belladona',
          categoria: 'Altamente Tóxica',
          imagen: 'https://content.cuerpomente.com/medio/2023/12/04/belladona-atropa-belladona_e524fd32_231204222338_1280x720.jpg', // Puedes añadir una URL de imagen aquí si tienes una disponible
          descripcion: 'La belladona es una planta altamente tóxica y peligrosa para los seres humanos. Ha sido utilizada en la medicina tradicional, pero su consumo puede ser letal en dosis elevadas.',
          beneficios: 'En dosis muy controladas y bajo supervisión médica, puede utilizarse como antiespasmódico y analgésico.',
          recetario: 'No se recomienda su uso sin la supervisión de un profesional médico debido a su toxicidad.',
          precauciones: 'Extremadamente venenosa. Su consumo o manipulación sin cuidado puede causar alucinaciones, parálisis, y envenenamiento severo. Mantener fuera del alcance de niños y mascotas.',
          esPeligrosa: true
      }
        // Agrega más plantas según sea necesario
    ];

    // Filtrar plantas por categoría seleccionada y término de búsqueda
    const plantasFiltradas = plantas.filter(planta =>
        (categoriaSeleccionada ? planta.categoria === categoriaSeleccionada : true) &&
        (searchTerm ? planta.nombre.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    );

    // Funciones para manejar el modal y los cambios de estado
    const seleccionarPlanta = (planta) => setPlantaSeleccionada(planta);
    const cerrarModal = () => setPlantaSeleccionada(null);
    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    return (
        <div className="app">
            <header className="header">
                <img alt="Logo de Findervision" src="https://imgur.com/a/nwIWchf" width="80" height="40" />
                <nav className="nav-links">
                    <a href="#">Inicio</a>
                </nav>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Buscar plantas..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <i className="fas fa-search"></i>
                </div>
                <div className="icons">
                    <i className="far fa-heart"></i>
                    <i className="fas fa-shopping-bag"></i>
                    <a href="#">Mi Cuenta</a>
                </div>
            </header>

            <main className="main">{/* Contenido principal */}
              <aside className="sidebar">{/* Barra lateral con filtros de categorías */}
                <a href="#" onClick={() => setCategoriaSeleccionada('')}>Mostrar Todas</a>{/* Resetea la categoría */}
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
                <a href="#" onClick={() => setCategoriaSeleccionada('Abortiva')}>Abortiva</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Altamente Tóxica')}>Altamente Tóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Alucinógena')}>Alucinógena</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Antinutriente')}>Antinutriente</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Cardiotóxica')}>Cardiotóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Carcinogénica')}>Carcinogénica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Citotóxica')}>Citotóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Convulsiva')}>Convulsiva</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Depresora Del Sistema Nervioso')}>Depresora Del Sistema Nervioso</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Diurética Tóxica')}>Diurética Tóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Emética')}>Emética</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Endocrinotóxica')}>Endocrinotóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Fotosensibilizante')}>Fotosensibilizante</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Gastrointestinal')}>Gastrointestinal</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Hemotóxica')}>Hemotóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Hepatotóxica')}>Hepatotóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Inflamatoria')}>Inflamatoria</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Inmunotóxico')}>Inmunotóxico</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Irritante Dermatológo')}>Irritante Dermatológo</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Irritante Respiratoria')}>Irritante Respiratoria</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Laxante')}>Laxante</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Levemente Tóxica')}>Levemente Tóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Miotóxica')}>Miotóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Miorrelajante')}>Miorrelajante</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Moderadamente Tóxica')}>Moderadamente Tóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Mutagénica')}>Mutagénica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Nefrotóxica')}>Nefrotóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Necrótica')}>Necrótica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Neurotóxica')}>Neurotóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Oxalatóxica')}>Oxalatóxica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Peligrosa para Humanos')}>Peligrosa para Humanos</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Peligrosa para Mascotas')}>Peligrosa para Mascotas</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Teratogénica')}>Teratogénica</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Tóxica por Contacto')}>Tóxica por Contacto</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Tóxica por Ingestión')}>Tóxica por Ingestión</a>
                <a href="#" onClick={() => setCategoriaSeleccionada('Tóxica por Inhalación')}>Tóxica por Inhalación</a>
              </aside>

              <section className="content">
                    <h1>Plantas Medicinales y Peligrosas</h1>
                    <ListaPlantas plantas={plantasFiltradas} seleccionarPlanta={seleccionarPlanta} />
                </section>
            </main>

            {plantaSeleccionada && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={cerrarModal}>&times;</span>
                        <h2>{plantaSeleccionada.nombre}</h2>
                        <img
                            src={plantaSeleccionada.imagen}
                            alt={plantaSeleccionada.nombre}
                            className={`modal-image ${imagenAmpliada ? 'ampliada' : ''}`}
                            onClick={() => setImagenAmpliada(!imagenAmpliada)}
                        />
                        <p><strong>Descripción: </strong>{plantaSeleccionada.descripcion}</p>
                        <h3 className="section-title">Beneficios</h3>
                        <p>{plantaSeleccionada.beneficios}</p>
                        <h3 className="section-title">Recetario</h3>
                        <p>{plantaSeleccionada.recetario}</p>
                        <h3 className="section-title">Precauciones</h3>
                        <p>{plantaSeleccionada.precauciones}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;