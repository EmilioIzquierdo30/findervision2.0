import React, { useState } from 'react';
// Importa React y el hook useState para manejar estados en el componente.

const Reconocimiento = () => {
    // Define el componente principal `Reconocimiento`.

    const [file, setFile] = useState(null);
    // Estado para almacenar el archivo seleccionado por el usuario.

    const [result, setResult] = useState(null);
    // Estado para almacenar el resultado del reconocimiento de la planta.

    const handleFileChange = (e) => setFile(e.target.files[0]);
    // Función que actualiza el estado `file` con el archivo seleccionado por el usuario.

    const recognizePlant = async () => {
        // Función asíncrona para enviar la imagen a un servicio de reconocimiento de plantas.

        const formData = new FormData();
        // Crea un objeto FormData para manejar el archivo de imagen.

        formData.append('image', file);
        // Agrega el archivo seleccionado al FormData con la clave 'image'.

        const response = await fetch('https://api-reconocimiento.com/recognize', {
            // Realiza una solicitud HTTP POST al endpoint de la API de reconocimiento de plantas.
            method: 'POST',
            // Define el método HTTP como POST.
            body: formData
            // Incluye el FormData con el archivo de imagen en el cuerpo de la solicitud.
        });

        const data = await response.json();
        // Convierte la respuesta de la API en formato JSON.

        setResult(data);
        // Actualiza el estado `result` con los datos devueltos por la API.
    };

    return (
        // Renderiza la interfaz del usuario.
        <div>
            {/* Contenedor principal del componente. */}

            <input type="file" onChange={handleFileChange} />
            {/* Campo de entrada para subir un archivo. Llama a `handleFileChange` al seleccionar un archivo. */}

            <button onClick={recognizePlant}>Reconocer Planta</button>
            {/* Botón que llama a la función `recognizePlant` para procesar el archivo seleccionado. */}

            {result && <div>{result.name}</div>}
            {/* Muestra el nombre de la planta reconocida si hay un resultado disponible. */}
        </div>
    );
};

export default Reconocimiento;
// Exporta el componente para ser utilizado en otros archivos.