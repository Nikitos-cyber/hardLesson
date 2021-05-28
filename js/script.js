 
  let num = 266219;
  let output = " ";
  let result = 1;
  function getLenght(num){
  "use strict";
   return num.toString().length;
  }
  
  for( let i = 0; i < getLenght(num); i++){
    
    let str = num.toString(); 
    output += str[i];
    if ( i < getLenght(num) - 1)
    {
      output+=   ', ';
    }
    let int = str[i];
    int = Number(int);
    result *= int;
  }
  console.log(output);
  console.log('result: ' + result);
  
  console.log('result в 3й степени: ' + result ** 3);

  let string = String(num);
  
  console.log('Две первых цифры числа ' + string.substr(0, 2));