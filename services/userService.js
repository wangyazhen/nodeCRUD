var userDao = require('./../dao/userDao');
// var mongoose = require('mongoose');
// var dbconnect = require('../db/dbconnect');


function dao() { }
dao.prototype.save = function(obj, callback){
	console.log('dao save obj: %o', obj);
	new userDao(obj).save(function(err, data) {
		callback(err, data);
	});
};

dao.prototype.findAll = function(req, callback) {
	userDao.find(function(err, data) {
		callback(err, data);
	});
};

module.exports = new dao();