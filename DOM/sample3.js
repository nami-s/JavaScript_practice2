'use strict'

{
  document.querySelector('button').addEventListener('click', () => {
    const item2 = document.createElement('li');    // .createElement()　要素を作成するメソッド
    item2.textContent = 'item 2';

    const ul = document.querySelector('ul');    // 親要素の呼び出し
    ul.appendChild(item2);    // appendChild()　子要素の末尾に要素を追加するメソッド
  });
}