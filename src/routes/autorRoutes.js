const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController.js');
const via_cep = require('../middlewares/via_cep.js');

router.post('/', via_cep, autorController.createAutor);
router.get('/', autorController.getAutores);
router.get('/:id', autorController.getAutorById);
router.put('/:id', via_cep, autorController.updateAutor);
router.delete('/:id', autorController.deleteAutor);

module.exports = router;