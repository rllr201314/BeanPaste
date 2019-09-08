var express = require("express");
var app = express();
//3引用加密模块
var crypto=require("crypto");
//引用mongoose模块
var mongoose = require("mongoose");
//应用post的解析模块
var bodyParser = require("body-parser");

//使用body-parser下的解析post功能
var uE=bodyParser.urlencoded({extended:false});
//引入session模块
// var session = require("express-session");
//引用path模块
// var path = require("path");

//引用下载好的token模块
var jwt = require("jsonwebtoken");

//定义集合
var dbcollection = mongoose.model("register",{
    uname:String,
    pwd:String,
    tex:String
})

//解决跨域cors
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');  
    next();
})

app.get("/register",function(req,res){
    //1得到前台数据
    var uname = req.query.uname;
    var pwd = req.query.pwd;
    var tex = req.query.tex;
    // console.log(uname+"----"+pwd+"-----"+tex);
    //开始加密
    var md5Pwd= crypto.createHash('md5').update(pwd).digest('hex');
    
    //开始连接数据库
    mongoose.connect("mongodb://localhost:27017/pouban",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败");
        }else{
            console.log("数据库连接成功");
            //设置存入的数据
            var userdemo = new dbcollection({
                uname,
                tex,
                pwd:md5Pwd 
            })

            //开始存
            userdemo.save().then((ok)=>{
                res.send({mes:"注册成功",status:200,linkid:1});
            },(err)=>{
                res.send({mes:"注册失败",status:500,linkid:0});
            })

        }
    })

});

//得到登录页面的数据进行登录
app.post("/signin",uE,function(req,res){
    var tex=req.body.tex;
    var pwd = req.body.pwd;
    //开始加密
    var md5Pwd= crypto.createHash('md5').update(pwd).digest('hex');

    //数据库查询
    mongoose.connect("mongodb://localhost:27017/pouban",{useNewUrlParser:true},function(err){
        if(err){
            console.log("err");
        }else{
            console.log("ok");
            dbcollection.find({tex:tex,pwd:md5Pwd}).then((ok)=>{
                // 在查询的时候成功可能有两种结果 第一种查出来值了 第二种没有查出来但是反悔了一个空数组
                // console.log(ok.length);
                if(ok.length>0){

                //     //session步骤
                //     req.session.loginok=true;
                //     req.session.uname=uname;

                //********token */  创建token，用来保存用户的登录信息
                // jwt.sign(要保存的数据，私钥（一堆乱码）)
                    var obj={
                        loginok:true,
                        tex:tex //用户名
                    }
                    var mi="sadsafsdafrewq";
                    var token=jwt.sign(obj,mi);


                    res.send({mes:"登陆成功",status:200,linkid:2,token})
                }else if(ok.length==0){
                    res.send({mes:"登陆失败",status:200,linkid:3})
                }
            },(err)=>{
                res.send({mes:"连接超时请稍后再试",status:500,linkid:4})
            })
        }
    });
})





app.listen(8000);