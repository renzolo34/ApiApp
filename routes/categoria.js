const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.get('/',categoriaController.getCategoria);
router.post('/',categoriaController.postCategoria);
router.delete('/:id',categoriaController.deleteCategoria);
router.put('/:id', categoriaController.deleteCategoria);

module.exports = router;
