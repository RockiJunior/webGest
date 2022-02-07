const jwt = require('jsonwebtoken');

const createTokenClient = (req, res) => {
	const user = req.body;

	jwt.sign({ user }, 'secretkey', (err, token) => {
		res.json({
			token
		});
	});
};
module.exports = createTokenClient;
