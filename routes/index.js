var mongoose = require('mongoose');
var Tweet = mongoose.model('Tweet');

/*
 * GET home page.
 */

exports.tweets = function(req, res){
	Tweet
		.find()
		.sort({created: 'desc'})
		.exec(function(err, tweets){
			if (err) throw err;
			res.render('_twits', {tweets: tweets});
		});
}

exports.home = function(req, res){
	Tweet
		.find()
		.sort({created: 'desc'})
		.exec(function(err, tweets){
			if (err) throw err;
			res.render('home', {title: 'Crappy Twitter', tweets: tweets, user:req.session.user});
		});
}