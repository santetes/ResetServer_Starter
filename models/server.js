const express = require('express')
const cors = require('cors')
require('dotenv').config()

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT

        //Middlewares
        this.middlewares()
        //Rutas de mi aplicación
        this.routes()
    }

    middlewares() {
        //Cors
        this.app.use(cors())

        //Lectura y parseo del body
        //**Con este middleware le decimos que todo lo que viene en el cuerpo de las petciones Post/Put/delete va a ser JSON  */
        this.app.use(express.json())

        //Direcctorio Público
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use('/api/usuarios', require('../routes/user.routes'))
    }

    listen() {
        this.app.listen(this.port, () =>
            console.log(`A la escucha en el puerto ${this.port}`.magenta)
        )
    }
}

module.exports = Server
