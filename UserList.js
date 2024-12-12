import React, { useState } from 'react';

const UserList = ({ users, deleteUser, setUserToEdit }) => {
    const [searchEmail, setSearchEmail] = useState('');

    const handleSearch = () => {
        const foundUser = users.find((user) => user.email === searchEmail);
        if (foundUser) {
            setUserToEdit(foundUser);
        }
    };

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <input
                type="text"
                placeholder="Buscar por correo"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.email}
                        <button onClick={() => setUserToEdit(user)}>Editar</button>
                        <button onClick={() => deleteUser(user.email)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
