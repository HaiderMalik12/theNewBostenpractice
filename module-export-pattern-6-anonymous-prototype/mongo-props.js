var Mongo = function () {
};
var MongoClient = require('mongodb').MongoClient;
//make public props for evey Object

Mongo.url = 'mongodb://localhost:27017';
Mongo.db = undefined;

Mongo.prototype.MongoClient = function (dbName) {
   Mongo.url=Mongo.url+'/'+dbName;

    MongoClient.connect(Mongo.url, function (err, db) {
        if (err) console.log('Unable to connect with db' + err);
        else {
         console.log('Connected with Db');
        }
    });
}

module.exports =new Mongo;