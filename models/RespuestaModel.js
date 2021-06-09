const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RespuestaSchema = new Schema({
    idPregunta: {
        type: String
    },
    respuesta: {
        type: String
    },
    user: {
        type: String
    },
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
})

module.exports = mongoose.model('Respuestas', RespuestaSchema);