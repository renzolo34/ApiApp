const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Comida = require("./Comida");

const Pago = sequelize.define(
  "Pago",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    monto: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    fechaCompra: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    nombre_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comida: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Pago;

// const Comida = require('./Comida');
// // Establece la relación muchos a muchos con Comida a través de PagoComida
// Pago.belongsToMany(Comida, { through: 'PagoComida'});
