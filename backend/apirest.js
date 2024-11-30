require("dotenv").config({ path: "./node_modules/.env" }); // Ruta personalizada al archivo .env
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.set("strictQuery", true); // Elimina el warning
// Usar el puerto configurado en las variables de entorno o el predeterminado
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB utilizando la variable de entorno
const MONGO_URI = process.env.MONGO_URI; // Obtiene la URL desde .env
if (!MONGO_URI) {
  console.error("MONGO_URI no está definido en el archivo .env");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Ruta principal para probar el backend
app.get("/", (req, res) => {
  res.send("¡Servidor backend funcionando correctamente!");
});

// Escuchar en el puerto configurado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

console.log("MONGO_URI:", process.env.MONGO_URI); // Depuración
