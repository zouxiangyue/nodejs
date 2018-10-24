#!/usr/bin/node

const cp=require('child_process') 

var cat=cp.spawn('cat',['./a.text']);

var sort=cp.spawn('sort');

var uniq=cp.spawn('uniq');

cat.stdout(sort.stdin);
sort.stdout(uniq.stdin)
uniq.stdout(process.stdout)

