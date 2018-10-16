#!usr/bin/node

process.stdin.resume();

process.setEncoding('utf-8');

stdin.on('data',(data)=>{
  process.stdout.write(data.toUpperCase())
});

global.setTimeout(()=>{
  stdin.removeAllListener()
},3000);

stdin.on('end',()=>{
  process.exit()
})
