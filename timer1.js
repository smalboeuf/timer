const args = process.argv;

args.splice(0,2);


const timer = function(args) {


  let numberArr = [];
  let time = 100;

  



  //Turn the string array to number array
  for (let i = 0; i < args.length; i++){
    numberArr[i] = Number(args[i]);
  }

  for (let i = 0; i < numberArr.length; i++) {

    time += numberArr[i] * 1000;
    setTimeout(() => {
      process.stdout.write("\x07");
    }, time);
    

  }

}

timer(args);