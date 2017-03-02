'use strict';

var express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('intro');
});

module.exports = router;
