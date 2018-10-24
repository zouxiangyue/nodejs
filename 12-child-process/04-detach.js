#!usr/bin/node

cosnt cp=require('child_process');

console.log(‘I am father process.PID’,process.pid);

var cmd=cp.spawn(‘./02-child.js’,[],{detach:true,stdio:[‘ignore’,1,2]});

//Cat.stdout.pipe(process.stdout);

global.setTimeout(()=>{
   console.log(‘I am father,bye’);
   process.exit();
},6000)
