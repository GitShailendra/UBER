const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const BlacklistToken = require('../models/blacklistToken.model')
module.exports.registerCaptain = async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()});
    }
    const {fullname,email,password,vehicle} = req.body;
    console.log(vehicle)
    const existingUser = await captainModel.findOne({email});
    if(existingUser){
        return res.status(400).json({message:'Captain already exists'});
        }

    const hashedPassword = await captainModel.hashPasswords(password);
    const captain = await captainService.createCaptain({
        firstName:fullname.firstName,
        lastName:fullname.lastName,
        email,
        password:hashedPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    });
    const token = captain.generateAuthToken();
    res.status(201).json({
        message:'Captain created successfully',
        captain:captain,
        token
    })
};

module.exports.login = async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()});
    };
    const {email,password} = req.body;
    const captain = await captainModel.findOne({email});
    if(!captain){
        return res.status(400).json({message:'Invalid email or password'});
    };
    const isMatch =   await captain.comparePassword(password);
    if(!isMatch){
        return res.status(400).json({message:'Invalid email or password'});
        }
    const token = captain.generateAuthToken();
    res.cookie('token',token)
    res.status(200).json({
        message:'Captain logged in successfully',
        captain:captain,
        token
        });

};

module.exports.getProfile = async (req,res)=>{
    return res.status(201).json(req.captain);
};

module.exports.logout = async (req,res)=>{
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    res.clearCookie('token')
    await BlacklistToken.create({token});
    res.status(200).json({message:"logged out successfully"});

}