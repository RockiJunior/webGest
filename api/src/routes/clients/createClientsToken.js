const jwt = require('jsonwebtoken');
const { clientsData } = require('../../utils/mocks/clients/clientsMock.js');

const authorizeClientsToken = async (req, res, next) => {
	try {
		for (let i = 0; i < clientsData.length; i++) {
			if (req.body.clave === clientsData[i].clave) {
				const token = jwt.sign(
					{
						id: clientsData[i].id,
						nombre: clientsData[i].nombre,
						clave: clientsData[i].clave,
						direccion: clientsData[i].direccion,
						codPostal: clientsData[i].codPostal,
						telefono: clientsData[i].telefono,
						email: clientsData[i].email,
						cuit: clientsData[i].cuit,
						dni: clientsData[i].dni,
						saldo: clientsData[i].saldo,
						nroIngresosBrutos: clientsData[i].nroIngresosBrutos,
						CtaCte: clientsData[i].CtaCte,
						listaDePrecios: clientsData[i].listaDePrecios,
						permisos: clientsData[i].permisos,
						condIvaId: clientsData[i].condIvaId
					},
					'secretkey'
				);
				res.json({
					message: 'Acceso autorizado',
					token
				});
			}
		}

		jwt.sign({ user }, 'secretkey', (err, token) => {
			res.json({
				token
			});
		});
	} catch (err) {
		res.json({
			message: 'Acceso no autorizado'
		});
	}
};

module.exports = authorizeClientsToken;
