const { clientes } = require('../../../db.js');
const bcrypt = require('bcrypt');
const saltRounds = 12;

const hashClients = async (model, data) => {
	for (let item of data) {
		bcrypt.hash(item.clave, saltRounds, (err, hash) => {
			clientes
				.create({
					nombre: item.nombre,
					clave: hash,
					direccion: item.direccion,
					codPostal: item.codPostal,
					telefono: item.telefono,
					email: item.email,
					cuit: item.cuit,
					dni: item.dni,
					saldo: item.saldo,
					nroIngresosBrutos: item.nroIngresosBrutos,
					CtaCte: item.CtaCte,
					listaDePrecios: item.listaDePrecios,
					permisos: item.permisos,
					condIvaId: item.condIvaId
				})
				.catch((err) => console.log(err));
		});

	}
};

module.exports = { hashClients };
