const express = require('express');
const ToDo = require('../models/todoModel');

class Todo {
    constructor() {
        this.app = express()
        this.app.get('/', this.hello)
        this.app.post('/newTodo', this.newToDo)
        this.app.get('item', this.listItems)
        this.app.put('/changeStatus', this.changeStatus)
    }

    hello(req, res) {
        res.json("Servidor funcionando!")
    }

    newToDo(req, res) {
        let todoItem = new Todo({
            title: req.body.title
        });
        todoItem.save().then(doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error al intentar crear.'
            })
        })
    }

    listItems(req, res) {
        ToDo.find().then(docs => {
            res.json({
                item: docs
            })
        }, err => {
            res.status(500).json({
                error: 'Error al consultar'
            })
        })
    }

    changeStatus(req, res) {
        ToDo.updateOne({ _id: req.body.id }, { title: req.body.newTitle }).then(docs => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: 'Error al intentar crear.'
            })
        })
    }


}

module.exports = new Todo().app;