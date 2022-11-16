const {Router} = require('express');
const {expoToken} = require('../controllers/notification.controller');
const router = Router();

router.put('/token' , expoToken)

module.exports= router;