//���Ƕ�ѧԺ���ϵ���ɾ��Ĳ���controller


//����ѧԺʵ��ģ��
require('../models/collegeData_model');

var mongoose = require("mongoose");
	//����ѧԺmodel
var	college = mongoose.model("College");
	
//����ѧԺ����
exports.AddCollege = function(req,res){
	//����ѧԺʵ��
	console.log('�����½�ѧԺ����controller');
	var College = new college();
	College.set('id',req.body.id);
	College.set('name',req.body.name);
	College.set('dean',req.body.dean);
	College.set('pro_quantity',req.body.pro_quantity);
	College.set('tea_quantity',req.body.tea_quantity);
	College.set('introduce',req.body.introduce);
	College.set('position',req.body.position);
	College.save(function(err){
		if(err){
			console.log(err);
			console.log("�½�ѧԺ��Ϣʧ�ܣ�");
			
		}else{
			console.log("�½�ѧԺ���ϳɹ�!");
			res.redirect('/college');
		}
	});
};


//��ȡѧԺ�б�
exports.getCollegeList = function(req,res){
	college.find()
		.exec(function( err , colleges ){
			if(err){
				console.log("��ȡѧԺ�б�ʧ��");
				res.json(error);
			}else{
				console.log("��ȡѧԺ�б�ɹ�");
				res.json(colleges);
				}
		});
};



//��ȡѧԺ��ϸ����
exports.getCollegeView = function(req , res ){
	college.findOne({name : req.query.name})
	.exec(function( err , collegeByName){
		console.log(req.query.name);
		if(err){
			console.log('ѧԺ��ϸ����û���ҵ���');
			res.json(err);
			
		}else{
			console.log('ѧԺ��ϸ�����ҵ���');
			res.json(collegeByName);
			
		}
	});
};



//ɾ��ѧԺ���� 
exports.delCollegeByName = function( req , res ){
    college.findOne({ name : req.query.name })
        .exec(function( err , college ){
            console.log("ɾ��ѧԺ�����ղ���"+req.query.name);
            college.remove(function(err,data){
                if(err){
                    res.json("ɾ��ʧ��");
                    console.log("ɾ��ѧԺ��ɾ��ʧ��");
                }else{
                    res.json("ɾ���ɹ�");
                    console.log("ɾ��ѧԺ��ɾ���ɹ�");
                }
            });
        });

};




















