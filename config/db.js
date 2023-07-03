const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('proyecto', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Verificar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos: ', error);
  });


  
  // Sincronizar los cambios
sequelize.sync({ force: false }) // Utiliza { force: true } si quieres eliminar y recrear todas las tablas en cada sincronización
    .then(() => {
      console.log('Base de datos sincronizada');
    })
    .catch((error) => {
      console.error('Error al sincronizar la base de datos:', error);
    });



module.exports = {
   sequelize
};