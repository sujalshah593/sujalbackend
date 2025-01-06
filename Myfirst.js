import http from 'http';

// var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.end('<div><h1>Sujal Shah</h1></div>');
}).listen(3000);