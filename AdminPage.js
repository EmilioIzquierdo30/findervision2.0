import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import PlantForm from './PlantForm';
import PlantList from './PlantList';

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [plants, setPlants] = useState([]);
    const [userToEdit, setUserToEdit] = useState(null);
    const [plantToEdit, setPlantToEdit] = useState(null);

    // Función para agregar un nuevo usuario
    const addUser = (user) => {
        setUsers([...users, user]);
    };

    // Función para actualizar un usuario
    const updateUser = (updatedUser) => {
        setUsers(
            users.map((user) => (user.email === updatedUser.email ? updatedUser : user))
        );
    };

    // Función para eliminar un usuario
    const deleteUser = (email) => {
        setUsers(users.filter((user) => user.email !== email));
    };

    // Función para agregar una nueva planta
    const addPlant = (plant) => {
        setPlants([...plants, plant]);
    };

    // Función para actualizar una planta
    const updatePlant = (updatedPlant) => {
        setPlants(
            plants.map((plant) => (plant.name === updatedPlant.name ? updatedPlant : plant))
        );
    };

    // Función para eliminar una planta
    const deletePlant = (plantName) => {
        setPlants(plants.filter((plant) => plant.name !== plantName));
    };

    return (
        <div>
            <h1>Gestión de Usuarios</h1>
            <UserForm
                addUser={addUser}
                updateUser={updateUser}
                userToEdit={userToEdit}
                setUserToEdit={setUserToEdit}
            />
            <UserList
                users={users}
                deleteUser={deleteUser}
                setUserToEdit={setUserToEdit}
            />

            <h1>Gestión de Plantas</h1>
            <PlantForm
                addPlant={addPlant}
                updatePlant={updatePlant}
                plantToEdit={plantToEdit}
                setPlantToEdit={setPlantToEdit}
            />
            <PlantList
                plants={plants}
                deletePlant={deletePlant}
                setPlantToEdit={setPlantToEdit}
            />
        </div>
    );
};

export default AdminPage;
