const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DoctorHistoriaSchema = new Schema({
    historia_id: {
        type: String
    },
    doctor_id: {
        type: String
    },
})

module.exports = mongoose.model('DoctorHistorias', DoctorHistoriaSchema);