const insertGoods =require("../dbs/insertGoods");

const express = require("express");
const router=express.Router();

router.post('/postMessage',(req,res)=>{
    var goodsInformation = req.body;
    insertGoods(goodsInformation,(result)=>{
        res.send(true);
    })
});

module.exports=router;