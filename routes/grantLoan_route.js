/*
*将助贷信息route
*/

//奖助贷信息的路由控制
var express = require("express");
var router = express.Router();
var grantLoans = require('../controllers/grantLoan_controller');

//进入奖助贷主页
router.get('/',function(req,res){
	console.log('进入奖助贷路由控制');
	res.setHeader('content-type','text/html;charset=utf-8');
    res.render('grantLoan/grantLoan');
});


//新增奖助贷种类页面
router.get('/add',function(req,res){
	console.log('进入新增奖助贷种类路由');
	res.setHeader('content-type','text/html;charset=utf-8');
    res.render('grantLoan/grantLoan_add');
});

//进入奖助贷详细内容页面
router.get('/view',function(req,res){
	console.log("进入奖助贷详细内容页面");
	res.setHeader('content-type','text/html;charset=utf-8');
    res.render('grantLoan/grantLoan_view',{name:req.query.name});
});

//获取奖助贷列表
router.get('/list',grantLoans.getGrantLoanList);

//获取奖助贷详细信息
router.get('/grantLoanView',grantLoans.getGrantLoanView);

//删除奖助贷信息
router.get('/del',grantLoans.delGrantLoan);

//新增奖助贷信息
router.post('/add',grantLoans.addGrantLoan);

module.exports = router;













