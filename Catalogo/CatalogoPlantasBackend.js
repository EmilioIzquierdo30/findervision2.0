const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

const plantaSchema = new mongoose.Schema({
  nombre: String,
  categoria: String,
  imagen: String,
  descripcion: String,
  beneficios: String,
  recetario: String,
  precauciones: String,
});

const Planta = mongoose.model('Planta', plantaSchema);

// Endpoint para obtener todas las plantas
app.get('/api/plantas', async (req, res) => {
  try {
    const plantas = await Planta.find();
    res.json(plantas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las plantas' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));