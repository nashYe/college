//这是对学院资料的增删查改操作controller


//引入学院实体模块
require('../models/collegeData_model');

var mongoose = require("mongoose");
	//创建学院model
var	college = mongoose.model("College");
	
//新增学院操作
exports.AddCollege = function(req,res){
	//创建学院实体
	console.log('进入新建学院对象controller');
	var College = new college();
	College.set('id',req.body.id);
	College.set('name',req.body.name);
	College.set('dean',req.body.dean);
	College.set('pro_quantity',req.body.pro_quantity);
	College.set('tea_quantity',req.body.tea_quantity);
	College.set('introduce',req.body.introduce);
	College.set('position',req.body.position);
	College.save(function(err){
		if(err){
			console.log(err);
			console.log("新建学院信息失败！");
			
		}else{
			console.log("新建学院资料成功!");
			res.redirect('/college');
		}
	});
};


//获取学院列表
exports.getCollegeList = function(req,res){
	college.find()
		.exec(function( err , colleges ){
			if(err){
				console.log("获取学院列表失败");
				res.json(error);
			}else{
				console.log("获取学院列表成功");
				res.json(colleges);
				}
		});
};



//获取学院详细资料
exports.getCollegeView = function(req , res ){
	college.findOne({name : req.query.name})
	.exec(function( err , collegeByName){
		console.log(req.query.name);
		if(err){
			console.log('学院详细资料没有找到！');
			res.json(err);
			
		}else{
			console.log('学院详细资料找到！');
			res.json(collegeByName);
			
		}
	});
};



//删除学院资料 
exports.delCollegeByName = function( req , res ){
    college.findOne({ name : req.query.name })
        .exec(function( err , college ){
            console.log("删除学院：接收参数"+req.query.name);
            college.remove(function(err,data){
                if(err){
                    res.json("删除失败");
                    console.log("删除学院：删除失败");
                }else{
                    res.json("删除成功");
                    console.log("删除学院：删除成功");
                }
            });
        });

};




















