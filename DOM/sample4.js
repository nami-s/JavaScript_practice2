'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');    // li要素の作成
    const text = document.querySelector('input');    // input要素の取得
    li.textContent = text.value;    // input要素で入力された値を取得して、liのテキストに代入
    document.querySelector('ul').appendChild(li);    // ulの子要素にliを追加

    text.value = '';    // 入力欄をクリアにする
    text.focus();    // 入力欄（input要素）にフォーカスを当てる
  });
}