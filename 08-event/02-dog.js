#!/usr/bin/node

const EventEmitter=require('events').EventEmitter,
      util=require('util')

function Dog(name,energy){
  this._name=name;
  this._energy=energy;
  EventEmitter.call(this);

  var timer=global.setInterval(()={
    if(_energy>0){
      self.emit('dark');
      _energy--;
    }else{
      _energy++;
    }
  },1000)
  


Dog.prototype=EventEmitter.prototype;
//util.inherits('Dog',EventEmitter)

module.export=Dog

