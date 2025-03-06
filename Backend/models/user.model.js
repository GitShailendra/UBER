const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
    fullname:{
        firstName:{
            type: String,
            required: true,
            minlength:3
        },
        lastName:{
            type: String,    
            minlength: 3,
        }
    },
    email:{
        type: String,
        required: true,
        unique:true,
        minlength:[5,"Email must be 5 letters"]
    },
    password:{
        type: String,
        required: true,
        select:false
    },
    sockeId:{
        type: String,
    }
})

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);

}


userSchema.statics.hashPasswords = async function (password) {
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model('User',userSchema);

module.exports = userModel