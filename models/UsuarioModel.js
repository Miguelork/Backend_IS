const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsusarioSchema = new Schema({
    tipo: {
        type: String
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    user: {
        type: String
    },
    password: {
        type: String
    },
    telefono: {
        type: String
    },
    email: {
        type: String
    },
    direccion: {
        type: String
    },
    especialidades: {
        type: String
    },
    horaIncial: {
        type: String
    },
    horaFinal: {
        type: String
    }
})

module.exports = mongoose.model('Usuarios', UsusarioSchema);