/**
 * Created by mather on 2016/9/21.
 */
//公告controller
require('../models/announcement_model');
var mongoose = require('mongoose');
var Announcement = mongoose.model('announcement');

exports.add = function( req , res ){
    var ann = new Announcement();
    var startTime = new Date().toLocaleString();
    ann.set('title',req.body.title);
    ann.set('byAuthor',req.body.byAuthor);
    ann.set('content',req.body.content);
    ann.set('startTime',startTime);
    ann.set('append',req.body.append);
    ann.save(function(err){
        if(err){
            console.log(err);
            console.log("新建公告保存失败");
        }else{
            console.log("新建公告保存成功");
            res.redirect('/announcement');
        }
    });
};

//获取公告列表
exports.getAnnouncementList = function( req , res){
    Announcement.find()
        .exec(function(err,announcements){
            if(err){
                res.json(error);
                console.log('公告列表获取错误！');
            }else{
                res.json(announcements);
                console.log('公告列表获取成功！');
            }
        });
};

//获取详细公告
exports.getAnnouncementView = function( req , res ){
  Announcement.findOne({title : req.query.title})
      .exec(function(err,announcement){
          console.log("测试");
          console.log(req.query.title);
          if(err){
              res.json(err);
              console.log("详细公告获取失败");
          }else{
              res.json(announcement);
              console.log('详细公告获取成功');
          }
      });
};

//删除公告
exports.DelAnnouncement = function( req , res ){
    Announcement.findOne({ title : req.query.title })
        .exec(function( err , announcement ){
            console.log("删除公告：接收参数"+req.query.title);
            announcement.remove(function(err,data){
                if(err){
                    res.json("删除失败");
                    console.log("删除公告：删除失败");
                }else{
                    res.json("删除成功");
                    console.log("删除公告：删除成功");
                }
            });
        });
};