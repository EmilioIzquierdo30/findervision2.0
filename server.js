const express = require('express');
const axios = require('axios');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configura tu clave de API de Plant.id
const apiKey = '';  //aun con la api esta chingadera sigue sin funcionar, es decir no devuelve un JSON de donde obtiene la planta
const apiUrl = '';  // URL de la API de Plant.id

// Middleware para parsear JSON y formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta GET para la raíz
app.get('/', (req, res) => {    
  res.send('Bienvenido a la API de Plantas!');
});

// Ruta POST para identificar plantas
app.post('/identificarplanta', async (req, res) => {            //probablemente el error este en esta solicitud post
  const { imageUri } = req.body; // Asumimos que la imagen viene como un base64 en el cuerpo

  if (!imageUri) {
    return res.status(400).json({ message: 'Se necesita una imagen para identificar la planta.' });
  }

  try {
    // Lógica para convertir la imagen a base64 si no está ya en base64
    const requestData = {
      images: [imageUri],
      latitude: req.body.latitude || 19.432608,  // Latitud opcional
      longitude: req.body.longitude || -99.133209,  // Longitud opcional
      similar_images: false,  // No incluir imágenes similares
    };

    // Realizar la solicitud POST a la API de Plant.id
    const response = await axios.post(apiUrl, requestData, {
      headers: {
        'Api-Key': apiKey,  // Tu clave de API de Plant.id
        'Content-Type': 'application/json',
      },
    });

    // Procesa la respuesta de la API
    const plantInfo = response.data;

    // Enviar la respuesta de la API al cliente
    res.json(plantInfo);
  } catch (error) {
    // Manejo de errores
    console.error('Error al hacer la solicitud a la API:', error);
    res.status(500).json({ message: 'Hubo un error al procesar la solicitud.' });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
