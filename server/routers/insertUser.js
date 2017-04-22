var insertUser=require("../dbs/insertUser");
var express=require("express");
var router=express.Router();

router.post('/addUser',function(req,res){
    var userInformation=req.body;
    console.log("user",userInformation);
    insertUser(userInformation, (result)=> {
        console.log(result);
        res.json({value: "注册成功"});
    });
});

module.exports=router;