#!usr/bin/node

const fs=require('fs');

var file=process.argv[2] || __filename;


try{
  console.log(fs.readFileSync(file).toString('utf-8'))
}catch(err){
  console.error('Sorry,Something wrong');
  process.exit(100);

}

