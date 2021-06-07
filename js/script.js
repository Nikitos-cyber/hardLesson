  'use strict';
  

  let arrDay = [ 'Воскресенье' , 'Понедельник' ,  'Вторник' ,  'Среда' ,  'Четверг' , 'Пятница' ,  'Суббота' ];
  let arrMonth = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  
  let timer ={
    weekDayNow: '',
    monthNow: '',
    nowDate: '',
    month: '',
    hours: 0 ,
    nowHoursVal: 0,
    checkHours: '',
    minuts: 0,
    strMinutsVal: '',
    seconds: 0,
    secondsVal: '',
    monthValFormat: 0,
    year: 0,
    str: ''


  };

    function day (date){
      return arrDay[date.getDay()];
    }

    function month (date){
      return arrMonth[date.getMonth()];
    }
    function monthVal (date){
      return date.getMonth();
    }

    function nowDayMonth (date){
      return date.getDate();
    }

    function nowYear (date){
      return date.getFullYear();
    }

    function nowHours  (date){
      return date.getHours();
    }
    
    function checkHours (date, call){
      let hours = call(date);
      let strHours = '';
      switch (hours){
        case 1:  strHours = 'час';
          break;

        case 2:  strHours = strHours = 'часа';
          break;
          
        case 3:  strHours = 'часa';
          break;
        
        case 4:  strHours = 'часa';
          break;
        
        case 21:  strHours = 'час';
          break;

        case 22:  strHours = strHours = 'часа';
          break;
        
        case 23:  strHours = strHours = 'часа';
          break;
        
        case 24:  strHours = strHours = 'часа';
          break;

        default: strHours = 'часов';

      }

      return strHours;

    }

    function minutsNow (date){
      return date.getMinutes();
    }
    
    function checkMinutsAndSeconds(date,str,call){
      
      let now = call(date);
      if (now > 20){
       now = now % 10;
      }
      switch(now){
       case 1: str += 'а';
        break;

       case 2:  str += 'ы';
        break;

      case 3:  str += 'ы';
        break;

      case 4:  str += 'ы';
        break;

       

      }
      return  str;
    }

    function secondsNow (date){
      return date.getSeconds();
    }


   
  
  timer.timeNow = function(){
     let date = new Date();
    
    timer.weekDayNow = day(date);
    timer.nowDate = nowDayMonth(date);
    timer.month = month(date);
    timer.year = nowYear(date);
    timer.nowHoursVal = nowHours(date);
    timer.checkHours = checkHours(date,nowHours);
    timer.minuts = minutsNow (date);
    timer.strMinutsVal = checkMinutsAndSeconds(date,'минут',minutsNow);
    timer.seconds = secondsNow(date);
    timer.secondsVal = checkMinutsAndSeconds(date,'секунд',secondsNow);


    timer.str = 'Сегодня ' + timer.weekDayNow  + ', ' + timer.nowDate + ' ' + timer.month + ' ' + timer.year + ' года' + ', ' + timer.nowHoursVal + ' ' + timer.checkHours + ' ' +  timer.minuts + ' ' + timer.strMinutsVal + ' ' + timer.seconds + ' '  + timer.secondsVal;

    

    console.log(timer.str);
  };

  


  let lenghtNum = function (num){
    let lenght = 0;
    do {
      num /= 10;
      lenght ++;
    }while (num >= 1);
    return lenght;
  };
  let formatNowTime = function (val){
    
   if (lenghtNum(val) < 2){
     val = '0' + val;
   }
   if (val === 0){
     val = '00' ;
   }
    
   return val;
  };

  let formatNowTimeLog = function(){
     let date = new Date();
    timer.monthValFormat = monthVal(date) + 1;
    let strDateFormat = formatNowTime(timer.nowDate)  + '.' + formatNowTime(timer.monthValFormat) + '.' + timer.year + ' ' + formatNowTime(timer.nowHoursVal) + ':' + formatNowTime(timer.minuts) + ':' + formatNowTime(timer.seconds) ;
    
    window.document.write(strDateFormat);
  };
  
  formatNowTimeLog();

  let build = function (){
    setInterval(() => {
      formatNowTimeLog();
       timer.timeNow();
       
    }, 1000);
  };

 
  build();