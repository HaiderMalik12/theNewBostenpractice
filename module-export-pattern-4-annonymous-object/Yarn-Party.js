//Implement Inheritance

var yarnParty= require('./party.js');

yarnParty.name='Haider Malik';
yarnParty.id=1;
yarnParty.city='FSD';
yarnParty.address='House no 5 A-Block G.M Abad FSD';

//Extend the Properties of yarnParty
yarnParty.type='Yarn';
yarnParty.credit=109.0;
yarnParty.debit=100.0;
yarnParty.balance=100.0;

console.log(yarnParty);