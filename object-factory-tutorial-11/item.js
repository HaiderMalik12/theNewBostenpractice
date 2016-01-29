var itemDetails=require('./item-details');

var myItemDetails=itemDetails();

var item={
    itemId:1,
    ItemDetails:myItemDetails
};

console.log(item);