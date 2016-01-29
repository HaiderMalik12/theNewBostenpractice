var Student=function(){};

Student.prototype.print=function(){
    console.log('Hello From Student Named Prototype');
}


//export the named Prototype

exports.Student=Student;