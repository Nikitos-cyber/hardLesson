 'use strict';
  let lang = ' ';
  let year , month , day;

  lang = prompt('Ru / En ?');

 
 // Решение через is else
  function getWeekDayRu(date){

    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    return days[date.getDate()];
  }


  function getWeekDayEn(date){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDate()];
  }

  

  let date ;

  if(lang === 'ru' || lang === 'Ru' || lang === 'RU' ){

    alert('Дни недели:  Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    year = prompt('Введите текущий год:');
    month = prompt('Введите текущий месяц:');
    day = prompt('Введите текущий день:');

    date = new Date(year, month ,day);

    alert('Сегодня: ' +  getWeekDayRu(date));
    

  }else if(lang === 'en' || lang === 'En' || lang === 'EN'){
    alert('Days of the week:  Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
    year = prompt('Enter the current year:');
    month = prompt('Enter the current month:');
    day = prompt('Enter the current day:');

    date = new Date(year, month ,day);

    alert(getWeekDayEn(date));
  }else {
    alert('This language is not supported!');
  }
  
  // Решение через switch

  lang = prompt('Ru / En ?');
  switch(lang){

    case 'ru':  
      alert('Дни недели:  Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
      break;

    case 'RU':  
    alert('Дни недели:  Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;

    case 'Ru':
      alert('Дни недели:  Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
      break; 

    case 'En':
      alert('Days of the week:  Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
      break;
      
    case 'EN':
      alert('Days of the week:  Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
      break;

    case 'en':
      alert('Days of the week:  Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
      break;

    default: alert('This language is not supported!');

  }

  // Решение через Массив
  
  let array = [ ['Воскресенье','Понедельник' , 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']];
  
  let ru =' ';

   lang = prompt('ru / en ?');
 
   function printRu(){
      for (let i = 0; i < 7 ; i++){
      ru += String(array[0][i]) + ' ';
     
      
    }
    alert('Дни недели:' + ru);

   }

   let result1 = lang === 'ru' ? printRu() : 0 ;

   function printEn(){
      for (let i = 0; i < 7 ; i++){
      ru += String(array[1][i]) + ' ';
     
      
    }
    alert('Days of the week:' + ru);

   }

   let result2 = lang === 'en' ? printEn() : 0 ;


   // задание 2
   let namePerson ;

   namePerson = prompt('Введите имя:');

   let resulNameDirector = namePerson === 'Артем' ? console.log('Директор') : console.log('Студент');

   let resulNameTeacher = namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');


 
    
   
  
  
