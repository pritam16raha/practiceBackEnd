var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'ExpressJS Tutorial', 
    message:"Express JS for All" });
});

module.exports = router;
