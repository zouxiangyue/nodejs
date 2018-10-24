#!/usr/bin/node

cosnt cp=require('child_process');

const http=require('http')

http.createServer((req,res)=>{
   var cmd=cp.spawn('./02-child.js');
       cmd.stdout.pipe(res)

}).listen(8080);

