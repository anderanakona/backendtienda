const controllers = {}

//importar el modelo y sequelize
const producto = require('../model/Producto');
var sequelize = require('../model/database');
const categoria = require('../model/Categoria');

controllers.list = async (req, res) => {

    const response = await sequelize.sync().then(function () {

        const data = producto.findAll(
        );
        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response });
}

controllers.crear = async (req, res) => {

    const response = await sequelize.sync().then(function () {
        const { nombre_producto, precio_producto, cantidad_producto, id_categoria } = req.body;
        producto.create({
            nombre_producto: nombre_producto,
            precio_producto: precio_producto,
            cantidad_producto: cantidad_producto,
            id_categoria: id_categoria

        });
        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response, mensaje: 'creado exitosamente' });
}

controllers.actualizar = async (req, res) => {

    const response = await sequelize.sync().then(function () {
        const { id } = req.params;
        const { nombre_producto, precio_producto, cantidad_producto, id_categoria } = req.body;
        producto.update({
            nombre_producto: nombre_producto,
            precio_producto: precio_producto,
            cantidad_producto: cantidad_producto,
            id_categoria: id_categoria

        }, 
        {where:{id_producto:id}});
        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response, mensaje: 'creado exitosamente' });
}


//metodo para eliminar producto
controllers.eliminar = async (req, res) => {
    //parametros del póst
    const { id_producto } = req.body;
    //delete del sequelize

    const del = await producto.destroy({
        where: { id_producto: id_producto }
    });

    res.json({ success: true, deleted: del, mensaje: 'elimindado correctamente' });
}

controllers.obtenerId = async (req, res) => {


    const response = await sequelize.sync().then(function () {
        const { id } = req.params;
        const data = producto.findAll({
            where: { id_producto: id }
        }
        );
        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response });
}


module.exports = controllers;