var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
});

mongoose.model('User', userSchema);
//test to try: will this app work w/o this line if it's elsewhere???

var tweetSchema = new Schema({
	poster: String,
	msg: String,
	created: {type: Date, default: Date.now}
});

mongoose.model('Tweet', tweetSchema)