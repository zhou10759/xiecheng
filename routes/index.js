const express=require("express");
const router=express.Router();
const pool=require("../pool");

//index/
router.get("/",(req,res)=>{
  var obj ={};
 (async function(){
	await new Promise(function(open){
			//轮播
		  var sql=`SELECT * FROM xc_index_carousel`;
		  pool.query(sql,[],(err,result)=>{
			if(err) throw err;
			obj.carousel=result;
			open()
		  });
		})
    await new Promise(function(open){
		  //旅游模板
		  var sql=`SELECT * FROM xc_index_product`;
		  pool.query(sql,[],(err,result)=>{
			if(err) throw err;
			 obj.product=result;
			 open()
		  })
       })

    res.send(obj)
	})()
})


module.exports=router;