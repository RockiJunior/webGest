const { clientes } = require('../../db.js');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const authConfing = require('../../config/auth.js');

const logIn = async (req, res) => {
	const { nombre, clave } = req.body;

	const user = await clientes.findOne({
		where: {
			nombre: nombre
		}
	});
	try {
		if (!user) {
			res.json({
				message: 'This user does not match with any registered user'
			});
		} else {
			let match = await bcrypt.compare(clave, user.clave);
			if (match) {
				let token = jwt.sign(
					{
						user: user
					},
					authConfing.secret,
					{
						expiresIn: '999days'
					}
				);
				return res.status(200).json({
					auth: true,
					id: user.id,
					nombre: user.nombre,
					token: token
				});
			} else {
				return res.json({
					auth: false,
					id: user.id,
					message: 'The password or the mail does not match with our records. Please try again'
				});
			}
		}
	} catch (err) {
		console.log(err);
	}
};
module.exports = logIn;
