#!/usr/bin/node
 const fs=require('fs');
var fileName=process.argv[2];
console.log(fileName);
var buf=fs.readFileSync(fileName);
const log=console.log
console.log('BMP file width',buf.readUInt32LE(18));
console.log('BMP file height',buf.readUInt32LE(22));
console.log('BMP color deapth',buf.readUInt16LE(28));
