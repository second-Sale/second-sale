const express=require("express");
const router=express.Router();
const findUser=require("../dbs/find-user");

router.post("/login",function(req,res){
   var informationUser=req.body;
    findUser(informationUser,(result)=>{
        if(result.length === 0){
            res.send({isTrue:"0"});
        }else if(informationUser.password !== result[0].password){
                res.send({isTrue:"-1"});
            }else{
                res.send({isTrue:"1"});
            }

    })
});

module.exports=router;

