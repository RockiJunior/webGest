const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	return sequelize.define(
		'usuarios',
		{
			id: {
				type: DataTypes.BIGINT, // 64 bit integer
				autoIncrement: true, // automatically incrementing primary key
				primaryKey: true // primary key
			},
            nombre: {
                type: DataTypes.STRING,
            },
            clave: {
                type: DataTypes.STRING,
            },
            tipoUsuario: {
                type: DataTypes.ENUM("admin", "cliente", "vendedor"), // todos los tipos de usuarios
            },
        },
		{
			timestamps: true
		}
	);
};
