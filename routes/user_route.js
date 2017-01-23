var express = require("express");
var router = express.Router();
var users = require('../controllers/users_controllers');


/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session.username){
		res.setHeader('content-type','text/html;charset=utf-8');
		res.redirect('/user');
		console.log('index');
	}else{
		res.render('login');
	}
});
router.get('/signup', function(req, res, next) {
	console.log('signup');
	res.setHeader('content-type', 'text/html;charset=utf-8');
	res.render('signup', { msg: 'Express' });
});
router.get('/login', function(req, res, next) {
		console.log('login');
		res.setHeader('content-type', 'text/html;charset=utf-8');
		res.render('login');
});
router.get('/user', function(req, res, next) {
	if(req.session.username) {
		console.log('user');
		res.setHeader('content-type', 'text/html;charset=utf-8');
		res.render('user');
	}else{
		res.redirect('/login');
	}
});

router.get('/user/profile',users.getUserProfile);

router.post('/updateUser',users.updateUser);

router.post('/signupTest',users.signup);

router.post('/login',users.login);

module.exports = router;