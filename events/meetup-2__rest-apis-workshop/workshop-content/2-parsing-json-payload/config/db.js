var mongoose = require("mongoose");

var mongoUrl = 'mongodb://localhost/test';

module.exports = function () {
    mongoose.connect(mongoUrl);
    mongoose.connection
        .once('open', function () {
            console.log('MongoDB running');
        })
        .on('error', function (err) {
            console.log(err);
        });
};
