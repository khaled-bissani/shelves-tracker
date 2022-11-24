const {Router} = require('express');
const {viewProfile , editProfile, profilePicture, viewProfilePicture, changePassword} = require('../controllers/profile.controller')
const router = Router();

router.post('/view',viewProfile);
router.put('/edit',editProfile);
router.post('/picture',profilePicture);
router.post('/view_picture', viewProfilePicture)
router.put('/password',changePassword);


module.exports= router;