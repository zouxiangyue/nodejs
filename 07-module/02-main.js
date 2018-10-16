#!/usr/bin/node

/*
var pi=require('./02-export-var');
console.log('pi',pi);
*/
/*
var c=require('./02-export-function');
console.log(c(20).diameter())
console.log(c(20).cir());
console.log(c(20).area());
*/

var c=require('./02-export-object.js')
console.log(c.diameter(20))
console.log(c.cir(20));
console.log(c.area(20))


