//Rutas comida
const express = require('express');
const router = express.Router();
const comidaController = require('../controllers/comidaController')


router.get('/', comidaController.getComidas);
router.get('/verificar',comidaController.verificarComidas);   
router.post('/', comidaController.postComidas); 

//usar esta ruta para movil porque no tiene verificacion
router.get('/movil', comidaController.getComidaUsuario);


router.put('/:id', comidaController.actualizarComida);
router.get('/:id', comidaController.verComida);
router.delete('/:id', comidaController.deleteComida);




module.exports = router;