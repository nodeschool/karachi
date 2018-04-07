var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
/* GET users listing. */
router.get('/', function (req, res, next) {
  
  User.find()
  .then((savedUsers) => {
    res.send(savedUsers);
  })
  .catch((err) => {
    console.log(err);
    res.status(400).send(err);

  })
});

router.post('/', function (req, res, next) {
  console.log('DAta------', req.body)
  var user = new User(req.body);
  user.save()
    .then((savedUser) => {
      res.send(savedUser);

    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    })
});

module.exports = router;
