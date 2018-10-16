#!usr/bin/node

const fs=require('fs');

var file=process.argv[2] || __filename;

var src=fs.createReadStream(file);

/*// 异常处理
src.on('error',(err)=>{
  console.log(err.message);
  process.exit(1)
});

src.on('open',function(){
  console.og('open');
  this.pipe(process.stdout)
})
*/

//全局异常处理


process.on('uncaughtException',(err)=>{
  console.log(err.message);
  process.exit(100);

})
