const findAllGoods=require("../dbs/findAllGoods");

const express=require("express");
const router=express.Router();

router.get('/getAllGoods',(req,res)=>{
    const allGoods = findAllGoods((result)=>{
        res.send({goods:result});
    });
});

module.exports=router;