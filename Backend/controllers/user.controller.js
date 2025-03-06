const { validationResult } = require('express-validator');
const userModel = require('../models/user.model');
const userService  = require('../services/user.services')

module.exports.registerUser = async (req,res,next)=>{
    const error = validationResult(req);
    console.log('validation result errors',error)
    // error.isEmpty() returns true if there are no errors 
    if(!error.isEmpty()){
        return res.status(400).json({message:'Invalid request',errors:error.array()});
    };
    const {fullname,email,password}  = req.body;
    const hashedPassword = await userModel.hashPasswords(password)
    const user = await userService.createUser({
        firstName:fullname.firstName,
        lastName:fullname.lastName,
        email,
        password:hashedPassword
    });
    const token = user.generateAuthToken();
    res.status(201).json({token,user})
}