const url=require("../helps/get-urls");
const MongoClient=require("../helps/mongodb");

const findAllGoods=function(callback){
  MongoClient.connect(url,(err,db)=>{
      const collection=db.collection("goods");
      collection.find().toArray((err,result)=>{
          callback(result);
      })
  });
};

module.exports=findAllGoods;