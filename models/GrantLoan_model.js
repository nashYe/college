/*
*½±Öú´ûÊµÌåÀà  made by mather
*/

var mongoose = require("mongoose"),
	Schema = mongoose.Schema;
	
var grantLoan = new Schema({
	name:String,
	introduce:String,
	conditions:String,
	sum:Number,
	quantity:Number,
	addition:String,
	createTime:String
},{collection:"GranLoans"});

mongoose.model("GrantLoans",grantLoan);