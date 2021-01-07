var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('../views/admin/authentication/Login', { title: 'Express' });
});

module.exports = router;
