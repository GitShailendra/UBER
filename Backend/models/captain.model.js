const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const captainSchema = new mongoose.Schema({
    fullname:{
        firstName:{
            type:String,
            required:true,
            minlength:[3,'Name should be at least 3 char']
        },
        lastName:{
            type:String,
            minlength:[3,'Name should be at least 3 char']
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        minlength:[6,'Password should be at least 8 char'],
        

    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be at least 3 chars long']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate must be at least 3 chars long']
        },
        capacity:{
            type:Number,
            required:true,
            minlength:[1,'Capcity should be at least of 1']

        },
        vehicleType:{
            type:String,
            required:true,
            enum:['Car','Bike','Auto'],
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
})
captainSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}
captainSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);

}
captainSchema.statics.hashPasswords = async function (password) {
    return await bcrypt.hash(password,10)
}
const captainModel = mongoose.model('captain',captainSchema)

module.exports = captainModel