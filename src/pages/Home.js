import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/plants')
            .then(response => setPlants(response.data))
            .catch(error => console.error('Error al obtener plantas:', error));
    }, []);

    return (
        <div>
            <h1>Lista de Plantas</h1>
            <ul>
                {plants.map(plant => (
                    <li key={plant._id}>
                        <h3>{plant.nombre_comun}</h3>
                        <p>{plant.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
