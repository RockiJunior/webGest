const { productos } = require('../../db.js');

const getProductById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const product = await productos.findByPk(id);
		await res.json(product);
	} catch (err) {
		console.log(err);
	}
	
};

module.exports = getProductById;
