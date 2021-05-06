'use strict';

{
  function update(){
    document.getElementById('target').textContent = 'Change';
  }

  setTimeout(update, 1000);
}