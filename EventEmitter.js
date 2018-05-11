var events = require('events');
var http = require('http');
var fs = require('fs');
var eventEmitter = new events.EventEmitter();

console.log("Application Running");

var customEvent = function(){
    console.log("startApp Event fired");
    http.createServer(function(req,res){

        res.writeHead(200,{'Content-Type': 'text/html'});
        fs.readFile("index.html",function(err,data){
         res.write(data);
         res.end();
        });
    
    }).listen(3000);
};
eventEmitter.on('startApp', customEvent);
eventEmitter.emit("startApp");