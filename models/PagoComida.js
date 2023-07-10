// const { DataTypes } = require('sequelize');
// const { sequelize } = require('../config/db');
// const Comida = require('./Comida');
// const Pago = require('./Pagos');

// const PagoComidas = sequelize.define('PagoComidas', {
//   PagoId: {  // Corregido: Cambiado de PagoaId a PagoId
//     type: DataTypes.INTEGER.UNSIGNED,
//     references: {
//       model: Pago,
//       key: 'id'
//     }
//   },
//   ComidaId: {  // Corregido: Cambiado de ComidaId a ComidaId
//     type: DataTypes.INTEGER.UNSIGNED,
//     references: {
//       model: Comida,
//       key: 'id'
//     }
//   }
// });

// // Define las relaciones después de la definición del modelo PagoComidas
// Pago.belongsToMany(Comida, { through: PagoComidas });
// Comida.belongsToMany(Pago, { through: PagoComidas });

// module.exports = PagoComidas;
