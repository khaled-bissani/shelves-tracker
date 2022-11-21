const {Router} = require('express');
const {addProduct, getProduct, getSingleProduct, updateSingleProduct} = require('../controllers/product.controller');
const router = Router();

router.post('/add',addProduct);
router.post('/all', getProduct);
router.get('/single_product', getSingleProduct);
router.post('/single_product', updateSingleProduct)

module.exports= router;