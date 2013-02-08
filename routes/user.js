var mongoose = require('mongoose');
var User = mongoose.model('User');
var Tweet = mongoose.model('Tweet');

/*
 * GET login info.
 */
exports.login = function(req, res){
	res.render('login', {title: 'Crappy Twitter'});
};

/*
 * POST login info.
 */
exports.checkName = function(req, res){
	User.findOne({name: req.body.name}).exec(function(err, user){
		if (err) throw err;
		req.session.user = req.body.name;
		if (user){
			res.redirect('/');
		} else {
			new User({
				name: req.body.name
			}).save(function(err){
				if (err) throw err;
				res.redirect('/');
			})
		}
	});
}

/*
 * POST a new tweet.
 */
exports.tweet = function(req, res){
	new Tweet({
		poster: req.session.user,
		msg: req.body.msg
	}).save(function (err){
		if (err) throw err;
	});
}