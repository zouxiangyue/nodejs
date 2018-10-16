#!usr/bin/node

process.stdin.resume();

process.on('SIGINT',()=>{ //
  console.log('you have pressed ctrl+c');
  process.exit()
});

process.on('SIGTSTP',()=>{  //SIGTSTP表示信号名称,对应一个事件
  console.log('you have pressed ctrl+d');
  process.exit();
})
