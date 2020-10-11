const express= require('express');
const router=express.Router();
const categoriaController=require('../controladores/CategoriaControlador')




//router.post('/create', categoriaController.create);
router.get('/list', categoriaController.list);
router.post('/crear-categoria', categoriaController.crear);

module.exports= router;