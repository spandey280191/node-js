var http = require('http');
var fs = require('fs');
console.log("Application Running");


http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.readFile("index.html",function(err,data){
     res.write(data);
     res.end();
    });

}).listen(3000);