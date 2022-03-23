const { clientes } = require('../../db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 12;

const createClient = async (req, res) => {
	const {
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

	try {
		const findClient = await clientes.findOne({
			where: {
				email: email
			}
		});
		if (!clave) {
			return res.status(400).json({
				message: 'Please enter a password'
			});
		}
		if (clave.length < 6) {
			return res.status(400).json({
				message: 'Password must have at least 6 characters'
			});
		}
		if (findClient) {
			return res.status(400).json({
				message: 'this email is already registered, please try another one'
			});
		} else if (!findClient) {
			let hash = await bcrypt.hash(clave, saltRounds);
			const createClient = await clientes.create({
				nombre: nombre,
				clave: hash,
				direccion: direccion,
				codPostal: codPostal,
				telefono: telefono,
				email: email,
				cuit: cuit,
				dni: dni,
				saldo: saldo,
				nroIngresosBrutos: nroIngresosBrutos,
				CtaCte: CtaCte,
				listaDePrecios: listaDePrecios,
				permisos: permisos,
				condIvaId: condIvaId
			});
			if (createClient) {
				const token = jwt.sign(
					{
						client: createClient
					},
					'secret',
					{
						expiresIn: '9999 days'
					}
				);
				res.status(200).json({
					message: 'Client created successfully',
					client: createClient,
					token: token
				});
			}
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = createClient;
