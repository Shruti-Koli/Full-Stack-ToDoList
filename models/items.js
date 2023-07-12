const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Items = sequelize.define('item',{
    id:{
        type: Sequelize.INTEGER,
        allowNull : false,
        primaryKey: true,
        autoIncrement: true 
    },
    name:{
        type: Sequelize.STRING,
        allowNull : false,
    },
    description:{
        type: Sequelize.STRING,
        allowNull : false,
    },
    status:{
        type: Sequelize.STRING,
        allowNull : false,
    }
})

module.exports = Items;