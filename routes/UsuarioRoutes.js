const express = require('express');
const UsuarioModel = require('../models/UsuarioModel');

class Usuario {
    constructor() {
        this.app = express()

        this.app.post('/crearUsuario', this.crearUsuario)
        this.app.get('/listaUsuario', this.listaUsuario)
        this.app.put('/modificarUsuario', this.modificarUsuario)
    }

    crearUsuario(req, res) {
        let UsuarioItem = UsuarioModel({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            telefono: req.body.telefono,
            direccion: req.body.direccion
        });
        UsuarioItem.save().then(doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    listaUsuario(req, res) {
        UsuarioModel.find().then(docs => {
            res.json({
                item: docs
            })
        }, err => {
            res.status(500).json({
                error: 'Error:' + err
            })
        })
    }

    modificarUsuario(req, res) {
        UsuarioModel.updateOne({ _id: req.body.id }, {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            telefono: req.body.telefono,
            direccion: req.body.direccion
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


}

module.exports = new Usuario().app;