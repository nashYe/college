/**
 * Created by mather on 2016/9/21.
 */
//公告model

var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var AnnouncementSchema =new Schema({
    title:String,
    byAuthor:String,
    content:String,
    startTime:Date,
    modifyTime:Date,
    append:String
});
mongoose.model('announcement',AnnouncementSchema);
