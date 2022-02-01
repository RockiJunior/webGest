const jwt = require('jsonwebtoken');
const { clientsData } = require('../../utils/mocks/clients/clientsMock.js');

const createClientsToken = async (req, res, next) => {
	try {
		const arr = [];
		for (let i = 0; i < clientsData.length; i++) {
			jwt.sign(
				{
					user: clientsData[i]
				},
				'secretkey',
				async (err, token) => {
					arr.push({
						// clientId: clientsData[i].id,
						clientName: clientsData[i].nombre,
						token
					});
				}
			);
		}
		await res.send(await arr);
	} catch (err) {
		res.status(401).json({
			message: 'Acceso no autorizado'
		});
	}
};

module.exports = createClientsToken;
