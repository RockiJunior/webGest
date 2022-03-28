const { Router } = require('express');
const router = Router();

const getAllClients = require('../../controllers/clients/getAllClients.js');
const getClientById = require('../../controllers/clients/getClientById.js');
const getClientByName = require('../../controllers/clients/getClientByName.js');
const modifyClientById = require('../../controllers/clients/modifyClientById.js');
const modifyClientByName = require('../../controllers/clients/modifyClientByName.js');
const createClient = require('../../controllers/clients/createClient.js');
const logIn = require('../../controllers/clients/signIn.js');

router.get('/', getAllClients);
router.get('/:id', getClientById);
router.get('/byName/:nombre', getClientByName);
router.put('/updateClient/:id', modifyClientById);
router.put('/updateClientByName/:nombre', modifyClientByName);


// Sign Up & Sign In
router.post('/createClient', createClient);
router.post('/logIn', logIn);

module.exports = router;
