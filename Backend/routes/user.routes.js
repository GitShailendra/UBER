const express = require('express');

const router = express.Router();
const {body} = require('express-validator');
const userController  = require('../controllers/user.controller')
router.post('/register',
    [
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').isLength({min: 5}).withMessage('Password must be at least 5 chars long'),
        body('fullname.firstName').isLength({min:3}).withMessage('Firstname  must be at least of 3 characters'),
           

    ],
    userController.registerUser
)
module.exports = router;