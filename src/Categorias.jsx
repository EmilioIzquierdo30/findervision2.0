// Categorias.jsx
import React, { useState } from 'react';
import Catalogo from './Catalogo';
import Modal from 'react-modal';

// Configurar el elemento raíz para el modal
Modal.setAppElement('#root');

const Categorias = ({ plantas }) => {
  // Obtener categorías únicas
  const categorias = [...new Set(plantas.map(planta => planta.categoria))];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setCategoriaSeleccionada(null);
    setModalAbierto(false);
  };

  // Filtrar plantas por categoría seleccionada
  const plantasFiltradas = categoriaSeleccionada
    ? plantas.filter(planta => planta.categoria === categoriaSeleccionada)
    : [];

  return (
    <div>
      <h1>Catálogo de Plantas</h1>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {categorias.map((categoria, index) => (
          <button key={index} onClick={() => abrirModal(categoria)}>
            {categoria}
          </button>
        ))}
      </div>

      <Modal
        isOpen={modalAbierto}
        onRequestClose={cerrarModal}
        contentLabel="Catálogo de Plantas"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: '80vh',
            overflowY: 'auto'
          }
        }}
      >
        <h2>{categoriaSeleccionada}</h2>
        <button onClick={cerrarModal} style={{ float: 'right' }}>Cerrar</button>
        <Catalogo plantas={plantasFiltradas} />
      </Modal>
    </div>
  );
};

export default Categorias;
