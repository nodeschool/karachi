// require installed packages
import express from 'express';

import middlewareConfig from './config/middleware';
import dbConnect from './config/db';
import { PostRoutes } from './modules';
const port = '3000';

// db connection
dbConnect();

// initiate express
const app = express();

// middleware
middlewareConfig(app);

app.use('/api', [PostRoutes]);

// render index page
app.get('/', function(req, res, next) {
  res.send('Express REST API Application is running!');
});

// start a server on port 3000
app.listen(port, function() {
  console.log('server up and running at port ' + port);
});
