var Student=function(){};

Student.prototype.print=function(){
    console.log('Hello World from student');
}

//export the anonymous Prototype

module.exports=Student;