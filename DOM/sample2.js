'use strict';

{
  document.querySelector('button').addEventListener('click', () =>{    // クリックイベント
    document.getElementById('target').textContent = 'Change';    // ボタンをクリックした時に行われる処理
  });
}