const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const jwt = require('jsonwebtoken');
const config = require('../config/global')
const Usuario = sequelize.sequelize.define('Usuario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    contraseña:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, {
    timestamps: false // Deshabilitar las columnas 'createdAt' y 'updatedAt'
  });



module.exports = {
    Usuario
}