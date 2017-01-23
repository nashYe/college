var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var mongoose = require("mongoose");
var MongoStore = require("connect-mongo")(session);

//获取用户Model
require("./models/user_model.js");

//连接数据库
var conn = mongoose.connect("mongodb://localhost/new");

//定义路由

//var routes = require('./routes/index');
//var users = require('./routes/users');
//引入用户路由
var routes = require('./routes/user_route');
//引入公告路由
var announcements = require('./routes/announcement_route');
//引入学院路由
var colleges = require("./routes/college_route");
//var routes = require('./routes/routes');
//引入奖助贷路由
var grantLoans = require('./routes/grantLoan_route');

//获取用户控制
var users = require('./controllers/users_controllers');

var app = express();

// view engine setup
app.engine('.html',require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


//connect-mongo存储sessions 

app.use(session({
	saveUninitialized: true,
    resave: false,
    secret: 'SECRET',
	cookie: {maxAge: 60*60*1000},
	store:new MongoStore({
		url: 'mongodb://localhost:27017/new',
		collection: 'sessions'
	})
}));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use(session());
//定义静态文件加载路径
app.use('/public',express.static(path.join(__dirname, 'public')));
//app.use('/view',express.static(path.join(__dirname, 'view')));

//路由跳转
app.use('/', routes);
app.use('/announcement',announcements);
app.use('/college',colleges);
app.use('/grantLoan',grantLoans);
app.use('/index',function(req,res){
	console.log('进入查看学院详细资料跳转');
	res.setHeader('content-type','text/html;charset=utf-8');
	res.render('index');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(8889);
module.exports = app;
