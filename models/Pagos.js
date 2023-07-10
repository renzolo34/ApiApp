const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Comida = require("./Comida");

const Compra = sequelize.define('Compra', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  fechaCompra: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  nombreUsuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correoUsuario: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  comidaArray: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: false
  },
  total: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
}, {
  timestamps: false
});

Compra.belongsTo(Comida);

module.exports = Compra;

// const Comida = require('./Comida');
// // Establece la relación muchos a muchos con Comida a través de PagoComida
// Pago.belongsToMany(Comida, { through: 'PagoComida'});
