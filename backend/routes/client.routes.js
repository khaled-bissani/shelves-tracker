const {Router} = require('express');
const {getClient} = require('../controllers/client.controller');
const router = Router();

router.get('/all',getClient);

module.exports= router;