//Its Like a Class

function Person(first, last, age, eyecolor, favt_song, favt_color) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.favt_song = favt_song;
    this.favt_color = favt_color
}
/*
 Adding Properties to an prototype every object can use these properties
 */
Person.prototype.nationality = 'Pakistani';

/*
 Adding Methods to an Prototype Object
 Every instance of person can access this Method
 */
Person.prototype.conacts = function () {
    return this.firstName + this.lastName + this.eyeColor + this.age;
}


//constructor
var haider = new Person('Haider', 'Malik', 22, 'Yellow', 'Like Home', 'black');

var faham = new Person('Faham', 'Fasihi', 22, 'Brown', 'Let me Feel', 'black');

//-------------------------------Adding Property to an existing Object---------------
//haider.nationality = 'Pakistan';


//--------------Adding a Methods to an existing Object----------
/*
 These methods will be added just only for haider Object not for Faham Object
 */
haider.getname = function () {
    console.log(this.name);
}
haider.setName = function (name) {
    this.name = name;
}
haider.getNationality = function () {
    return this.nationality;
}
haider.setNationaliy = function (nationality) {
    this.nationality = nationality;
}
haider.setAge = function (age) {
    this.age = age;
}
haider.getAge = function () {
    return this.age;
}
haider.setEyeColor = function (eyeColor) {
    this.eyeColor = eyeColor;
}
haider.getEyeColor = function () {
    return this.eyeColor;
}

//-------------------------------------------------------------------
/*
 You could add properties to an existing prototype
 */

console.log(faham.nationality);
console.log(haider.getNationality());
console.log(faham.conacts());
console.log(haider.conacts());



