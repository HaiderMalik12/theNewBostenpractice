var itemDetails=require('./item-details');
var myItemDetails=itemDetails();
myItemDetails.balance=1000.0
var party={
    id:1,
    itemDetails:myItemDetails,
    partyName:'Haider Malik'
};

console.log(party);