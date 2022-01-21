const { Router } = require('express');
const router = Router();

const getAllClients = require('../../controllers/clients/getAllClients.js');
const getClientById = require('../../controllers/clients/getClientById.js');
const getClientByName = require('../../controllers/clients/getClientByName.js');
const createClient = require('../../controllers/clients/createClient.js');
const modifyClientById = require('../../controllers/clients/modifyClientById.js');

router.get('/', getAllClients);
router.get('/:id', getClientById);
router.get('/:nombre', getClientByName);
router.post('/create', createClient);
router.put('/updateClient/:id', modifyClientById);

module.exports = router;