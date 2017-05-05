const express=require("express");
const router=express.Router();
const findUser=require("../dbs/find-user");

router.post("/login",function(req,res){
   var informationUser=req.body;
    findUser(informationUser,(result)=>{
        if(result.length === 0) {
            res.send({isTrue: "0"});
        }
        else if(informationUser.password !== result[0].password){
                res.send({isTrue:"-1"});
            }
        else{
                req.session.loginUser = result[0].userName;
                req.session.isLogin = true;
                var Cookie = {};
                req.headers.cookie && req.headers.cookie.split(';').forEach((cookie)=>{
                    var part = cookie.split('=');
                    Cookie[part[0].trim()] = (part[1]||'').trim();
                });
                if(Cookie.user !== req.session.loginUser){
                    res.cookie('user',req.session.loginUser,'path=/');
                }
                res.send({isTrue:"1"});
        }

    })
});

module.exports=router;

