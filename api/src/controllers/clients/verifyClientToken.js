const jwt = require('jsonwebtoken');

const verifyClientToken = (req, res, next) => {
	jwt.verify(req.token, 'secretkey', (err, authData) => {
		if (err) {
			res.sendStatus(403);
		} else {
			res.json({
				message: 'Auth successful',
				authData
			});
		}
	});
};
module.exports = verifyClientToken;
