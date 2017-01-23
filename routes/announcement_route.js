/**
 * Created by mather on 2016/9/21.
 */
//公告的路由控制
var express = require("express");
var router = express.Router();
var announcements = require('../controllers/announcement__controller');

//进入公告主页
router.get("/",function( req , res  ){
    console.log("进入公告主页路由！");
    res.setHeader('content-type','text/html;charset=utf-8');
    res.render('announcement/announcement');
});

//查看公告详细内容
router.get('/view',function( req , res){
   console.log('进入查看公告详细内容页');
    res.render('announcement/announcement_view',{title:req.query.title});
});

//新增公告
router.get("/add",function( req , res  ){
    console.log("进入新建公告路由！");
    res.setHeader('content-type','text/html;charset=utf-8');
    res.render('announcement/announcement_add');
});
//获取公告列表
router.get("/list",announcements.getAnnouncementList);

//获取详细公告
router.get('/announcementView',announcements.getAnnouncementView);

//删除公告
router.get('/Del',announcements.DelAnnouncement);

//添加公告
router.post("/add",announcements.add);

module.exports = router;