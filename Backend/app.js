const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const conncetDb = require('./db/db');
const userRoute = require('./routes/user.routes')
const captainRoute= require('./routes/captain.routes')
const cookieParser = require('cookie-parser')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
conncetDb();
app.use('/users',userRoute)
app.use('/captain',captainRoute)
module.exports = app;