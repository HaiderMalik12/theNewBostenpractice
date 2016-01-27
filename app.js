
function placeAnOrder(orderNumber){
    console.log('Customer Order No: '+orderNumber);
    //work as a database
    //tell to the db
    cookAndDeliverFood(function(){
       console.log('Deliverd Food order '+orderNumber);
    });
}

//simulated a 5 second operation
//connect to the database
function cookAndDeliverFood(callback){
    setTimeout(callback,5000);
}

//simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);



