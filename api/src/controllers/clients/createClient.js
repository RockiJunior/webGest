const { clientes } = require('../../db.js');

const createClient = async (req, res, next) => {
	let {
		nombre,
		clave,
		direccion,
		codPostal,
		telefono,
		email,
		cuit,
		dni,
		saldo,
		nroIngresosBrutos,
		CtaCte,
		listaDePrecios,
		permisos
	} = req.body;
	
	const createClient = await clientes.create({
		nombre,
		clave,
		direccion,
		codPostal,
		telefono,
		email,
		cuit,
		dni,
		saldo,
		nroIngresosBrutos,
		CtaCte,
		listaDePrecios,
		permisos
	});
	
	try {
		res.status(200).json({
			message: 'Client created',
			data: createClient
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = createClient;
