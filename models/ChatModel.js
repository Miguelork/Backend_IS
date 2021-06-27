const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChatSchema = new Schema({
    userPaciente: {
        type: String
    },
    nombrePaciente: {
        type: String
    },
    userDoctor: {
        type: String
    },
    nombreDoctor: {
        type: String
    },
})

module.exports = mongoose.model('Chat', ChatSchema);