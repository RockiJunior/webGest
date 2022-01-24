const { clientes } = require('../../db.js');

const modifyClientById = async (req, res) => {
	const { id } = req.params;
	let data = req.body;

	try {
		 await clientes.update(data, {
			where: {
				id: id
			}
		});
		const findClient = await clientes.findOne({
			where: {
				id: id
			}
		});
		res.status(200).json({ msg: 'el cliente fue actualizado', client: findClient });
	} catch (err) {
		res.status(500).json({
			message: 'Error al modificar el cliente',
			error: err
		});
	}
};
module.exports = modifyClientById;
