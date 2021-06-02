  'use strict';

  let arr = ['223','3321','838','429920','2288','2288','292820'];

  let startString = function (){
      let str = '';
    for( let i = 0 ; i < arr.length; i++){
      let string = arr[i];
      string = string.slice(1,2);
      if(string == 2 || string == 4){
        str += arr[i] + ' ';
      }
    }

    return str;

  };

  console.log(startString());


  let simpleNumbers = function (num){
    
    
    for ( let i = 2 ; i < num  ; i++){
      if(num % i === 0){
        
        return 0;
      }
      
      }
      if (num > 1){
        console.log('Простое число : ' + num + ' делители числа : '+'1 и ' + num);
      }
  };

  
  for( let j = 1 ; j < 100 ; j++){
    simpleNumbers(j);
  }

  