const express = require('express');
const HistoriaModel = require('../models/HistoriaModel');

class Historia {
    constructor() {
        this.app = express()
        // Ejemplo de la Rutas this.app.<Metodo>('<Ruta>', <Metodo>)
        this.app.post('/crearHistoria', this.crearHistoria)
        this.app.get('/listaHistoria', this.listaHistoria)
        this.app.post('/modificarHistoria', this.modificarHistoria)
        this.app.post('/eliminarHistoria', this.eliminarHistoria)
    }

    crearHistoria(req, res) {
        let HistoriaItem = HistoriaModel({
            usuario_id: req.body.usuario_id,
            contenido: req.body.contenido,
        });
        HistoriaItem.save().then(doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    listaHistoria(req, res) {
        HistoriaModel.find().then(docs => {
            res.json({
                item: docs
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    modificarHistoria(req, res) {
        HistoriaModel.updateOne({ _id: req.body.id }, {
            usuario_id: req.body.usuario_id,
            contenido: req.body.contenido,
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

    eliminarHistoria(req, res) {
        HistoriaModel.deleteOne({ _id: req.body.id }).then(docs => {
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

module.exports = new Historia().app;