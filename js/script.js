  'user strict';

  let collectionList = document.querySelectorAll('ul');
  
 
 function printList (){
  
  let newItem = document.createElement('li');
  let  input = document.querySelectorAll('input');

  function checkInput(val){
    if (val.trim() === ''){
      return false;
    }
    return true;
  }
  newItem.textContent = '' + input[0].value ;
  if (checkInput(newItem.textContent) === true){
    collectionList[0].append(newItem);
  }else {
    alert ('Введите текстовое значение ');
  }
 }
  
 let button = document.getElementsByTagName('button')[0];

  button.addEventListener('click' , function(){
  
   printList ();
  });