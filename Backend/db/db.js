const mongoose = require('mongoose');

function conncetDb() {
    mongoose.connect(process.env.DB_CONNECTION, {
       
    }).then(() => {
        console.log('Connected to database');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = conncetDb;