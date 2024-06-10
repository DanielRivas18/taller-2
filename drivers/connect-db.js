const mongoose = require('mongoose')
require('dotenv').config();

const URI = "mongodb+srv://root:root@electiva.4plmob7.mongodb.net/?retryWrites=true&w=majority&appName=electiva"
mongoose.set('strictQuery')

mongoose.connect(URI)
    .then(() => console.log('conexion exitosa a base de datos'))
    .catch(err => console.log(err))

module.exports = mongoose