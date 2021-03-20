const express = require('express');
require('dotenv').config();
const cors = require('cors');


class Servidor{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';

        this.middlewares();
        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));
    }

    //rutas de mi app
    routes(){
        this.app.use(this.usuarioPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log(`App corriendo en el puerto ${this.port}`)
        })
    }

}

module.exports = Servidor;