'use strict';

{
  document.querySelector('button').addEventListener('click', () =>{    // クリックイベント
    const targetNode = document.getElementById('target');

    targetNode.textContent = 'Change';
    targetNode.title = 'This is title';
  });
}