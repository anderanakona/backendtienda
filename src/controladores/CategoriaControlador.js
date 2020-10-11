const controllers = {}

//importar el modelo y sequelize
const categoria = require('../model/Categoria');
var sequelize = require('../model/database');

controllers.list = async (req, res) => {    

    const response = await sequelize.sync().then(function () {
        
        const data = categoria.findAll();
        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response });
}


controllers.crear = async (req, res) => {    

    const response = await sequelize.sync().then(function () {
        const { nombre_categoria} = req.body;
        categoria.create({
            nombre_categoria:nombre_categoria             
        });

        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response, mensaje:'creado exitosamente' });
}





module.exports = controllers;