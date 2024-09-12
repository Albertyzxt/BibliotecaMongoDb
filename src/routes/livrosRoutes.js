const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController.js');

router.post('/', livrosController.createLivro);
router.get('/', livrosController.getLivros);
router.get('/:id', livrosController.getLivroById);
router.put('/:id', livrosController.updateLivro);
router.delete('/:id', livrosController.deleteLivro);

module.exports = router;