#!/usr/bin/node
var http=requie('http');

http.createServer(fuction(req,res){
  res.end('hello world!')
}).listen(8080);
