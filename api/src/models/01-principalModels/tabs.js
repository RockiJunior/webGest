const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  for (let i = 1; i <= 14; i++) {
    sequelize.define(`tab${i}`, {
      codigo: {
        type: DataTypes.INTEGER,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      precio: {
        type: DataTypes.DECIMAL(12, 3),
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      filtro1: {
        type: DataTypes.INTEGER,
      },
      filtro2: {
        type: DataTypes.INTEGER,
      },
      filtro3: {
        type: DataTypes.INTEGER,
      },
      filtro4: {
        type: DataTypes.INTEGER,
      },
      filtro5: {
        type: DataTypes.INTEGER,
      },
      nombreFiltro1: {
        type: DataTypes.STRING,
      },
      nombreFiltro2: {
        type: DataTypes.STRING,
      },
      nombreFiltro3: {
        type: DataTypes.STRING,
      },
      nombreFiltro4: {
        type: DataTypes.STRING,
      },
      nombreFiltro5: {
        type: DataTypes.STRING,
      }, 
    }, {
      timestamps: false,
      freezeTableName: true,
    });
  }
};
