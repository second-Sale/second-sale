const url = require('../helps/get-urls');
const MongoClient = require('../helps/mongodb');

const findUser = function (userInformation, callback) {
    MongoClient.connect(url,function(err,db){
        const collection = db.collection('users');
        var userName = userInformation.userName;
        collection.find({userName:userName}).toArray(function (err,result) {
            callback(result);
        })
    }) ;
};

module.exports = findUser;