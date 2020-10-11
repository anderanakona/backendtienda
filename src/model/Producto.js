var Sequelize = require('sequelize');
var sequelize = require('./database');
var Categoria=require('./Categoria');
var nametable = 'producto';

var producto = sequelize.define(nametable, {
    id_producto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_producto: Sequelize.STRING,
    precio_producto: Sequelize.INTEGER,
    cantidad_producto:Sequelize.INTEGER, 
    //LLAVE FORANEA 
    id_categoria:{
        type:Sequelize.INTEGER,
        //esta es una referencia para nombrar el modelo
        references:{
            model:Categoria,
            key: 'id_categoria'
        }

    }



});
producto.belongsTo(Categoria);
module.exports = producto;