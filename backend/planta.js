const mongoose = require("mongoose");

// Definición del esquema para la colección de plantas
const plantaSchema = new mongoose.Schema({
  nombre_cientifico: { type: String, required: true }, // Nombre científico de la planta
  imagen: { type: String, required: true }, // URL de la imagen de la planta
  descripcion: { type: String, required: true }, // Descripción de la planta
  categoria: { type: String, required: false }, // Categoría opcional, ejemplo: "medicinal"
  propiedades: { type: [String], required: false }, // Propiedades opcionales, ejemplo: ["antiinflamatoria", "antiséptica"]
});

// Crear el modelo a partir del esquema
const Planta = mongoose.model("Planta", plantaSchema);

module.exports = Planta;
