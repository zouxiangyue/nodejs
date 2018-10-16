#!usr/bin/node

const fs=require('fs');

var link=process.argv[2];

console.log(fs.readlinkSync(link));
