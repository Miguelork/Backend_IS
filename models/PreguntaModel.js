const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PreguntaSchema = new Schema({
    titulo: {
        type: String
    },
    descripcion: {
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

module.exports = mongoose.model('Preguntas', PreguntaSchema);