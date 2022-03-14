const { clientes } = require('../../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth.js');

const signUp = async (req, res) => {
	let password = bcrypt.hashSync(req.body.clave, authConfig.rounds);

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
		permisos,
		condIvaId
	} = req.body;

	const clientCreated = await clientes.create({
		nombre,
		clave: password,
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
		permisos,
		condIvaId
	});

	let token = jwt.sign(
		{
			user: user
		},
		authConfig.secret,
		{
			expiresIn: authConfig.expires
		}
	);
	try {
		res.json({
			cliente: clientCreated,
			token
		});
	} catch (err) {
		console.log(err);
	}
};

const signIn = (req, res) => {};

module.exports = { signIn, signUp };
