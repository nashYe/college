//这是学院实体类  model  

var mongoose = require("mongoose"),
	Schema = mongoose.Schema;
var CollegeData = new Schema({
		id:{type:Number,unique:true},
		name:String,
		introduce:String,
		dean:String,//院长
		pro_quantity:Number,//现有专业
		tea_quantity:Number,//现有教职工
		position:String
	});
	mongoose.model('College',CollegeData);