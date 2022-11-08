const {Router} = require('express');
const {viewProfile , editProfile, profilePicture, changePassword} = require('../controllers/profile.controller')
const router = Router();

router.post('/view',viewProfile);
router.put('/edit',editProfile);
router.post('/picture',profilePicture);
router.put('/password',changePassword);


module.exports= router;