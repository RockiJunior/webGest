const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	return sequelize.define(
		'productos',
		{
			id: {
				type: DataTypes.BIGINT, // 64 bit integer
				autoIncrement: true, // automatically incrementing primary key
				primaryKey: true // primary key
			},
			nombre: {
				type: DataTypes.STRING // varchar(255)
			},
			codBarra1: {
				type: DataTypes.BIGINT // 64 bit integer
			},
			codBarra2: {
				type: DataTypes.BIGINT // 64 bit integer
			},
			codBarra3: {
				type: DataTypes.BIGINT // 64 bit integer
			},
			codBarra4: {
				type: DataTypes.BIGINT // 64 bit integer
			}
		},
		{
			timestamps: true
		}
	);
};
