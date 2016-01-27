/**
 * Created by HaiderNazir on 1/27/2016.
 */
var bucky={
favFood:'Biryani',
    favMovie:'social Networking'
};

//trying to make a copy of bucky
//not making a copy
//you just giving a reference to bucky
var person=bucky;

person.favFood='salad';

console.log(bucky.favFood);

//=== check the value and with datatype
