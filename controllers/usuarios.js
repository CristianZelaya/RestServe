const { response } = require('express')

const usuarioGet = (req, res = response) =>{

    //recibir parametros por medio de un query
    const {q , nombre, apikey, page, limit} = req.query;
    res.json({
        msg: 'Peticion GET- desde controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuarioPost = (req, res = response) =>{

    //id como parametro
    const id = req.params.id;

    //informacion que viene del body, viene con el req
    const {nombre, edad} = req.body;

    res.json({
        msg: 'Peticion POST- desde controlador',
        nombre,
        edad,
        id
    });
}

const usuarioPut = (req, res = response) =>{
    res.json({
        msg: 'Peticion PUT- desde controlador'
    });
}

const usuarioDelete = (req, res = response) =>{
    res.json({
        msg: 'Peticion DELETE- desde controlador'
    });
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}