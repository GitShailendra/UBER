const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blacklistToken.model')
const captainModel  = require('../models/captain.model')
module.exports.authUser = async (req,res,next)=>{
    const token = req.cookies.token||req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({message:"Unauthorized"});
    const isBlackListed = await BlacklistToken.findOne({token:token});
    console.log(isBlackListed)
    if(isBlackListed) return res.status(401).json({message:"Unauthorized"});
    try {
        const decoded =  jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (error) {
        res.status(401).json({
            message:"Unauthorized"

        })
    }
};

module.exports.authCaptain = async (req,res,next)=>{
    const token = req.cookies.token||req.headers.authorization?.split(' ')[1];
    console.log(token)
    if(!token) return res.status(401).json({message:"Unauthorized"});
    const isBlackListed = await BlacklistToken.findOne({token:token});
    if(isBlackListed) return res.status(401).json({message:"Unauthorized"});
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded)
        const captain = await captainModel.findById(decoded._id);
        console.log(captain)
        req.captain = captain;
        return next();
    } catch (error) {
        console.log(error);
        
        res.status(401).json({
            message:"Unauthorized"

        })
    }
}