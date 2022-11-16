const {Router} = require('express');
const { addCategory, getCategory } = require('../controllers/category.controller')
const router = Router();

router.post('/add',addCategory);
router.post('/all', getCategory)

module.exports= router;