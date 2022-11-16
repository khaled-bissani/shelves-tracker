const {Router} = require('express');
const {addProduct, getProduct, getSingleProduct, updateSingleProduct} = require('../controllers/product.controller');
const router = Router();

router.post('/add',addProduct);
router.get('/all', getProduct);
router.get('/single_product', getSingleProduct);
router.put('/single_product', updateSingleProduct)

module.exports= router;