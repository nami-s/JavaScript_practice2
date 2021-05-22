'use strict';

{
  document.querySelector('button').addEventListener('dblclick', ()=>{    // ダブルクリックイベント
    console.log('ダブルクリック');
  });

  document.addEventListener('mousemove', e =>{    // マウスを動かした時のイベント
    // console.log('マウスを動かしました');
    console.log(e.clientX,e.clientY);    // ブラウザの表示領域のXY座標を表示
  });

  document.addEventListener('keydown', e => {    // キーボードのキーを押した時のイベント
    console.log(e.key);    // 押したキーを取得
  });
}