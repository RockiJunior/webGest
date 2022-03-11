const {Router} = require('express');
const router = Router();

const getAllProducts = require('../../controllers/products/getAllProducts.js');
const createProduct = require('../../controllers/products/createProduct.js');
const getProductById = require('../../controllers/products/getProductById.js');
const getProductByName = require('../../controllers/products/getProductByName.js');


router.get('/', getAllProducts);
router.get('/getProductById/:id', getProductById);
router.get('/getProductByName/:nombre', getProductByName);
router.post('/createProduct', createProduct);



module.exports = router;