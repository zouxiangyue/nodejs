#!/usr/bin/node

/*const name=process.argv[2],
      pwd=process.argv[3];

var str=name+':'+pwd;

var buf=new Buffer(str,'utf-8');

console.log('base64 str',buf.toString('base64'))*/

//base64的应有场景
const str=process.argv[2];

var buf=new Buffer(str,'base64');
var namePwd=buf.toString('utf-8');
var data=namePwd.split(':');
console.log('user name:%s\npassword%s',data[0],data[1]);

