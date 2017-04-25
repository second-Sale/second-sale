var insertUser=require("../dbs/insertUser");
var findUser = require('../dbs/find-user');
var express=require("express");
var router=express.Router();

router.post('/addUser',function(req,res){
    var userInformation=req.body;
    console.log("user",userInformation);
    findUser(userInformation,(result) => {
        if(result.length !== 0){
            res.send(true);
        }else{
            insertUser(userInformation, (result)=> {
                console.log(result);
                res.send(false);
            });
        }
    })

});

module.exports=router;