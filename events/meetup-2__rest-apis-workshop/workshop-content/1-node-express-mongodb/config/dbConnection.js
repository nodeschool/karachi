var config = require('./environment');
var mongoose = require('mongoose');
module.exports = function () {
    mongoose.connect(config.mongoUrl);

    // get the connection's instance
    const dbConnection = mongoose.connection;


    // bind events on connection's instance
    dbConnection.on('error', function () {
        console.log('Could not connect to mongodb');
    });
    dbConnection.once('open', function () {
        console.log('connected to mongodb');
    });

    process.on( "SIGINT", shutDown );
    process.on( "SIGTERM", shutDown );
    process.on( "SIGHUP", shutDown );


}

function shutDown() {
    mongoose.connection.close(function () {
            console.log('Connection has been successfully closed, see you again soon!');
    });
}