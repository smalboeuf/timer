const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {

  //If you press ctrl-c it will exit
  if (key === '\u0003'){
    process.stdout.write("Thanks for using me, ciao!");
    process.exit();
  }
  if(key === 'b'){
    process.stdout.write('\x07');
  }

  if(Number(key)) {
    process.stdout.write('setting timer for ' + key + " seconds...\n");

    setTimeout(() => {
    process.stdout.write('\x07');
    }, key * 1000);
  }


});