'use strict';

var express = require('express'),
    router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/intro', function(req, res) {
    res.render('intro');
});

router.get('/story', function(req, res) {
    res.render('story');
});

router.get('/mememaker', function(req, res) {
    res.render('mememaker');
});

module.exports = router;
