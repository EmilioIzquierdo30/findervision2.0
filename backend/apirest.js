require("dotenv").config(); // Cargar las variables de entorno desde el archivo .env
const express = require("express");
const mongoose = require("mongoose");

const app = express();


mongoose.set("strictQuery", true); // Elimina el warning
// Usar el puerto configurado en las variables de entorno o el predeterminado
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB utilizando la variable de entorno
const MONGO_URI = process.env.MONGO_URl; // Obtiene la URL desde .env
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Ruta principal para probar el backend
app.get("/", (req, res) => {
  res.send("¡Servidor backend funcionando correctamente!");
});

// Ruta para /plantasagregar
app.get("/plantasagregar", async (req, res) => {
  try {
    const plantas = await Planta.find({}, { nombre_cientifico: 1, imagen: 1, descripcion: 1 }).limit(10);
    res.status(200).json(plantas);
  } catch (err) {
    console.error("Error al obtener las plantas:", err);
    res.status(500).json({ error: "Error al obtener las plantas" });
  }
});

// Ruta para /plantashome
app.get("/plantashome", async (req, res) => {
  try {
    const plantasHome = await Planta.find({}, { nombre_cientifico: 1, imagen: 1 }).limit(5);
    res.status(200).json(plantasHome);
  } catch (err) {
    console.error("Error al obtener las plantas para el home:", err);
    res.status(500).json({ error: "Error al obtener las plantas para el home" });
  }
});

// Escuchar en el puerto configurado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

console.log("MONGO_URI:", process.env.MONGO_URI);
