const {Router} = require('express');
const {dailyExpiry} = require('../controllers/supplier.controller');
const router = Router();

router.post('/all',dailyExpiry);

module.exports= router;