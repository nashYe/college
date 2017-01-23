var crypto = require('crypto');
var mongoose = require('mongoose');
var	User = mongoose.model('User');

//将密码转换成加密类型
function hashPW(pwd){
	return crypto.createHash('sha256').update(pwd).digest('base64').toString();
}


//用户注册
exports.signup = function(req, res){
	var user = new User({username:req.body.username});
	user.set('hashed_passsword',hashPW(req.body.password));
	user.set('email',req.body.email);
	console.log("11111");
	user.save(function(err){
		if(err){
			console.log(err);
			//res.session.error = err;
			res.redirect('/signup');
		}else{
			//req.session.user = user.id;
			req.session.username = user.username;
			req.session.msg = '欢迎您' + user.name;
			res.redirect('/announcement');
		}
	});
};


//用户登录

exports.login = function(req,res,next){
	User.findOne({username:req.body.username})
	.exec(function(err,user){
			if(!user){
				console.log('you are not signup');
			}else if(user.hashed_passsword === hashPW(req.body.password.toString())){
				req.session.regenerate(function(){
					//req.session.user = user.id;
					req.session.username = user.username;
					req.session.msg = '欢迎你' + user.username;
					res.redirect('/announcement');
				});
			}else{
				console.log('password error');
			}
			if(err){
				req.session.regenerate(function(){
					req.session.msg = err;
					console.log('error');
					res.redirect('/login');
				});
			}
	});
};


//获取用户信息
exports.getUserProfile = function(req,res,next){
	User.findOne({username: req.session.username})
	.exec(function(err,user){
		if(!user){
			res.json(404);
		}else{
			res.json(user);
		}
	});
};

//更新用户资料
exports.updateUser = function(req, res, next){
	User.findOne({username:req.session.username})
		.exec(function(err,user){
			user.set('email',req.body.email);
			user.set('name',req.body.name);
			user.set('position',req.body.position);
			user.set('phone',req.body.phone);
			user.save(function(err){
				if(err){
					res.session.error = err;
				}else{
					req.session.msg = '用户已更新';
				}
				res.redirect('/announcement');
			});
		});
};









