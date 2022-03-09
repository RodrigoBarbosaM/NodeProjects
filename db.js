const sequelize = require('sequelize');
const sequelize = new sequelize('crud', 'root','',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306

});

module.exports = sequelize;
