#!/usr/bin/node

const cp=require('child-process');

var cmd=cp.spawn('cat',['01-exec-file.js']);

cmd.stdout.pipe(process.stdout);

cmd.stderr.pipe(process.stderr)
