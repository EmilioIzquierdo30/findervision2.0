// routes/plantRoutes.js
const express = require('express');
const Plant = require('../models/Plant');
const router = express.Router();

// Obtener todas las plantas
router.get('/', async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las plantas', error });
    }
});

// Crear una nueva planta
router.post('/', async (req, res) => {
    try {
        const newPlant = new Plant(req.body);
        const savedPlant = await newPlant.save();
        res.status(201).json(savedPlant);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la planta', error });
    }
});

// Obtener una planta por ID
router.get('/:id', async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            return res.status(404).json({ message: 'Planta no encontrada' });
        }
        res.json(plant);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la planta', error });
    }
});

// Actualizar una planta por ID
router.put('/:id', async (req, res) => {
    try {
        const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPlant) {
            return res.status(404).json({ message: 'Planta no encontrada' });
        }
        res.json(updatedPlant);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar la planta', error });
    }
});

// Eliminar una planta por ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
        if (!deletedPlant) {
            return res.status(404).json({ message: 'Planta no encontrada' });
        }
        res.json({ message: 'Planta eliminada' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la planta', error });
    }
});

module.exports = router;