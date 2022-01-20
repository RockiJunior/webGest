const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('condIva', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true  
        },
        nombre: {
            type: DataTypes.STRING,
        }
    })
        
}