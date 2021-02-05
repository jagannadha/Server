const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    name: String,
    courses: String,    
    state: String,
    city:String,
    country: String
});

module.exports = mongoose.model('user', userSchema, 'users');