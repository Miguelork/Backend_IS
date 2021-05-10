const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: {
        type: String
    },
    is_done: {
        type: Boolean
    }

})

module.exports = mongoose.model('ToDo', todoSchema);