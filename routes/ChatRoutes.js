const express = require('express');
const ChatModel = require('../models/ChatModel');

class Chat {
    constructor() {
        this.app = express()
        // Ejemplo de la Rutas this.app.<Metodo>('<Ruta>', <Metodo>)
        this.app.post('/crearChat', this.crearChat)
        this.app.get('/listaChat', this.listaChat)
        this.app.post('/modificarChat', this.modificarChat)
        this.app.post('/eliminarChat', this.eliminarChat)
    }

    crearChat(req, res) {
        let ChatItem = ChatModel({
            userPaciente: req.body.userPaciente,
            nombrePaciente: req.body.nombrePaciente,
            userDoctor: req.body.userDoctor,
            nombreDoctor: req.body.nombreDoctor
        });
        ChatItem.save().then(doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    listaChat(req, res) {
        ChatModel.find().then(docs => {
            res.json({
                item: docs
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    modificarChat(req, res) {
        ChatModel.updateOne({ _id: req.body.id }, {
            userPaciente: req.body.userPaciente,
            nombrePaciente: req.body.nombrePaciente,
            userDoctor: req.body.userDoctor,
            nombreDoctor: req.body.nombreDoctor
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

    eliminarChat(req, res) {
        ChatModel.deleteOne({ _id: req.body.id }).then(docs => {
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

module.exports = new Chat().app;