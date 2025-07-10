const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const userService = require("../services/user.services");
const BlacklistToken  = require('../models/blacklistToken.model')
module.exports.registerUser = async (req, res, next) => {
   const { fullname, email, password } = req.body;
   console.log(fullname)
   console.log(email)
   console.log(password)
  const error = validationResult(req);
  console.log("validation result errors", error);
  // error.isEmpty() returns true if there are no errors
  if (!error.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Invalid request", errors: error.array() });
  }
  // const { fullname, email, password } = req.body;
  const userExist = await userModel.findOne({email});
  if (userExist) {
    return res.status(400).json({ message: "User already exist" });
    }
    
  const hashedPassword = await userModel.hashPasswords(password);
  const user = await userService.createUser({
    firstName: fullname.firstName,
    lastName: fullname.lastName,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Invalid request", errors: error.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select('+password')
  if (!user) {
    return res.status(401).json({ message: "Inavlid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Inavlid email or password" });
  }
  const token = user.generateAuthToken();
  res.cookie('token',token)
  res.status(200).json({ token, user });
};

module.exports.getProfile = async (req,res)=>{
  res.status(200).json(req.user)
}

module.exports.logout= async  (req,res)=>{
  res.clearCookie('token')
  const token = req.cookies.token|| req.headers.authorization?.split(' ')[1];
  await BlacklistToken.create({token});
  res.status(200).json({message:"logged out successfully"});
}