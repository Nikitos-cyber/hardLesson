  'use strict';

  let week = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница', 'Суббота' ];

  let lookWeek = function(){
    let date = new Date();

    function today (date){
      return date.getDay();
    }
    let num = today(date);
    console.log('num: ', num);
  
    let str = 'Суббота';
    let str2 = 'Воскресенье';
    str = str.italics();
    str2 = str2.italics();
    let result = '';
    week.splice(6, 6,str );
    week.splice(0, 1,str2 );
    week.forEach(function(item,i,week){
      
     
      if(num  === i){
        let str3 = item;
        str3 = str3.bold(); 
       result += str3 + '<br><br>';
      }else{
         result += item + '<br><br>';
      }
     
    });

    

    window.document.write(result);
    
  };

  lookWeek();