const { clientes } = require('../../db.js');

const createClient = async (req, res, next) => {
	let {
		nombre,
		direccion,
		codPostal,
		telefono,
		email,
		cuit,
		dni,
		saldo,
		nroIngresosBrutos,
		CtaCte,
		listaDePrecios
	} = req.body;
	
	const createClient = await clientes.create({
		nombre,
		direccion,
		codPostal,
		telefono,
		email,
		cuit,
		dni,
		saldo,
		nroIngresosBrutos,
		CtaCte,
		listaDePrecios
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
