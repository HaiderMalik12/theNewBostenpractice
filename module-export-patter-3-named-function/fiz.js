var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';

//export the named Function
exports.connection=function(dbName){
    url=url+dbName;
   MongoClient.connect(url,function(err,db){
        if(err) {
            console.log('Unable to connect with users');
        }
        else{
           console.log('Connected Successfully !');

        }
    });

}

exports.fiz=function(){
    console.log('Hello From fiza');
}
var MongoClient;
exports.MongoClient=function(){
    console.log('Hello MongoClient from Named Function');
}
exports.namedFunction=function(){
    console.log('Welcome from Named Function');

}

