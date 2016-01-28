/**
 * Created by HaiderNazir on 1/27/2016.
 */
function User(){
    //properties
    //name
    //life
    //givelife
    //givelife(targetplayer)

    this.name='';
    this.life=100;
    this.giveLife= function giveLife (targetPlayer) {
        targetPlayer.life+=1;
        console.log(this.name +' Gave 1 life to '+targetPlayer.name);;
    }
}

var bucky=new User();
var bandy=new User();
bucky.name='Haider';
bandy.name='Mahnoor';

bucky.giveLife(bandy);
console.log('Haider '+bucky.life);
console.log('Mahnoor '+bandy.life);
//every instance of user can access this function
User.prototype.uppercut=function uppercut(targetPlayer){
    targetPlayer.life-=3;
    console.log(this.name + ' just uppercutted '+targetPlayer.name);

};

//every object can access this property
User.prototype.magic=10;

console.log(bandy.uppercut(bucky));
console.log(bucky.magic);