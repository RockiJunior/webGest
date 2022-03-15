const { clientes } = require('../../db.js');
const bcrypt = require('bcrypt');
const saltRounds = 12;


const createClient = (req, res) => {
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
			.then((user) => res.status(201).send(user))
			.catch((err) => console.log(err));
	});
};

module.exports = createClient;
