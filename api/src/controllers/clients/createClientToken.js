const jwt = require('jsonwebtoken');

const createTokenClient = (req, res) => {
	const user = {
		nombre: 'Gabriel Vilarroel',
		clave: '987654321asd',
		direccion: 'Tucuman 1562',
		codPostal: '5900',
		telefono: '3472552354',
		email: 'gabrielvillarroel_11@hotmail.com',
		cuit: '20371274198',
		dni: '37127419',
		saldo: '450000',
		nroIngresosBrutos: '123',
		CtaCte: true,
		listaDePrecios: '123',
		permisos: 'admin',
		condIvaId: 2
	};
	jwt.sign({ user }, 'secretkey', (err, token) => {
		res.json({
			token
		});
	});
};
module.exports = createTokenClient;