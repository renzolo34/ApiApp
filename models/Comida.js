const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Comida = sequelize.define('Comida', {
  id:{
    type : DataTypes.INTEGER.UNSIGNED,
    primaryKey : true,
    autoIncrement : true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio:{
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  id_categoria:{
    type : DataTypes.INTEGER.UNSIGNED
  },
  fileName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false // Deshabilitar las columnas 'createdAt' y 'updatedAt'
});
 
module.exports = Comida;

// Importar y configurar las asociaciones después de la definición del modelo
const Categoria  = require('./Categoria');
//const Pago = require('./Pagos');

Comida.belongsTo(Categoria, { foreignKey: 'id_categoria' });

//Comida.hasMany(Pago, { foreignKey: 'id' });

