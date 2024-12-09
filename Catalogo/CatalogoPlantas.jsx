import React, { useState, useEffect } from 'react';
import './App.css';

const CatalogoPlantas = () => {
  const [plantas, setPlantas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlantas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/plantas'); // URL del backend
        if (!response.ok) throw new Error('Error al obtener las plantas');
        const data = await response.json();
        setPlantas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlantas();
  }, []);

  if (loading) return <p>Cargando plantas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="app">
      <h1>Catálogo de Plantas</h1>
      <div className="lista-plantas">
        {plantas.map((planta) => (
          <div key={planta._id} className="planta">
            <img src={planta.imagen} alt={planta.nombre} />
            <h2>{planta.nombre}</h2>
            <p>{planta.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogoPlantas;
