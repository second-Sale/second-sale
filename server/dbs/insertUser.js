const url = require("../helps/get-urls");
const MongoClient = require("../helps/mongodb");

function insertUser(userInformation,callback) {
    MongoClient.connect(url, function (err, db) {
        const collection = db.collection('users');

        collection.insert(userInformation, function (err, result) {
                callback(result);
            }
        );
    });
}

module.exports=insertUser;
