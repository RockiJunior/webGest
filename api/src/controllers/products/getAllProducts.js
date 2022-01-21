const {productos} = require('../../db.js');


const getAllProducts = async (req, res) => { 
    
    try {
        const products = await productos.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los clientes',
            error
        });
    }
}
module.exports = getAllProducts;