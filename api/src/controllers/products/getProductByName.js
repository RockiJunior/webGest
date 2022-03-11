const { productos } = require('../../db.js');

const getProductByName = async (req, res, next) => {
	const { nombre } = req.params;
	try {
		const producto = await productos.findOne({
			where: {
				nombre: nombre
			}
		});
		res.json(producto);
	} catch (err) {
		res.status(500).json({
			message: 'cannot find product',
			error: err
		});
	}
};


module.exports = getProductByName;