const {Router} = require('express');
const {viewProfile} = require('../controllers/profile.controller')
const router = Router();

router.post('/view',viewProfile);

module.exports= router;