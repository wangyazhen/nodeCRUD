var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'nodejs  我是传奇' });
  //res.send('Hello world , I am  wangyazhen');
});

router.get('/user', function(req, res) {
	res.render('index', {title: 'URL 应该是获取所有user 用户'});
});

module.exports = router;
