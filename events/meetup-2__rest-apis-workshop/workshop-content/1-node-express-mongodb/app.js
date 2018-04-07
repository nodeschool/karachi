
// require installed packages
const dbConnection=require('./config/dbConnection');
const config = require('./config/environment');
const express = require('express');

// connect with the database
dbConnection();

// initiate express
const app = express();

// c
require('./app/app')(app);

// start a server on port 3000
app.listen(config.port,function(){
    console.log('server up and running at port '+config.port);
})