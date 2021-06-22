const express = require('express');
const UsuarioModel = require('../models/UsuarioModel');

class Usuario {
    constructor() {
        this.app = express()
        // Ejemplo de la Rutas this.app.<Metodo>('<Ruta>', <Metodo>)
        this.app.post('/crearUsuario', this.crearUsuario)
        this.app.get('/listaUsuario', this.listaUsuario)
        this.app.post('/modificarUsuario', this.modificarUsuario)
        this.app.post('/cambiarClaveUsuario', this.cambiarClaveUsuario)
    }

    crearUsuario(req, res) {
        let UsuarioItem = UsuarioModel({
            tipo: req.body.tipo,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            user: req.body.user,
            password: req.body.password,
            nacimiento: req.body.nacimiento,
            sexo: req.body.sexo,
            telefono: req.body.telefono,
            email: req.body.email,
            direccion: req.body.direccion,
            especialidades: req.body.especialidades,
            horaInicial: req.body.horaInicial,
            horaFinal: req.body.horaFinal,
            aprobado: req.body.aprobado,
            monto: req.body.monto
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
            tipo: req.body.tipo,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            user: req.body.user,
            password: req.body.password,
            nacimiento: req.body.nacimiento,
            sexo: req.body.sexo,
            telefono: req.body.telefono,
            email: req.body.email,
            direccion: req.body.direccion,
            especialidades: req.body.especialidades,
            horaInicial: req.body.horaInicial,
            horaFinal: req.body.horaFinal,
            aprobado: req.body.aprobado,
            monto: req.body.monto
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

    cambiarClaveUsuario(req, res) {
        UsuarioModel.updateOne({ _id: req.body.id }, {
            password: req.body.password
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