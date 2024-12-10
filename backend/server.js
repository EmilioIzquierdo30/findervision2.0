const express = require('express'); // Framework para crear el servidor
const mongoose = require('mongoose'); // Biblioteca para conectar a MongoDB
const dotenv = require('dotenv'); // Manejo de variables de entorno
const cors = require('cors'); // Permitir solicitudes desde otros dominios
const plantRoutes = require('./routes/plantRoutes'); // Importar rutas para las plantas

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Crear la aplicación de Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Parsear cuerpos de solicitudes JSON

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch((error) => console.error('Error al conectar a MongoDB:', error));

// Usar las rutas de plantas
app.use('/api/plants', plantRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});