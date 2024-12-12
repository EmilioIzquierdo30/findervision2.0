import React, { useState } from 'react';

const PlantList = ({ plants, deletePlant, setPlantToEdit }) => {
    const [searchName, setSearchName] = useState('');

    const handleSearch = () => {
        const foundPlant = plants.find((plant) => plant.name === searchName);
        if (foundPlant) {
            setPlantToEdit(foundPlant);
        }
    };

    return (
        <div>
            <h2>Lista de Plantas</h2>
            <input
                type="text"
                placeholder="Buscar por nombre"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
            <ul>
                {plants.map((plant, index) => (
                    <li key={index}>
                        {plant.name} - {plant.type}
                        <button onClick={() => setPlantToEdit(plant)}>Editar</button>
                        <button onClick={() => deletePlant(plant.name)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlantList;
