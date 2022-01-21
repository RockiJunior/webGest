const { clientes } = require('../../db.js');

const getClientByName = async (req, res) => {
	const { nombre } = req.params;
	try {
		const client = await clientes.findOne({
			where: {
				nombre: nombre
			}
		});
		res.json(client);
	} catch (err) {
		res.status(500).json({
			message: 'Error al obtener el nombre del cliente',
			error: err
		});
	}
};

module.exports = getClientByName;
