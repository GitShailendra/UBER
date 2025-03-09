const express = require('express');

const router = express.Router();
const {body} = require('express-validator');
const userController  = require('../controllers/user.controller');
const {authUser} = require('../middlewares/auth.middleware')
router.post('/register',
    [
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').isLength({min: 5}).withMessage('Password must be at least 5 chars long'),
        body('fullname.firstName').isLength({min:3}).withMessage('Firstname  must be at least of 3 characters'),
           

    ],
    userController.registerUser
);
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 chars long')
], userController.loginUser);
router.get('/get-profile',authUser,userController.getProfile);
router.get('/logout',authUser,userController.logout)
module.exports = router;