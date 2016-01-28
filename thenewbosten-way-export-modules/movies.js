var MongoClient = require('mongodb').MongoClient;
module.exports = {
    printAvatar: function () {
        console.log('Avatar');
    },
    printChappy: function () {
        console.log('Hello Chappy');
    },
    users:undefined,
    connect: function (dbName) {

          MongoClient.connect('mongodb://localhost:27017/' + dbName, function (err, db) {
            if (err) {
                console.log('Unable to connect with Db ' + err);
            }
            else {
                console.log('Connection Established ' );
                users=db.collection('users');
            }

        });
        return this.users;
    }

};
