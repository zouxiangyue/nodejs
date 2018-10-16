#!urs/bin/node
function Bomb(){
  this.message='Boom!'
}

Bomb.prototype.explode=function(){ //原型方法explode
  console.log(this.message);
}

var bomb=new Bomb();

var timeId=setTimeout(bomb.explode.bind(bomb),3000)

clearTimeout(timeId);
