'use strict';

{
  document.querySelector('form').addEventListener('submit', () => {    // submitイベント（formタグ内のボタンをクリックしたときに発生する）
    console.log('submit');
  });
}