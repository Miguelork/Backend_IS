const express = require('express');
const RespuestaModel = require('../models/RespuestaModel');

class Respuesta {
    constructor() {
        this.app = express()
        // Ejemplo de la Rutas this.app.<Metodo>('<Ruta>', <Metodo>)
        this.app.post('/crearRespuesta', this.crearRespuesta)
        this.app.get('/listaRespuesta', this.listaRespuesta)
        this.app.post('/modificarRespuesta', this.modificarRespuesta)
        this.app.post('/eliminarRespuesta', this.eliminarRespuesta)
    }

    crearRespuesta(req, res) {
        let RespuestaItem = RespuestaModel({
            idPregunta: req.body.idPregunta,
            respuesta: req.body.respuesta,
            user: req.body.user,
            nombre: req.body.nombre,
            apellido: req.body.apellido
        });
        RespuestaItem.save().then(doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    listaRespuesta(req, res) {
        RespuestaModel.find().then(docs => {
            res.json({
                item: docs
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    modificarRespuesta(req, res) {
        RespuestaModel.updateOne({ _id: req.body.id }, {
            idPregunta: req.body.idPregunta,
            respuesta: req.body.respuesta,
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

    eliminarRespuesta(req, res) {
        RespuestaModel.deleteOne({ _id: req.body.id }).then(docs => {
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

module.exports = new Respuesta().app;