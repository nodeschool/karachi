// get component's controller
const ctrl = require('./controller');

// get express module from the node_modules
const express = require('express');

// express.Router returns a express Router middleware
const router = express.Router();

// we add our own custom middleware in the above middleware
router.post('/add',ctrl.insert);

// we expose the router as a module
module.exports = router;