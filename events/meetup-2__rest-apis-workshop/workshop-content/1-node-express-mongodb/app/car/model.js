const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    model:String,
    name:String,
    color:String
});

module.exports = mongoose.model("Car",carSchema);