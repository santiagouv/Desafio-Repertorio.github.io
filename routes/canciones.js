const express = require('express');
const router = express.Router();
const cancionesController = require('../controllers/cancionesController');

// Rutas CRUD para las canciones
router.get('/', cancionesController.getAllCanciones);
router.post('/', cancionesController.createCancion);
router.put('/:id', cancionesController.updateCancion);
router.delete('/:id', cancionesController.deleteCancion);

module.exports = router;
