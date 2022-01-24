const { clientes } = require('../../db.js');

const getClientById = async (req, res) => {
	const { id } = req.params;
	try {
		const client = await clientes.findByPk(id);
		await res.json(client);
	} catch (err) {
		res.status(500).json({
			message: 'Error al obtener el id del cliente',
			error: err
		});
	}
};

module.exports = getClientById;
