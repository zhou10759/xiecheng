const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.post("./login",(req,res)=>{
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    var sql = 

})




module.exports=router;