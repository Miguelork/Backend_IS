const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HistoriaSchema = new Schema({
    usuario_id: {
        type: String
    },
    contenido: {
        type: String
    },
})

module.exports = mongoose.model('Historias', HistoriaSchema);