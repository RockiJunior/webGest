const {clientes} = require('../../db.js');


const getAllClients = async (req, res) => { 
    try {
        const clients = await clientes.findAll();
        res.json(clients);
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los clientes',
            error
        });



        
    }
}
module.exports = getAllClients;