#!usr/bin/node

const fs=require('fs');

var file=process.argv[2] || __filename

var fid=fs.openSync(file,'r');//'r'表示只读

//console.log(fs.readFileSync(fid).toString('utf-8'));

fs.writeSync(1,fs.readFileSync(fid).toString('utf-8'))
//1标准输出流,0标准输入流

fs.closeSync(fs);


