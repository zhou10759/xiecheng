const express = require('express');
const pool = require('../pool.js');//导入连接数据库的模块
//使用路由器
var router = express.Router();

router.post('/',(req,res)=>{
  var obj=req.body;
  console.log(obj);
  //对客户端所传递的数据进行验证
  var $uname = obj.uname;
  if(!$uname){ // $uname == ''
    res.send({code: 401, msg: 'uname required'});
	//禁止程序继续执行
	return;
  }
  //对密码验证，邮箱，手机进行验证
  var $upwd = obj.upwd;
  if(!$upwd){
    res.send({code: 402, msg: 'upwd required'});
	return;
  }
  var $email = obj.email
  if(!$email) {
    res.send({code: 403, msg: 'email required'});
	return;
  }
  var $phone = obj.phone;
  if(!$phone){
    res.send({code: 404, msg: 'phone required'});
	return;
  }
  //把数据插入到数据库中
  var sql = 'INSERT INTO xc_user VALUES(NULL,?,?,?,?,NULL,NULL,NULL)';
  pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
    if(err) throw err;
	//提示注册成功
	res.send({code: 200, msg: 'register suc'});
  });
});

//导出路由器
module.exports = router;