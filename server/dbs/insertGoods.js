const url = require('../helps/get-urls');
const MongoClient = require('../helps/mongodb');


function insertGoods(goodsInformation,callback) {
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('goods');

        collection.insert(goodsInformation, function (err, result) {
                callback(result);
            }
        );
    });
}

module.exports= insertGoods;