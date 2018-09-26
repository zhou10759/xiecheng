//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const index=require("./routes/index");
const user=require("./routes/user");
/*const details=require("./routes/details");*/
/*const products =require("./routes/products");*/

var app = express();
var server = app.listen(4000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('static'));
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/user",user);
               //.get("/")
/*app.use("/details",details);*/
