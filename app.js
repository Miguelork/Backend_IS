// Importanto de dependencias
const express = require('express'); 
const mongoose = require('mongoose');

class App {
    constructor() {
        // Instancia de express para arrancar el Servidor
        this.app = express()
        // Manipular los objetos json
        this.app.use(require('body-parser').json())
        // Llama a la función para conectarse a la DB
        this.database()
        // Función de la rutas
        this.routes()
        // Arrancar el servidor en puerto que provee Heroku sino usara el 3000
        this.app.listen(process.env.PORT || 3000, function() {
            console.log("Servidor trabajando")
        });

    }

    // Rutas
    routes() {
        this.app.use(require('./routes/UsuarioRoutes'))
    }

    // Conectar con la DB
    database() {
        mongoose.connect('mongodb+srv://User:saman2021@bdlinkmed.gkugn.mongodb.net/DBLinkMed?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.connection.on('error', function() {
            console.log('Se produjo un error al conectarse a la Base de datos')
        })
    }

}

// Creando la instancia de la clase para que arranque
new App()