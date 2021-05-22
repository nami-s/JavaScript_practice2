'use strict';

{
  document.querySelector('button').addEventListener('dblclick', ()=>{    // ダブルクリックイベント
    console.log('ダブルクリック');
  });

  document.addEventListener('mousemove', () =>{    // マウスを動かした時のイベント
    console.log('マウスを動かしました');
  });
}