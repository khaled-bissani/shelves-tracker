const {Router} = require('express');
const {viewProfile , editProfile, profilePicture} = require('../controllers/profile.controller')
const router = Router();

router.post('/view',viewProfile);
router.post('/edit',editProfile);
router.post('/picture',profilePicture);

module.exports= router;