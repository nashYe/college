//����ѧԺʵ����  model  

var mongoose = require("mongoose"),
	Schema = mongoose.Schema;
var CollegeData = new Schema({
		id:{type:Number,unique:true},
		name:String,
		introduce:String,
		dean:String,//Ժ��
		pro_quantity:Number,//����רҵ
		tea_quantity:Number,//���н�ְ��
		position:String
	});
	mongoose.model('College',CollegeData);