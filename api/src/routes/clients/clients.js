const { Router } = require('express');
const router = Router();

const getAllClients = require('../../controllers/clients/getAllClients.js');
const getClientById = require('../../controllers/clients/getClientById.js');
const getClientByName = require('../../controllers/clients/getClientByName.js');
const createClient = require('../../controllers/clients/createClient.js');
const modifyClientById = require('../../controllers/clients/modifyClientById.js');
const modifyClientByName = require('../../controllers/clients/modifyClientByName.js');

router.get('/', getAllClients);
router.get('/:id', getClientById);
router.get('/:nombre', getClientByName);
router.post('/create', createClient);
router.put('/updateClient/:id', modifyClientById);
router.put('/updateClientByName/:nombre', modifyClientByName);

module.exports = router;