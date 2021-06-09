const express = require('express');
const PreguntaModel = require('../models/PreguntaModel');

class Pregunta {
    constructor() {
        this.app = express()
        // Ejemplo de la Rutas this.app.<Metodo>('<Ruta>', <Metodo>)
        this.app.post('/crearPregunta', this.crearPregunta)
        this.app.get('/listaPregunta', this.listaPregunta)
        this.app.post('/modificarPregunta', this.modificarPregunta)
        this.app.delete('/eliminarPregunta', this.eliminarPregunta)
    }

    crearPregunta(req, res) {
        let PreguntaItem = PreguntaModel({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            user: req.body.user,
            nombre: req.body.nombre,
            apellido: req.body.apellido
        });
        PreguntaItem.save().then(doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    listaPregunta(req, res) {
        PreguntaModel.find().then(docs => {
            res.json({
                item: docs
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    modificarPregunta(req, res) {
        PreguntaModel.updateOne({ _id: req.body.id }, {
            titulo: req.body.tipo,
            descripcion: req.body.descripcion,
            user: req.body.user,
            nombre: req.body.nombre,
            apellido: req.body.apellido
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

    eliminarPregunta(req, res) {
        PreguntaModel.deleteOne({ _id: req.body.id }).then(docs => {
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

module.exports = new Pregunta().app;