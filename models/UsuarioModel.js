const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsusarioSchema = new Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    email: {
        type: String
    },
    telefono: {
        type: String
    },
    direccion: {
        type: String
    }
})

module.exports = mongoose.model('Usuarios', UsusarioSchema);