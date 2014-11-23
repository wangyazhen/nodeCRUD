var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var User = new Schema({
	username: {
		type: String
	},
	passwd: {
		type: String
	},	
	age: {
		type: Number
	}
});

module.exports = mongoose.model('User', User);
