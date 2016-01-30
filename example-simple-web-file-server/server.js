var http=require('http');
var fs=require('fs');

//404 response
function  send404Response(res){
res.writeHead(404,{"Content-Type":"text/plain"});
    res.write('Error 404 Page not found');
    res.end();
}
//Handle a user request
function onRequest(request,response){
    if(request.method === 'GET' && request.url ==='/'){
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else{
        send404Response(response);
    }
}

http.createServer(onRequest).listen(3000);

console.log('Server is listening on Port 3000');