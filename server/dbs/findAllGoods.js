const url = require('../helps/get-urls');
const MongoClient = require('../helps/mongodb');

const findAllGoods = function (callback) {
    MongoClient.connect(url,function(err,db){
        const collection = db.collection('goods');

        collection.find().toArray(function (err,result) {
            callback(result);
        })
    }) ;
};

module.exports = findAllGoods;