const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MensajeSchema = new Schema({
    idChat: {
        type: String
    },
    texto: {
        type: String
    },
    fecha: {
        type: String
    },
    user: {
        type: String
    },
    nombre: {
        type: String
    },

})

module.exports = mongoose.model('Mensaje', MensajeSchema);