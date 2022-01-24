const { clientes } = require('../../db.js');
const { Op } = require('sequelize');

const modifyClientByName = async (req, res) => {
	try {
		const { nombre } = req.params;
		const { body } = req;

		const cliente = await clientes.findOne({
			where: {
				nombre: {
					[Op.like]: `%${nombre}%`
				}
			}
		});

		if (cliente) {
			await clientes.update(body, {
				where: {
					nombre: {
						[Op.like]: `%${nombre}%`
					}
				}
			});

			res.status(200).json({
				msg: `Cliente ${nombre} modificado correctamente`,
				body: body
			});
			
		} else {
			res.status(404).send(`No hay un cliente con el nombre ${nombre}`);
		}
	} catch (err) {
		console.error(err);
		res.status(500).send(`Error del servidor: ${err}`);
	}
};
module.exports = modifyClientByName;
