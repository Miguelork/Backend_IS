// Importanto de dependencias
const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');

class App {
    constructor() {
        // Instancia de express para arrancar el Servidor
        this.app = express()
        // CORS
        this.app.use(cors());
        // Manipular los objetos json
        this.app.use(require('body-parser').json())
        // Llama a la función para conectarse a la DB
        this.database()
        // Función de la rutas
        this.routes()
        // Arrancar el servidor en puerto que provee Heroku sino usara el 3000
        this.app.listen(process.env.PORT || 4000, function() {
            console.log("Servidor trabajando")
        });
    }

    // Rutas
    routes() {
        this.app.use(require('./routes/UsuarioRoutes'))
        this.app.use(require('./routes/PreguntaRoutes'))
        this.app.use(require('./routes/RespuestaRoutes'))
        this.app.use(require('./routes/HistoriaRoutes'))
        this.app.use(require('./routes/DoctorHistoriaRoutes'))
        this.app.use(require('./routes/ChatRoutes'))
        this.app.use(require('./routes/MensajeRoutes'))
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