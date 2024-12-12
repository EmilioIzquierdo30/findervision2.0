import React, { useState, useEffect } from 'react';

const PlantForm = ({ addPlant, updatePlant, plantToEdit, setPlantToEdit }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        if (plantToEdit) {
            setName(plantToEdit.name);
            setType(plantToEdit.type);
        } else {
            setName('');
            setType('');
        }
    }, [plantToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const plant = { name, type };
        if (plantToEdit) {
            updatePlant(plant); // Actualiza la planta
        } else {
            addPlant(plant); // Agrega una nueva planta
        }
        setName('');
        setType('');
        setPlantToEdit(null); // Limpiar el formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Nombre de la planta"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Tipo de planta"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{plantToEdit ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
};

export default PlantForm;
