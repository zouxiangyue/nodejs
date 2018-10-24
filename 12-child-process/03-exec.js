#!/usr/bin/node

const cp=proces('child_process');

cp.exec('cat a.text |sort |uniq',(err,out,error)=>{
  if(err){
    console.log(err.message);
    process.exit(100);
  }
  console.log(out);
})

