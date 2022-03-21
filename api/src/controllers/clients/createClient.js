const { clientes } = require('../../db.js');
const bcrypt = require('bcrypt');
const saltRounds = 12;

const createClient = async (req, res) => {
	try {
		const findClient = await clientes.findOne({
			where: {
				email: req.body.email
			}
		});
		if (!req.body.clave) {
			return res.status(400).json({
				message: 'Please enter a password'
			});
		}
		if (req.body.clave.length < 6) {
			return res.status(400).json({
				message: 'Password must have at least 6 characters'
			});
		}
		if(findClient) {
			return res.status(400).json({
				message: 'this email is already registered, please try another one'
			});
		}
		else if (!findClient) {
			bcrypt.hash(req.body.clave, saltRounds, (err, hash) => {
				clientes
					.create({
						nombre: req.body.nombre,
						clave: hash,
						direccion: req.body.direccion,
						codPostal: req.body.codPostal,
						telefono: req.body.telefono,
						email: req.body.email,
						cuit: req.body.cuit,
						dni: req.body.dni,
						saldo: req.body.saldo,
						nroIngresosBrutos: req.body.nroIngresosBrutos,
						CtaCte: req.body.CtaCte,
						listaDePrecios: req.body.listaDePrecios,
						permisos: req.body.permisos,
						condIvaId: req.body.condIvaId
					})
					.then((client) =>
						res.status(201).json({
							message: 'client created successfully',
							client: client
						})
					)
					.catch((err) => console.log(err));
			});
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = createClient;
