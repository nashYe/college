
//È¨ÏÞModel made by mather

var mongoose = require("mongoose"),
	Schema = mongoose.Schema;
 var PermissionSchema = new Schema({
	 name:{type:String,unique:true},
	 introduce:String
 });
 mongoose.model('Permission',PermissionSchema);