const express = require('express');
const router = express.Router();
const pagoController = require('../controllers/pagoController')

router.get('/', pagoController.getPago);
router.post('/', pagoController.postPago);

module.exports = router; 
