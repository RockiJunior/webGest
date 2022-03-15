const { clientes } = require('../../db.js');
const bcrypt = require('bcrypt');

const signIn = (req, res) => {
	const { nombre, clave } = req.body;

	clientes
		.findOne({
			where: {
				nombre: nombre
			}
		})
		.then((user) => {
			if (!user) {
				return next({ status: 401 });
			} else {
				bcrypt.compare(clave, user.clave, (error, result) => {
					if (result) {
						res.status(200).json({
							message: "Log in Success",
                            user
						});
					} else {
						return next({ status: 401 });
					}
				});
			}
		})
		.catch((error) => next(error));
};
module.exports = signIn;
