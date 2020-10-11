const express= require('express');
const router=express.Router();
const productocontrolador=require('../controladores/ProductoControlador')




//router.post('/create', categoriaController.create);
router.get('/list', productocontrolador.list);
router.post('/crear-producto', productocontrolador.crear);
router.post('/eliminar-producto', productocontrolador.eliminar);
router.get('/obtener-producto/:id', productocontrolador.obtenerId);

router.post('/actualizar-producto/:id', productocontrolador.actualizar);

module.exports= router;