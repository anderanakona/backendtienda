var Sequelize = require('sequelize');
var sequelize = require('./database');

var nametable = 'categoria';

var categoria = sequelize.define(nametable, {
    id_categoria: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_categoria: Sequelize.STRING

    

});
module.exports=categoria;
