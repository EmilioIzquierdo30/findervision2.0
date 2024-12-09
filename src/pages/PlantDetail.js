import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

const PlantDetail = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        axios.get(`/plants/${id}`)
            .then((response) => setPlant(response.data))
            .catch((error) => console.error(error));
    }, [id]);

    if (!plant) {
        return <p>Cargando información de la planta...</p>;
    }

    return (
        <div>
            <h1>{plant.nombre_comun}</h1>
            <img src={plant.imagen} alt={plant.nombre_comun} />
            <p><i>Nombre científico: {plant.nombre_cientifico}</i></p>
            <p>{plant.descripcion}</p>
            <p>Usos medicinales: {plant.usos_medicinales}</p>
            <p>Partes utilizadas: {plant.partes_utilizadas}</p>
        </div>
    );
};

export default PlantDetail;
