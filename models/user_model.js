var mongoose = require("mongoose"),
 Schema = mongoose.Schema;
 var UserSchema = new Schema({
	 username:{type:String,unique:true},
	 name:String,
	 email:String,
	 position:String,
	 phone:Number,
	 hashed_passsword:String
 });
 mongoose.model('User',UserSchema);