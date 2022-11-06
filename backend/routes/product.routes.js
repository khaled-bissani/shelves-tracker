const {Router} = require('express');
const {addProduct, getProduct} = require('../controllers/product.controller');
const router = Router();

router.post('/add',addProduct);
router.get('/all', getProduct)

module.exports= router;