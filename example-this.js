/**
 * Created by HaiderNazir on 1/27/2016.
 */
var haider={
    printFirstName: function () {
        console.log('My Name is Haider');
        console.log(this === haider);
    }
};

haider.printFirstName();
//---------------------Define POJO Model in javascript way-----------------------
var  party={
    id:1,
    name:'haiderMalik',
    city:'FSD',
    credit:12121.0,
    debit:1232.0,
    balance:12321.0,
    getId:function(){
        return this.id;
    },
    setId:function(id){
        this.id=id;
    },
    getName:function(){
       return this.name;
    },
    setName:function(name){
        this.name=name;
    },
    getCredit:function(){
        return this.credit;
    },
    setCredit:function(credit){
        this.credit=credit;
    },
    getDebit:function(){
        return this.debit;
    },
    setDebit:function(debit){
        this.debit=debit;
    },
    setBalance:function(balance)
    {
        this.balance=balance;
    },
    getBalance:function(){
        return this.balance;
    }
}

party.setId(1);
console.log('Party Id : '+party.getId());
console.log('Party Name : '+party.getName());
console.log('Party Credit : '+party.getCredit());
console.log('Party Balance'+party.getBalance());
console.log('Party Debit'+party.balance);
