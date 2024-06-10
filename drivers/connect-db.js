const mongoose = require('mongoose')
require('dotenv').config();

const URI = process.env.MONGO_URL
mongoose.set('strictQuery')

mongoose.connect(URI)
    .then(() => console.log('conexion exitosa a base de datos'))
    .catch(err => console.log(err))

module.exports = mongoose