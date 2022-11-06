const {Router} = require('express');
const { addCategory } = require('../controllers/category.controller')
const router = Router();

router.post('/add',addCategory);

module.exports= router;