//引入奖助贷model
require("../models/GrantLoan_model");
var mongoose = require("mongoose"),
	grantLoan = mongoose.model("GrantLoans");

//增加奖助贷种类
exports.addGrantLoan = function(req,res){
	var loan = new grantLoan();
	var createTime = new Date().toLocaleString();
	loan.set('name',req.body.name);
	loan.set('introduce',req.body.introduce);
	loan.set('conditions',req.body.conditions);
	loan.set('sum',req.body.sum);
	loan.set('quantity',req.body.quantity);
	loan.set('addition',req.body.addition);
	loan.set('createTime',createTime);
	loan.save(function(err){
		if(err){
			console.log('新建奖助贷种类失败'+err);
			res.json('failed');
		}else{
			console.log('新建奖助贷种类成功');
			res.redirect('/grantLoan');
		}	
	});
};

//获取奖助贷列表
exports.getGrantLoanList = function(req,res){
	grantLoan.find()
	.exec(function(err,GrantLoans){
		if(err){
				console.log('奖助贷列表获取错误！');
                res.json(error);    
            }else{
                console.log('奖助贷列表获取成功！');
                res.json(GrantLoans);
            }
	});
};

//获取奖助贷详细信息
exports.getGrantLoanView = function(req,res){
	grantLoan.findOne({name:req.query.name})
		.exec(function(err,GrantLoan1){
			console.log('详细奖助贷具体信息'+req.query.name);
			if(err){
				console.log('详细奖助贷信息获取失败');
				res.json(err);
			}else{
				console.log('详细奖助贷信息获取成功'+GrantLoan1);
				res.json(GrantLoan1);
			}
		});
};

//删除奖助贷信息
exports.delGrantLoan = function(req,res){
	GrantLoan.findOne({name:req.query.name})
	.exec(function(err,grantLoan2){
		console.log('删除奖助贷信息'+req.query.name);
		grantLoan2.remove(function(err,data){
			if(err){
				console.log('删除奖助贷信息失败'+err);
				res.json("failed"+err);
			}else{
				console.log('删除奖助贷信息成功'+data);
				res.json("success"+data);
			}
		});
	});
};



















































