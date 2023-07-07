// const { DataTypes } = require('sequelize');
// const { sequelize } = require('../config/db');

// const Pago = sequelize.define('Pago',{
//     monto:{
//         type: DataTypes.DOUBLE,
//         allowNull: false
//     },
//     descripcion:{
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     fechaCompra:{
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     id_comida:{
//         type: DataTypes.ARRAY(DataTypes.INTEGER.UNSIGNED),
//         defaultValue: [],
//         allowNull: false
//     },
//     id_usuario:{
//         type: DataTypes.INTEGER.UNSIGNED,
//         allowNull: false
//     }
// }, {
//     timestamps: false // Deshabilitar las columnas 'createdAt' y 'updatedAt'
//   });


// module.exports = Pago;

// const Comida = require('./Comida');

// Pago.belongsTo(Comida, {foreignKey:'id_comida'});