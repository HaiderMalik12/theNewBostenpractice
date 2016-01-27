/**
 * Created by HaiderNazir on 1/27/2016.
 */

//example
//lets suppose 100 users will want to check the marks from the portal

//Server will get the request from user
function getRequestFromUsers(clientName){
    console.log('Request come from : ' +clientName );

    checkMarksThroughPortalDb(function(){
        console.log(clientName+' checked marks in '+'5 seconds');
    });

}

//It will take 5 seconds to load the record and check marks for each user
function checkMarksThroughPortalDb(callback){

    setTimeout(callback,5000);
}

getRequestFromUsers('Haider');
getRequestFromUsers('Mahnoor');
getRequestFromUsers('Alishba');
getRequestFromUsers('Faham');
getRequestFromUsers('Tahir');
getRequestFromUsers('Danial');
getRequestFromUsers('Ghayuur');
getRequestFromUsers('Moiz');
getRequestFromUsers('Haider');
getRequestFromUsers('Mahnoor');
getRequestFromUsers('Alishba');
getRequestFromUsers('Faham');
getRequestFromUsers('Tahir');
getRequestFromUsers('Danial');
getRequestFromUsers('Ghayuur');
getRequestFromUsers('Moiz');
getRequestFromUsers('Haider');
getRequestFromUsers('Mahnoor');
getRequestFromUsers('Alishba');
getRequestFromUsers('Faham');
getRequestFromUsers('Tahir');
getRequestFromUsers('Danial');
getRequestFromUsers('Ghayuur');
getRequestFromUsers('Moiz');getRequestFromUsers('Haider');
getRequestFromUsers('Mahnoor');
getRequestFromUsers('Alishba');
getRequestFromUsers('Faham');
getRequestFromUsers('Tahir');
getRequestFromUsers('Danial');
getRequestFromUsers('Ghayuur');
getRequestFromUsers('Moiz');getRequestFromUsers('Haider');
getRequestFromUsers('Mahnoor');
getRequestFromUsers('Alishba');
getRequestFromUsers('Faham');
getRequestFromUsers('Tahir');
getRequestFromUsers('Danial');
getRequestFromUsers('Ghayuur');
getRequestFromUsers('Moiz');getRequestFromUsers('Haider');
getRequestFromUsers('Mahnoor');
getRequestFromUsers('Alishba');
getRequestFromUsers('Faham');
getRequestFromUsers('Tahir');
getRequestFromUsers('Danial');
getRequestFromUsers('Ghayuur');
getRequestFromUsers('Moiz');



