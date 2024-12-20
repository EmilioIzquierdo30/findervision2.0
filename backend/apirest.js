require("dotenv").config(); // Cargar variables de entorno desde el archivo .env en la raíz
const Planta = require("./planta");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Importar el paquete cors

const app = express();

mongoose.set("strictQuery", true);

// Usar el puerto configurado en las variables de entorno o el predeterminado
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware CORS para permitir solicitudes desde cualquier origen


// Configuración para permitir acceso desde cualquier lugar
app.use(cors({
  origin: "*", // Permitir cualquier origen
}));


// Conexión a MongoDB utilizando la variable de entorno proporcionada por Vercel
const MONGO_URI = process.env.MONGO_URI; // Obtiene la URL desde las variables de entorno en Vercel
if (!MONGO_URI) {
  console.error("MONGO_URI no está definido en las variables de entorno");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Rutas
app.get("/", (req, res) => {
  res.send("¡Servidor backend funcionando correctamente!");
});

app.get("/api/plantasagregar", async (req, res) => {
  try {
    const plantas = await Planta.find({}, { nombre_cientifico: 1, imagen: 1, descripcion: 1 }).limit(10);
    res.status(200).json(plantas);
  } catch (err) {
    console.error("Error al obtener las plantas:", err);
    res.status(500).json({ error: "Error al obtener las plantas" });
  }
});

app.get("/api/plantashome", async (req, res) => {
  try {
    const plantasHome = await Planta.find({}, { nombre_cientifico: 1, imagen: 1 });
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

module.exports = app;
