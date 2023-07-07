//require('dotenv').config();
const express = require('express');
const config = require('./config/global');
const db = require('./config/db');
const cors = require('cors');
const path = require('path');
const firebase = require('firebase/app');
const firebaseConfig = require('./config/firebase')

firebase.initializeApp(firebaseConfig);
const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/comidas', require('./routes/comida'));
app.use('/api/photos', require('./routes/photo'));
app.use('/api/categoria',require('./routes/categoria'));
app.use('/login', require('./routes/login'));

app.use('/uploads', express.static(path.resolve('uploads')));

app.listen(config.port, ()=>{
    console.log('La API esta corriendo en el puerto 4000')
})
