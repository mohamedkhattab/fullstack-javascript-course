var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express 2' });
});

router.post('/api', function(req, res, next) {
  console.log(req.body.username);
  res.json({post: true});
});

module.exports = router;
