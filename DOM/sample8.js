'use strict';

{
  document.querySelector('form').addEventListener('submit', e => {    // submitイベント（formタグ内のボタンをクリックしたときに発生する）
    e.preventDefault();    // 既定の動作をキャンセルするメソッド（この場合は画面遷移をキャンセルしている）
    console.log('submit');
  });
}