#!/usr/bin/node

//eventEmitter

const EventEmitter=require('events').EventEmitter;

var emiter=new EventEmitter();

emitter.on('hello',()=>{ //事件函数
  console.log('hello world!');
});

emitter.on('hello',()=>{
  console.log('hello world')
});

console.log(emit.listeners('hello'));

emitter.on('bye',()=>{
  console.log('bye event');
  process.exit();
});

global.setInterval(()=>{
  emitter.emit('hello');//触发事件响
},1000);

global.setInterval(()={
  emitter.emit('bye');
},5000)

