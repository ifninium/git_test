var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var users = require('./routes/users');
app.use('/users', users);

module.exports = router;
