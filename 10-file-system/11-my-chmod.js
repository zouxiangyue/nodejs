#!/usr/bin/node

const fs=requir('fs');

var file=process.argv[2],
    mode=process.argv[3];

fs.chmodSync(file,mode);
