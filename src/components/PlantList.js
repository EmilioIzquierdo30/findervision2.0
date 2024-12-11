import React, { useEffect, useState } from 'react';
import axios from '../services/api';
import PlantCard from './PlantCard';

const PlantList = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        axios.get('/plants')
            .then((response) => setPlants(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="plant-list">
            {plants.map(plant => (
                <PlantCard
                    key={plant._id}
                    name={plant.nombre_comun}
                    scientificName={plant.nombre_cientifico}
                    description={plant.descripcion}
                    image={plant.imagen}
                />
            ))}
        </div>
    );
};

export default PlantList;
