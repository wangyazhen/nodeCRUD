var express = require('express');
var router = express.Router();

var userService = require('../services/userService');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/user', function(req, res) {
	console.log('用户请求数据 post user data', req.body);
	userService.save(req.body, function(e, data) {
		if (!e) {
			console.log(data);
			res.send(data);			
		} else {
			console.log('save user error: ', e);
		}
	});
	
});

module.exports = router;
