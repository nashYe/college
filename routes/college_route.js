/*
 *这是学院操作的route
 */


//学院的路由跳转
var express = require('express');
var router = express.Router();
var colleges = require('../controllers/college_controller');

//进入学院介绍首页跳转
router.get('/',function( req,res ){
	console.log('进入学院介绍首页跳转');
	res.setHeader('content-type','text/html;charset=utf-8');
	res.render('college/college');
});

//查看学院详细资料跳转
router.get('/view',function( req , res ){
	console.log('进入查看学院详细资料跳转');
	res.setHeader('content-type','text/html;charset=utf-8');
	res.render('college/college_view',{name:req.query.name});
});

//新增学院信息页面跳转
router.get('/add',function( req, res ){
	console.log("进入新增学院信息页面跳转");
	res.setHeader('content-type','text/html;charset=utf-8');
	res.render('college/college_add');
});



//获取学院列表
router.get('/list',colleges.getCollegeList);

//删除学院资料
router.get('/del',colleges.delCollegeByName);

//获取学院详细资料
router.get('/collegeView',colleges.getCollegeView);

//新增学院资料
router.post('/add',colleges.AddCollege);


//将学院router导出模块
module.exports = router;















