const express = require('express');
const pool = require('../pool.js');//导入连接数据库的模块
//使用路由器
var router = express.Router();
//1.用户注册
router.post('/register',(req,res)=>{
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
  res.writeHead(200,{"Content-Type":"application/json;charset=utf-8",
                      "Access-Control-Allow-Origin":"*"})
    console.log(result);
    if(result.length>0){
      res.write(JSON.stringify({ok:1}))
    }else{
      res.write(JSON.stringify({ok:0,msg:"密码错误"}))
    }
    res.end();
  });                   
 
  
});
//2。用户登录
router.post('/login',(req,res)=>{
  var obj = req.body;
  //验证用户名和密码是否为空
  var $uname = obj.uname;
  if(!$uname){
    res.send({code: 401, msg: 'uname required'});
	return;
  }
  var $upwd = obj.upwd;
  if(!$upwd){
    res.send({code: 402, msg: 'upwd required'});
	return;
  }
  //查询数据库中是否含有这条记录
  //同时满足用户名为$uname和密码$upwd
  var sql='SELECT * FROM xc_user WHERE uname=? AND upwd=?';
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
	//result 返回结果是数组
	//如果数组的长度大于0，说明找到满足条件的记录
	//否则数组的长度等于0，说明没有找到满足条件的记录
    if(result.length>0){
	  res.send({code: 200, msg: 'login suc'});
	}else{
	  res.send({code: 301, msg: 'uname or upwd error'});
	}
  });
});

//导出路由器
module.exports = router;