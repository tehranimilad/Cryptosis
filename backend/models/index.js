const mongoose = require("mongoose")
require("dotenv").config()
const connectionString = process.env.MONGODBURI

mongoose.set('strictQuery', false)

mongoose.connect(
    connectionString,
    {useNewUrlParser: true, useUnifiedTopology: true}
);

mongoose.connection.on('connected', () => {
    console.log('mongoose has connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose has disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});

module.exports.User = require('./user')
module.exports.Comments = require('./comment')
