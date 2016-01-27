/**
 * Created by HaiderNazir on 1/27/2016.
 */
var haider={
    id:1,
    name:'Haider Malik',
    city:'FSD',
    credit:1123.0,
    debit:123.0,
    balance:23.4
};

//make a refernce to an haider not copy of new instance
var burjBank=haider;
var sanaSafina=haider;

burjBank.name='Burj Bank';
sanaSafina.name='Sana Safina';

console.log(haider);