#!usr/bin/node
console.log('start..');


/*
//时间到后取消定时器
function loop(){
  console.log('loop!');

};

var timeId=setInterval(loop,1000);


global.setTimeout(()=>{//global 可以省略
  clearInterval(timeId
  console.log('end')
},3000)
*/

//次数到上限,取消定时器
//
var i=0;//计数器

var loop =function(){
  i++;
  if(i>10){
    console.log('end')
    clearInterval(timeId);
  }
  else{
    console.log('loop',i);
  }
};

  var timeId=setInterval(loop,1000);

