import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, userToEdit, setUserToEdit }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if (userToEdit) {
            setEmail(userToEdit.email);
            setName(userToEdit.name);
        } else {
            setEmail('');
            setName('');
        }
    }, [userToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, name };
        if (userToEdit) {
            updateUser(user); // Actualiza el usuario
        } else {
            addUser(user); // Agrega un nuevo usuario
        }
        setEmail('');
        setName('');
        setUserToEdit(null); // Limpiar el formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{userToEdit ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
};

export default UserForm;
