var mongoose = require('mongoose');

var dbConfig = {
	mongodb: "mongodb://wang:pwd123@localhost:27017/testdb",
	database: "testdb"
};

console.log('数据库连接 start : %o', dbConfig.mongodb);
/*var mmdb = mongoose.createConnection(dbConfig.mongodb);
db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
  //一次打开记录
  console.error.bind(console,'成功打开:')
});*/
mongoose.connect(dbConfig.mongodb, function(error, result) {
	if (error) {		
		console.error('数据库连接失败： %o, %o', dbConfig.mongodb, error);
	} else {
		console.info('数据库连接成功: %o', result);
	}
});
