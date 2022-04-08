const {Router} = require('express');
const router = Router();

const getAllTabs = require('../../controllers/tabs/getAllTabs.js');


router.get('/', getAllTabs);



module.exports = router;