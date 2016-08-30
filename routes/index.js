var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var ip = req.ip;
  var browser = req.useragent.browser + " " + req.useragent.version;
  var os = req.useragent.os;
  var lang = req.headers['accept-language'].split(',')[0];
  res.json({
    ip: ip,
    browser: browser,
    operating_system: os,
    language: lang
  });
});

module.exports = router;
