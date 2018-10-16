#!usr/bin/node

var circle=function(r){
  return {
    diameter:function(){
      return r*2
    },
    cir:function(){
      return Math.PI*r*2
        
    },
    area:function(){
      return Math.PI*r*r;
    }
  }
};
module.exports=circle;
