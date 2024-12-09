const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // Habilita CORS para permitir peticiones desde tu frontend
app.use(express.json());

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Definir un esquema para las plantas
const plantaSchema = new mongoose.Schema({
  nombre: String,
  categoria: String,
  imagen: String,
  descripcion: String,
  beneficios: String,
  recetario: String,
  precauciones: String,
});

// Modelo de la planta
const Planta = mongoose.model('Planta', plantaSchema);

// Ruta para obtener todas las plantas
app.get('/api/plantas', async (req, res) => {
  try {
    const plantas = await Planta.find();
    res.json(plantas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las plantas', error });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));