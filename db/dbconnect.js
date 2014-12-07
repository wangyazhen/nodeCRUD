var mongoose = require('mongoose');

var dbConfig = {
	mongodb: "mongodb://wang:pwd123@localhost:27017/testdb",
	database: "testdb"
};

console.log('数据库连接 start : %o', dbConfig.mongodb);
mongoose.connect(dbConfig.mongodb, function(error, result) {
	if (error) {
		console.error('数据库连接失败： %o, %o', dbConfig.mongodb, error);
	} else {
		console.info('数据库连接成功: %o', result);
	}
});

module.exports.mongoose = mongoose;
// exports.mongoose = mongoose;