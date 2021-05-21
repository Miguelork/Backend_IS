const express = require('express');
const UsuarioModel = require('../models/UsuarioModel');

class Usuario {
    constructor() {
        this.app = express()
        // Ejemplo de la Rutas this.app.<Metodo>('<Ruta>', <Metodo>)
        this.app.post('/crearUsuario', this.crearUsuario)
        this.app.get('/listaUsuario', this.listaUsuario)
        this.app.put('/modificarUsuario', this.modificarUsuario)
    }

    crearUsuario(req, res) {
        console.log(req.body.tipo);
        let UsuarioItem = UsuarioModel({
            tipo: req.body.tipo,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            user: req.body.user,
            password: req.body.password,
            telefono: req.body.telefono,
            email: req.body.email,
            direccion: req.body.direccion,
            especialidades: req.body.especialidades,
            horaIncial: req.body.horaIncial,
            horaFinal: req.body.horaFinal
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