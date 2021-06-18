const express = require('express');
const DoctorHistoriaModel = require('../models/DoctorHistoriaModel');

class DoctorHistoria {
    constructor() {
        this.app = express()
        // Ejemplo de la Rutas this.app.<Metodo>('<Ruta>', <Metodo>)
        this.app.post('/crearDoctorHistoria', this.crearDoctorHistoria)
        this.app.get('/listaDoctorHistoria', this.listaDoctorHistoria)
        this.app.post('/modificarDoctorHistoria', this.modificarDoctorHistoria)
        this.app.post('/eliminarDoctorHistoria', this.eliminarDoctorHistoria)
    }

    crearDoctorHistoria(req, res) {
        let DoctorHistoriaItem = DoctorHistoriaModel({
            historia_id: req.body.historia_id,
            doctor_id: req.body.doctor_id,
        });
        DoctorHistoriaItem.save().then(doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    listaDoctorHistoria(req, res) {
        DoctorHistoriaModel.find().then(docs => {
            res.json({
                item: docs
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    modificarDoctorHistoria(req, res) {
        DoctorHistoriaModel.updateOne({ _id: req.body.id }, {
            historia_id: req.body.historia_id,
            doctor_id: req.body.doctor_id,
        }).then(docs => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    eliminarDoctorHistoria(req, res) {
        DoctorHistoriaModel.deleteOne({ _id: req.body.id }).then(docs => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }    

}

module.exports = new DoctorHistoria().app;