const mongoose = require('mongoose');

// Definir el esquema de la planta
const plantSchema = new mongoose.Schema({
    nombre_comun: { type: String, required: true },
    nombre_cientifico: { type: String, required: true },
    descripcion: { type: String },
    imagen: { type: String },
    usos_medicinales: { type: String },
    partes_utilizadas: { type: String },
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

// Evitar el error "OverwriteModelError"
module.exports = mongoose.models.Plant || mongoose.model('Plant', plantSchema);