var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function(req, res, next){
	if (req.session.loggedIn){
		res.redirect('/admin/importantPage');
	}else{
		res.render('admin-login');
	}
});


//YOU NEEEEEED BODY PARSER TO BE ABLE TO ACCESS REQ.BODY
router.post('/', function(req,res,next){
	
	if (req.body.name === 'Kat' && req.body.password === 'boomer'){
		//cookies = values about YOU that browser stores for a given domain
		//DEV tools --> resourses --> cookeis
		//Log myself in
		req.session.loggedIn = true;
		res.redirect('/admin/importantPage');
	}else{
		res.redirect('/admin');
	}
});

router.get('/importantPage', function (req,res,next) {
	if ( req.session.loggedIn ){
		next();
	}else{
		res.redirect('/admin');
	}
}, function(req, res, next){
	res.send('TOP SECRET');
});