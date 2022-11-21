const {Router} = require('express');
const {expoToken, saveNotification} = require('../controllers/notification.controller');
const router = Router();

router.post('/token' , expoToken)
router.post('/save' , saveNotification)

module.exports= router;