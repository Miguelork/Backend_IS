const express = require('express');
const mongoose = require('mongoose');

class App {
    constructor() {
        this.app = express()

        this.app.use(require('body-parser').json())

        this.database()

        this.routes()

        this.app.listen(process.env.PORT, function() {
            console.log("Servidor trabajando en puerto 3000")
        });

    }

    routes() {
        this.app.use(require('./routes/todo'))
    }

    database() {
        mongoose.connect('mongodb+srv://UserLinkMed:UserLinkMed2021@basededatos.cjqsd.mongodb.net/DBLinkMed?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.on('error', function() {
            console.log('Se produjo un error al conectarse a la Base de datos')
        })
    }

}

new App()