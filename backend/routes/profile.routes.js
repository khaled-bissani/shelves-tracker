const {Router} = require('express');
const {viewProfile , editProfile} = require('../controllers/profile.controller')
const router = Router();

router.post('/view',viewProfile);
router.post('/edit',editProfile);

module.exports= router;