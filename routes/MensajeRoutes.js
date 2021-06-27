const express = require('express');
const MensajeModel = require('../models/MensajeModel');

class Mensaje {
    constructor() {
        this.app = express()
        // Ejemplo de la Rutas this.app.<Metodo>('<Ruta>', <Metodo>)
        this.app.post('/crearMensaje', this.crearMensaje)
        this.app.get('/listaMensaje', this.listaMensaje)
        this.app.post('/modificarMensaje', this.modificarMensaje)
        this.app.post('/eliminarMensaje', this.eliminarMensaje)
    }

    crearMensaje(req, res) {
        let MensajeItem = MensajeModel({
            idChat: req.body.idChat,
            texto: req.body.texto,
            fecha: req.body.fecha,
            user: req.body.user,
            nombre: req.body.nombre
        });
        MensajeItem.save().then(doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    listaMensaje(req, res) {
        MensajeModel.find().then(docs => {
            res.json({
                item: docs
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    modificarMensaje(req, res) {
        MensajeModel.updateOne({ _id: req.body.id }, {
            idChat: req.body.idChat,
            texto: req.body.texto,
            fecha: req.body.fecha,
            user: req.body.user,
            nombre: req.body.nombre
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

    eliminarMensaje(req, res) {
        MensajeModel.deleteOne({ _id: req.body.id }).then(docs => {
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

module.exports = new Mensaje().app;