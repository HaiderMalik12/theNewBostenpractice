//make class Buz
var Buz=function() {};
Buz.prototype.log=function(){
    console.log('buz!');
} ;
//export this Anonymous Object
module.exports=new Buz();

