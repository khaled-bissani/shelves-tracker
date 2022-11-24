const {Router} = require('express');
const {getClient, totalClient} = require('../controllers/client.controller');
const router = Router();

router.post('/all',getClient);
router.post('/total', totalClient)

module.exports= router;