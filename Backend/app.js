const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const conncetDb = require('./db/db');
const userRoute = require('./routes/user.routes')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
conncetDb();
app.use('/users',userRoute)

module.exports = app;