'use strict';

{
  const text = document.querySelector('textarea');

  text.addEventListener('focus', () =>{
    console.log('focus');
  });
}