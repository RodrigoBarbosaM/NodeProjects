const sequelize = require('sequelize');
const database = require('../db');

const CategoriaProduto = database.define('categoriaProduto', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true 

    },
    nome: {
        type: sequelize.STRING,
        allowNull: false

    }
    
})

module.exports = CategoriaProduto;