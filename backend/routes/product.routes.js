const {Router} = require('express');
const {addProduct, getProduct, getSingleProduct} = require('../controllers/product.controller');
const router = Router();

router.post('/add',addProduct);
router.get('/all', getProduct);
router.get('/single_product', getSingleProduct);

module.exports= router;