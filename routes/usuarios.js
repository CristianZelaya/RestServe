const {Router} = require('express');
const { usuarioGet, 
        usuarioPost, 
        usuarioPut, 
        usuarioDelete} = require('../controllers/usuarios');

const router = Router();

router.get('/', usuarioGet);

//recibe un id como parametro
router.post('/:id', usuarioPost);

router.put('/', usuarioPut);

router.delete('/', usuarioDelete);

module.exports = router;