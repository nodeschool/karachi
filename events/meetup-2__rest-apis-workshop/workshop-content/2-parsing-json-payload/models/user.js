var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: String
}, { timestamps: true });


module.exports = mongoose.model('User', UserSchema);