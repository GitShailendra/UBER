const express = require('express');
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller')
const router= express.Router();
const authMiddleware = require('../middlewares/auth.middleware')
router.post('/register',[
    body('fullname.firstName').isLength({min:3}).withMessage('Name must be at least'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 char long'),
    body('vehicle.color').isLength({min:3}).withMessage('Vehicle color should be at least 3 char long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Vehicle plate should be at least 3 char long'),
    body('vehicle.capacity').isLength({min:1}).withMessage('Vehicle capacity should be at least 1 '),
    body('vehicle.vehicleType').isIn(['Car','Bike','Auto']).withMessage('Invalid type'),
    

],captainController.registerCaptain);
router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least')
],captainController.login);
router.get('/get-profile',authMiddleware.authCaptain,captainController.getProfile);
router.get('/logout',authMiddleware.authCaptain,captainController.logout)
module.exports = router;