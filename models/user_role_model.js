
//�û��ͽ�ɫ��ϵmodel

var mongoose = require("mongoose"),
 Schema = mongoose.Schema;
 var UserRoleSchema = new Schema({
	user:String,
	role:String
 });
 mongoose.model('RolePremission',RolePreSchema);