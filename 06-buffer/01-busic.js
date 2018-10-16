#!/usr/bin/node
//如何对buffer对象初始化 new Buffer
var buf1=new Buffer(256);//256内存空间

buf1[0]=23;

const log=console.log;
log('buffer length',buf1.length);
log('buffer1',buf1);

for(var i=0;i<buf1.length;i++){
   buf1[i]=i;
}
console.log('\nbuffer1',buf1);

var buf2=buf1.slice(250,256)  //buf2是buf1的切片
log('\nbuffer2',buf2);

buf2.fill(0);
log('\nbuffer2',buf2);

//数组初始化
var arr=['a',0xBA,0xDF,0x00,0x00,255,10];
var buf3 =new Buffer(arr);
log('\nbuffer3',buf3);

//字符串初始化
var buf4=new Buffer('hello world','utf-8');
//copy
buf3.copy(buf4);
log('\nbuffer content',buf3,'\n',buf4);
