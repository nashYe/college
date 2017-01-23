
//½ÇÉ«model 
require('../models/permission_model.js');
var mongoose = require("mongoose"),
 Schema = mongoose.Schema;
 var RoleSchema = new Schema({
	 name:{type:String,unique:true},
	 permission:[PermissionSchema],
	 introduce:String
 });
 mongoose.model('Role',RoleSchema);